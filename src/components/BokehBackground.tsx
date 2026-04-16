import { useEffect, useRef, useState } from "react";

/**
 * WebGL2 Bokeh Background — faithful replica of the Framer "Bokeh Background"
 * component by Kevin Levron (threejs-components).
 *
 * Uses instanced circles with:
 *  • Perlin-noise displacement for organic drift
 *  • Simulated depth-of-field (bokeh ring blur)
 *  • Mouse-based parallax
 *  • Additive blending for glow
 */

const VERT = `#version 300 es
precision highp float;

// per-vertex: unit quad
in vec2 aPos;

// per-instance
in vec2  iCenter;   // position
in float iRadius;   // base scale
in float iDepth;    // 0..1  (affects DoF)
in vec3  iColor;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;     // normalised -1..1
uniform float uNoiseScale;
uniform float uNoiseAmp;

out vec2  vUV;
out vec3  vCol;
out float vBokeh;  // 0 = sharp, 1 = fully blurred

// ---- simplex-style 3-D noise (compact) ----
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 perm(vec4 x){return mod289(((x*34.)+10.)*x);}

float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g,l.zxy);
  vec3 i2=max(g,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-.5;
  i=mod289(i);
  vec4 p=perm(perm(perm(
    i.z+vec4(0.,i1.z,i2.z,1.))
   +i.y+vec4(0.,i1.y,i2.y,1.))
   +i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=1./7.;
  vec3 ns=n_*vec3(1.,2.,3.)-vec3(.5,.5,.5);
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 ox=fract(x_*ns.x)*2.-1.;
  vec4 oy=fract(y_*ns.x)*2.-1.;
  vec4 dxx=ox*ox; vec4 dyy=oy*oy;
  vec4 b=1.75-dxx-dyy;
  vec4 m=max(.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m; m=m*m;
  vec4 sh=-step(b,vec4(0.));
  vec4 a0=b+sh*(-ox-1.);
  vec4 a1=b.yzwx+sh.yzwx*(-oy.yzwx-1.);
  a0*=1.79284291400159-.85373472095314*dxx;
  a1*=1.79284291400159-.85373472095314*dyy;
  vec3 g0=vec3(a0.x,a1.x,ox.x*a0.x+oy.x*a1.x);
  vec3 g1=vec3(a0.y,a1.y,ox.y*a0.y+oy.y*a1.y);
  vec3 g2=vec3(a0.z,a1.z,ox.z*a0.z+oy.z*a1.z);
  vec3 g3=vec3(a0.w,a1.w,ox.w*a0.w+oy.w*a1.w);
  return 42.*dot(m,vec4(dot(g0,x0),dot(g1,x1),dot(g2,x2),dot(g3,x3)));
}

void main(){
  vUV  = aPos * .5 + .5;
  vCol = iColor;

  // noise displacement
  vec3 nIn = vec3(iCenter * uNoiseScale, uTime * .25);
  float nx = snoise(nIn);
  float ny = snoise(nIn + vec3(17.1, 31.7, 0.));
  vec2 displaced = iCenter + vec2(nx, ny) * uNoiseAmp;

  // parallax based on depth
  displaced += uMouse * (.04 + .08 * iDepth);

  // depth-of-field bokeh factor
  float focalPlane = .5;
  vBokeh = smoothstep(0., .7, abs(iDepth - focalPlane));

  // scale grows with bokeh
  float scale = iRadius * (.6 + 1.4 * vBokeh);

  // final screen-space position
  vec2 aspect = vec2(uRes.y / uRes.x, 1.);
  vec2 pos = displaced + aPos * scale * .02;
  pos *= aspect;

  gl_Position = vec4(pos * 2. - 1., 0., 1.);
}
`;

const FRAG = `#version 300 es
precision highp float;

in vec2  vUV;
in vec3  vCol;
in float vBokeh;

out vec4 fragColor;

void main(){
  float d = length(vUV - .5) * 2.;  // 0 at center, 1 at edge

  // sharp circle → bokeh ring transition
  float inner = smoothstep(1., .92 - vBokeh * .35, d);   // filled core
  float ring  = smoothstep(1., .94, d);                   // hard edge
  ring = 1. - ring;
  float bokehRing = mix(inner, ring * smoothstep(.55, .85, d) + inner * .25, vBokeh);

  float alpha = bokehRing * (.25 + .35 * (1. - vBokeh));
  fragColor = vec4(vCol * alpha, alpha);
}
`;

interface BokehProps {
  colors?: string[];
  particleCount?: number;
  className?: string;
}

export function BokehBackground({
  colors = ["#177FC6", "#20B2AA", "#0A2647"],
  particleCount = 60,
  className = "",
}: BokehProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ok, setOk] = useState(true);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetMouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "high-performance",
    });
    if (!gl) { setOk(false); return; }

    // --- compile helpers ---
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn("Bokeh shader error:", gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { setOk(false); return; }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setOk(false); return;
    }
    gl.useProgram(prog);

    // --- uniforms ---
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");
    const uNoiseScale = gl.getUniformLocation(prog, "uNoiseScale");
    const uNoiseAmp = gl.getUniformLocation(prog, "uNoiseAmp");

    gl.uniform1f(uNoiseScale, 3.0);
    gl.uniform1f(uNoiseAmp, 0.035);

    // --- geometry: unit quad as triangle strip ---
    const quadVerts = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
    const quadBuf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(gl.ARRAY_BUFFER, quadVerts, gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // --- instance data ---
    const hexToVec3 = (hex: string): [number, number, number] => {
      const v = parseInt(hex.replace("#", ""), 16);
      return [(v >> 16 & 255) / 255, (v >> 8 & 255) / 255, (v & 255) / 255];
    };

    const N = particleCount;
    // iCenter(2) + iRadius(1) + iDepth(1) + iColor(3) = 7 floats per instance
    const stride = 7;
    const instData = new Float32Array(N * stride);
    for (let i = 0; i < N; i++) {
      const o = i * stride;
      instData[o + 0] = Math.random();            // center.x
      instData[o + 1] = Math.random();            // center.y
      instData[o + 2] = 0.5 + Math.random() * 1.5; // radius
      instData[o + 3] = Math.random();            // depth
      const c = hexToVec3(colors[Math.floor(Math.random() * colors.length)]);
      instData[o + 4] = c[0];
      instData[o + 5] = c[1];
      instData[o + 6] = c[2];
    }

    const instBuf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, instBuf);
    gl.bufferData(gl.ARRAY_BUFFER, instData, gl.STATIC_DRAW);

    const bpe = 4; // bytes per float
    const strideBytes = stride * bpe;

    const iCenter = gl.getAttribLocation(prog, "iCenter");
    gl.enableVertexAttribArray(iCenter);
    gl.vertexAttribPointer(iCenter, 2, gl.FLOAT, false, strideBytes, 0);
    gl.vertexAttribDivisor(iCenter, 1);

    const iRadius = gl.getAttribLocation(prog, "iRadius");
    gl.enableVertexAttribArray(iRadius);
    gl.vertexAttribPointer(iRadius, 1, gl.FLOAT, false, strideBytes, 2 * bpe);
    gl.vertexAttribDivisor(iRadius, 1);

    const iDepth = gl.getAttribLocation(prog, "iDepth");
    gl.enableVertexAttribArray(iDepth);
    gl.vertexAttribPointer(iDepth, 1, gl.FLOAT, false, strideBytes, 3 * bpe);
    gl.vertexAttribDivisor(iDepth, 1);

    const iColor = gl.getAttribLocation(prog, "iColor");
    gl.enableVertexAttribArray(iColor);
    gl.vertexAttribPointer(iColor, 3, gl.FLOAT, false, strideBytes, 4 * bpe);
    gl.vertexAttribDivisor(iColor, 1);

    // --- blending ---
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE); // additive

    // --- resize ---
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // --- mouse ---
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.current.x = (e.clientX - rect.left) / rect.width;
      targetMouse.current.y = (e.clientY - rect.top) / rect.height;
    };
    canvas.addEventListener("mousemove", onMove);

    // --- render loop ---
    let raf: number;
    const t0 = performance.now();

    const loop = () => {
      raf = requestAnimationFrame(loop);

      // smooth mouse
      mouseRef.current.x += (targetMouse.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouse.current.y - mouseRef.current.y) * 0.05;

      const elapsed = (performance.now() - t0) / 1000;
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(
        uMouse,
        (mouseRef.current.x - 0.5) * 2,
        (mouseRef.current.y - 0.5) * -2,
      );

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Need to rebind quad buffer for aPos
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      // rebind instance buffer for instance attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, instBuf);
      gl.vertexAttribPointer(iCenter, 2, gl.FLOAT, false, strideBytes, 0);
      gl.vertexAttribPointer(iRadius, 1, gl.FLOAT, false, strideBytes, 2 * bpe);
      gl.vertexAttribPointer(iDepth, 1, gl.FLOAT, false, strideBytes, 3 * bpe);
      gl.vertexAttribPointer(iColor, 3, gl.FLOAT, false, strideBytes, 4 * bpe);

      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 4 - 4, 4, N);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      gl.deleteBuffer(quadBuf);
      gl.deleteBuffer(instBuf);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(prog);
    };
  }, [colors, particleCount]);

  if (!ok) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}
