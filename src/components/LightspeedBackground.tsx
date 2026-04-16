import { useEffect, useRef, useState } from "react";

const FRAG_SHADER = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform float intensity;
uniform float particleCount;
uniform vec3 colorShift;

#define FC gl_FragCoord.xy
#define R resolution
#define T time

float rnd(float a) {
  vec2 p = fract(a * vec2(12.9898, 78.233));
  p += dot(p, p*345.);
  return fract(p.x * p.y);
}

vec3 hue(float a) {
  return colorShift * (.6+.6*cos(6.3*(a)+vec3(0,83,21)));
}

vec3 pattern(vec2 uv) {
  vec3 col = vec3(0.);
  float t = T * .4;
  for(float i=.0;i<1.;i+=.05){
    if(i*20. > particleCount) break;
    float r1 = rnd(i);
    float r2 = rnd(i+.1);
    float r3 = rnd(i+.2);
    float speed = (.2+r3*.8) * 2.;
    float phase = fract(t * speed * .15 + r1);
    float x = r2;
    float y = 1.0 - phase;
    float len = (.02+r3*.15) * intensity;
    vec2 p = uv - vec2(x, y);
    float d = abs(p.x);
    float trail = smoothstep(len, 0., p.y) * smoothstep(-0.002, 0., p.y);
    float core = exp(-d*d*8e4) * trail;
    float glow = exp(-d*d*2e3) * trail * .3;
    vec3 c = hue(r1+t*.1);
    col += (core + glow) * c * (1.+r3);
  }
  return col;
}

void main(){
  vec2 uv = FC / R;
  vec3 col = pattern(uv);
  col = pow(col, vec3(.85));
  O = vec4(col, 1.);
}`;

const VERT_SHADER = `#version 300 es
in vec2 position;
void main(){gl_Position=vec4(position,0.,1.);}`;

interface LightspeedProps {
  speed?: number;
  intensity?: number;
  particleCount?: number;
  colorR?: number;
  colorG?: number;
  colorB?: number;
  className?: string;
}

export function LightspeedBackground({
  speed = 1,
  intensity = 1,
  particleCount = 20,
  colorR = 1,
  colorG = 1,
  colorB = 1,
  className = "",
}: LightspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "high-performance",
    });
    if (!gl) { setWebglOk(false); return; }

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        throw new Error("Shader compile error");
      }
      return sh;
    };

    let vs: WebGLShader, fs: WebGLShader, prog: WebGLProgram;
    try {
      vs = compile(gl.VERTEX_SHADER, VERT_SHADER);
      fs = compile(gl.FRAGMENT_SHADER, FRAG_SHADER);
      prog = gl.createProgram()!;
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        gl.deleteProgram(prog);
        throw new Error("Link error");
      }
    } catch {
      setWebglOk(false);
      return;
    }

    gl.useProgram(prog);

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    const locPos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(locPos);
    gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "time");
    const uRes = gl.getUniformLocation(prog, "resolution");
    const uInt = gl.getUniformLocation(prog, "intensity");
    const uPart = gl.getUniformLocation(prog, "particleCount");
    const uColor = gl.getUniformLocation(prog, "colorShift");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let raf: number;
    const start = performance.now();

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const elapsed = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, elapsed * speed);
      gl.uniform1f(uInt, intensity);
      gl.uniform1f(uPart, particleCount);
      gl.uniform3f(uColor, colorR, colorG, colorB);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      gl.deleteBuffer(vbo);
      const shaders = gl.getAttachedShaders(prog) || [];
      shaders.forEach((s) => gl.deleteShader(s));
      gl.deleteProgram(prog);
    };
  }, [speed, intensity, particleCount, colorR, colorG, colorB]);

  if (!webglOk) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}
