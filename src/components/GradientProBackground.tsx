import { useEffect, useRef, useState } from "react";

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform int uBlendMode;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

out vec4 fragColor;

#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a){
    float s=sin(a),c=cos(a);
    return mat2(c,-s,s,c);
}

vec2 hash(vec2 p){
    p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));
    return fract(sin(p)*43758.5453);
}

float noise(vec2 p){
    vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);
    float n=mix(
        mix(dot(-1.0+2.0*hash(i+vec2(0,0)),f-vec2(0,0)),
            dot(-1.0+2.0*hash(i+vec2(1,0)),f-vec2(1,0)),u.x),
        mix(dot(-1.0+2.0*hash(i+vec2(0,1)),f-vec2(0,1)),
            dot(-1.0+2.0*hash(i+vec2(1,1)),f-vec2(1,1)),u.x),
        u.y);
    return 0.5+0.5*n;
}

vec3 blendMode(vec3 base, vec3 blend, int mode){
  if(mode==1) return base*blend;
  if(mode==2) return 1.0-(1.0-base)*(1.0-blend);
  if(mode==3){
    vec3 lt=2.0*base*blend;
    vec3 gt=1.0-2.0*(1.0-base)*(1.0-blend);
    return mix(lt,gt,step(0.5,base));
  }
  return blend;
}

void main(){
  float t=iTime*uTimeSpeed;
  vec2 uv=gl_FragCoord.xy/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;

  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/max(amplitude,0.001);
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/max(amplitude*0.5,0.001);

  vec3 col1=uColor1;
  vec3 col2=uColor2;
  vec3 col3=uColor3;
  float bal=uColorBalance;
  float soft=max(uBlendSoftness,0.0);

  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendCoord=(tuv*blendRot).x;

  float edge0=-0.3-bal-soft;
  float edge1=0.2-bal+soft;
  float v0=0.5-bal+soft;
  float v1=-0.3-bal-soft;

  vec3 layer1=mix(col3,col2,S(edge0,edge1,blendCoord));
  vec3 layer2=mix(col2,col1,S(edge0,edge1,blendCoord));

  float blendWeight=S(v0,v1,tuv.y);
  vec3 finalCol=blendMode(layer1,layer2,uBlendMode);
  finalCol=mix(layer1,finalCol,blendWeight);

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5) grainUv+=vec2(iTime*0.05);
  float grainNoise=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  finalCol+=(grainNoise-0.5)*uGrainAmount;

  finalCol=(finalCol-0.5)*uContrast+0.5;

  float luma=dot(finalCol,vec3(0.2126,0.7152,0.0722));
  finalCol=mix(vec3(luma),finalCol,uSaturation);

  finalCol=pow(max(finalCol,0.0),vec3(1.0/max(uGamma,0.001)));

  finalCol=clamp(finalCol,0.0,1.0);
  fragColor=vec4(finalCol,1.0);
}`;

interface GradientProProps {
  primary?: string;
  secondary?: string;
  background?: string;
  speed?: number;
  colorShift?: number;
  warpStrength?: number;
  warpDetail?: number;
  warpSpeed?: number;
  warpRange?: number;
  blendAngle?: number;
  blendSoftness?: number;
  blendMode?: "normal" | "multiply" | "screen" | "overlay";
  rotation?: number;
  noise?: number;
  grainAmount?: number;
  grainSize?: number;
  grainAnimate?: boolean;
  contrast?: number;
  gamma?: number;
  saturation?: number;
  focusX?: number;
  focusY?: number;
  zoom?: number;
  className?: string;
}

function hexToGL(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

export function GradientProBackground({
  primary = "#177FC6",
  secondary = "#20B2AA",
  background = "#0A2647",
  speed = 0.25,
  colorShift = 0,
  warpStrength = 1,
  warpDetail = 5,
  warpSpeed = 2,
  warpRange = 50,
  blendAngle = 0,
  blendSoftness = 0.05,
  blendMode = "normal",
  rotation = 500,
  noise = 2,
  grainAmount = 0.1,
  grainSize = 2,
  grainAnimate = false,
  contrast = 1.5,
  gamma = 1,
  saturation = 1,
  focusX = 0,
  focusY = 0,
  zoom = 0.9,
  className = "",
}: GradientProProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const canvas = document.createElement("canvas");
    canvas.style.cssText = "width:100%;height:100%;display:block;pointer-events:none";
    el.appendChild(canvas);

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
      powerPreference: "high-performance",
    });

    if (!gl) {
      canvas.remove();
      setOk(false);
      return;
    }

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        throw new Error("Shader error");
      }
      return sh;
    };

    let prog: WebGLProgram | null = null;
    let vao: WebGLVertexArrayObject | null = null;
    let vbo: WebGLBuffer | null = null;

    try {
      const vs = compile(gl.VERTEX_SHADER, VERT);
      const fs = compile(gl.FRAGMENT_SHADER, FRAG);
      prog = gl.createProgram()!;
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error("Link error");

      vao = gl.createVertexArray();
      gl.bindVertexArray(vao);
      vbo = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, "position");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      gl.bindVertexArray(null);
    } catch {
      prog && gl.deleteProgram(prog);
      vao && gl.deleteVertexArray(vao);
      vbo && gl.deleteBuffer(vbo);
      canvas.remove();
      setOk(false);
      return;
    }

    const u = {
      iTime: gl.getUniformLocation(prog, "iTime"),
      iResolution: gl.getUniformLocation(prog, "iResolution"),
      uTimeSpeed: gl.getUniformLocation(prog, "uTimeSpeed"),
      uColorBalance: gl.getUniformLocation(prog, "uColorBalance"),
      uWarpStrength: gl.getUniformLocation(prog, "uWarpStrength"),
      uWarpFrequency: gl.getUniformLocation(prog, "uWarpFrequency"),
      uWarpSpeed: gl.getUniformLocation(prog, "uWarpSpeed"),
      uWarpAmplitude: gl.getUniformLocation(prog, "uWarpAmplitude"),
      uBlendAngle: gl.getUniformLocation(prog, "uBlendAngle"),
      uBlendSoftness: gl.getUniformLocation(prog, "uBlendSoftness"),
      uBlendMode: gl.getUniformLocation(prog, "uBlendMode"),
      uRotationAmount: gl.getUniformLocation(prog, "uRotationAmount"),
      uNoiseScale: gl.getUniformLocation(prog, "uNoiseScale"),
      uGrainAmount: gl.getUniformLocation(prog, "uGrainAmount"),
      uGrainScale: gl.getUniformLocation(prog, "uGrainScale"),
      uGrainAnimated: gl.getUniformLocation(prog, "uGrainAnimated"),
      uContrast: gl.getUniformLocation(prog, "uContrast"),
      uGamma: gl.getUniformLocation(prog, "uGamma"),
      uSaturation: gl.getUniformLocation(prog, "uSaturation"),
      uCenterOffset: gl.getUniformLocation(prog, "uCenterOffset"),
      uZoom: gl.getUniformLocation(prog, "uZoom"),
      uColor1: gl.getUniformLocation(prog, "uColor1"),
      uColor2: gl.getUniformLocation(prog, "uColor2"),
      uColor3: gl.getUniformLocation(prog, "uColor3"),
    };

    const c1 = hexToGL(primary);
    const c2 = hexToGL(secondary);
    const c3 = hexToGL(background);
    const bm = blendMode === "multiply" ? 1 : blendMode === "screen" ? 2 : blendMode === "overlay" ? 3 : 0;

    const setUniforms = () => {
      gl.useProgram(prog);
      gl.uniform1f(u.uTimeSpeed, speed);
      gl.uniform1f(u.uColorBalance, colorShift);
      gl.uniform1f(u.uWarpStrength, warpStrength);
      gl.uniform1f(u.uWarpFrequency, warpDetail);
      gl.uniform1f(u.uWarpSpeed, warpSpeed);
      gl.uniform1f(u.uWarpAmplitude, warpRange);
      gl.uniform1f(u.uBlendAngle, blendAngle);
      gl.uniform1f(u.uBlendSoftness, blendSoftness);
      gl.uniform1i(u.uBlendMode, bm);
      gl.uniform1f(u.uRotationAmount, rotation);
      gl.uniform1f(u.uNoiseScale, noise);
      gl.uniform1f(u.uGrainAmount, grainAmount);
      gl.uniform1f(u.uGrainScale, grainSize);
      gl.uniform1f(u.uGrainAnimated, grainAnimate ? 1 : 0);
      gl.uniform1f(u.uContrast, contrast);
      gl.uniform1f(u.uGamma, gamma);
      gl.uniform1f(u.uSaturation, saturation);
      gl.uniform2f(u.uCenterOffset, focusX, focusY);
      gl.uniform1f(u.uZoom, zoom);
      gl.uniform3f(u.uColor1, c1[0], c1[1], c1[2]);
      gl.uniform3f(u.uColor2, c2[0], c2[1], c2[2]);
      gl.uniform3f(u.uColor3, c3[0], c3[1], c3[2]);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = el.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(prog);
      gl.uniform2f(u.iResolution, canvas.width, canvas.height);
      setUniforms();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    let raf = 0;
    const t0 = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      gl.useProgram(prog);
      gl.uniform1f(u.iTime, (now - t0) * 0.001);
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (el.contains(canvas)) el.removeChild(canvas);
      prog && gl.deleteProgram(prog);
      vao && gl.deleteVertexArray(vao);
      vbo && gl.deleteBuffer(vbo);
    };
  }, [primary, secondary, background, speed, colorShift, warpStrength, warpDetail, warpSpeed, warpRange, blendAngle, blendSoftness, blendMode, rotation, noise, grainAmount, grainSize, grainAnimate, contrast, gamma, saturation, focusX, focusY, zoom]);

  if (!ok) return null;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 120% at 50% 50%, ${primary} 0%, ${secondary} 55%, ${background} 100%)`,
      }}
      aria-label="Gradient background"
      role="img"
    />
  );
}
