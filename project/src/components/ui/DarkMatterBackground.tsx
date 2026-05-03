import React, { useEffect, useRef } from "react";

const VERT = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0., 1.); }
`;

const FRAG_DARK = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

// Lightning uniforms
uniform vec2 u_bolt0_a;
uniform vec2 u_bolt0_b;
uniform float u_bolt0_t;
uniform vec2 u_bolt1_a;
uniform vec2 u_bolt1_b;
uniform float u_bolt1_t;
uniform vec2 u_bolt2_a;
uniform vec2 u_bolt2_b;
uniform float u_bolt2_t;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hash1(float n) { return fract(sin(n) * 43758.5453); }

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1,0)), f.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  for(int i = 0; i < 6; i++) {
    v += a * noise(p);
    p = p * 2.1 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

vec2 flowField(vec2 p, float t) {
  float angle = fbm(p * 1.5 + t * 0.1) * 6.2831 * 2.0;
  return vec2(cos(angle), sin(angle));
}

// Signed distance to segment [a,b]
float sdSeg(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
  return length(p - a - t * ab);
}

// Jagged lightning bolt intensity at point p for bolt from a to b
// Uses multiple random offsets seeded by the bolt direction
float boltIntensity(vec2 p, vec2 a, vec2 b, float seed) {
  vec2 dir = b - a;
  float len = length(dir);
  if(len < 0.001) return 0.0;
  vec2 n = vec2(-dir.y, dir.x) / len; // normal

  float intensity = 0.0;
  int SEGS = 8;
  vec2 prev = a;
  for(int i = 1; i <= 8; i++) {
    float fi = float(i) / 8.0;
    float offset = (hash1(seed + fi * 17.3 + 3.1) - 0.5) * len * 0.28;
    vec2 next = a + dir * fi + n * offset;
    if(i == 8) next = b;

    float d = sdSeg(p, prev, next);
    float glow = exp(-d * 60.0) * 1.2;
    float core = exp(-d * 250.0) * 3.0;
    intensity += glow + core;
    prev = next;
  }
  return intensity;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / min(u_res.x, u_res.y);
  vec2 mouse = (u_mouse - u_res * 0.5) / min(u_res.x, u_res.y);

  vec2 toMouse = mouse - uv;
  float mDist = length(toMouse);
  uv -= toMouse * 0.08 * exp(-mDist * 2.5);

  vec2 p = uv * 2.5;
  p += flowField(p, u_time) * 0.3;

  float density = fbm(p + u_time * 0.12);
  density += fbm(p * 1.8 - u_time * 0.08) * 0.5;
  density = pow(density, 1.4);

  vec3 dark = vec3(0.0, 0.0, 0.02);
  vec3 mid = vec3(0.05, 0.0, 0.18);
  vec3 bright = vec3(0.0, 0.5, 0.9);
  vec3 highlight = vec3(0.8, 0.3, 1.0);

  vec3 col = mix(dark, mid, density);
  col = mix(col, bright, pow(density, 2.5));
  col = mix(col, highlight, pow(max(0.0, density - 0.7), 3.0) * 2.0);

  float star = hash(floor(uv * 300.0));
  if(star > 0.995) col += vec3(1.0) * smoothstep(0.998, 1.0, star) * 2.0;

  // UV for bolts (non-distorted)
  vec2 uvRaw = (gl_FragCoord.xy - u_res * 0.5) / min(u_res.x, u_res.y);

  // Bolt 0
  if(u_bolt0_t > 0.0) {
    float life = u_bolt0_t; // 1 → 0
    float bi = boltIntensity(uvRaw, u_bolt0_a, u_bolt0_b, 1.0);
    float fade = life * life;
    // core: white-blue, outer glow: electric purple
    vec3 boltColor = mix(vec3(0.4, 0.6, 1.0), vec3(1.0, 1.0, 1.0), clamp(bi * 0.4, 0.0, 1.0));
    col += boltColor * bi * fade;
    // impact flash at click point
    float flashR = length(uvRaw - u_bolt0_b);
    col += vec3(0.8, 0.9, 1.0) * exp(-flashR * 18.0) * fade * 4.0;
  }

  // Bolt 1
  if(u_bolt1_t > 0.0) {
    float life = u_bolt1_t;
    float bi = boltIntensity(uvRaw, u_bolt1_a, u_bolt1_b, 7.0);
    float fade = life * life;
    vec3 boltColor = mix(vec3(0.5, 0.3, 1.0), vec3(1.0, 1.0, 1.0), clamp(bi * 0.4, 0.0, 1.0));
    col += boltColor * bi * fade;
    float flashR = length(uvRaw - u_bolt1_b);
    col += vec3(0.9, 0.8, 1.0) * exp(-flashR * 18.0) * fade * 4.0;
  }

  // Bolt 2
  if(u_bolt2_t > 0.0) {
    float life = u_bolt2_t;
    float bi = boltIntensity(uvRaw, u_bolt2_a, u_bolt2_b, 13.0);
    float fade = life * life;
    vec3 boltColor = mix(vec3(0.3, 0.8, 1.0), vec3(1.0, 1.0, 1.0), clamp(bi * 0.4, 0.0, 1.0));
    col += boltColor * bi * fade;
    float flashR = length(uvRaw - u_bolt2_b);
    col += vec3(0.8, 1.0, 1.0) * exp(-flashR * 18.0) * fade * 4.0;
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

function buildProgram(gl: WebGLRenderingContext, fragSrc: string) {
  const prog = gl.createProgram()!;
  gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, fragSrc));
  gl.linkProgram(prog);
  return prog;
}

interface Bolt {
  ax: number; ay: number; // origin (normalised WebGL coords)
  bx: number; by: number; // target
  life: number;            // 0-1, counts down
}

const MAX_BOLTS = 3;
const BOLT_DURATION = 0.55; // seconds

const DarkMatterBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const bolts = useRef<Bolt[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const prog = buildProgram(gl, FRAG_DARK);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const a = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    // Bolt uniforms
    const boltUniforms = [0, 1, 2].map((i) => ({
      a: gl.getUniformLocation(prog, `u_bolt${i}_a`),
      b: gl.getUniformLocation(prog, `u_bolt${i}_b`),
      t: gl.getUniformLocation(prog, `u_bolt${i}_t`),
    }));

    // Convert pixel coords to the same normalised space the shader uses
    const toNorm = (px: number, py: number) => {
      const W = canvas.width;
      const H = canvas.height;
      const scale = Math.min(W, H);
      return {
        x: (px - W / 2) / scale,
        y: (H / 2 - py) / scale, // flip Y for WebGL
      };
    };

    let time = 0;
    let lastTs: number | null = null;
    let rafId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onClick = (e: MouseEvent) => {
      const clickNorm = toNorm(e.clientX, e.clientY);

      // Random origin above or to the side of the click
      const angle = Math.random() * Math.PI * 2;
      const dist = 0.15 + Math.random() * 0.2;
      const originNorm = {
        x: clickNorm.x + Math.cos(angle) * dist,
        y: clickNorm.y + Math.sin(angle) * dist + 0.15, // slightly above
      };

      const newBolt: Bolt = {
        ax: originNorm.x, ay: originNorm.y,
        bx: clickNorm.x, by: clickNorm.y,
        life: 1.0,
      };

      // Keep ring buffer of MAX_BOLTS
      bolts.current.push(newBolt);
      if (bolts.current.length > MAX_BOLTS) bolts.current.shift();

      // Spawn 1-2 extra branching bolts occasionally
      if (Math.random() > 0.4) {
        const branchAngle = angle + (Math.random() - 0.5) * 1.2;
        const branchDist = dist * (0.5 + Math.random() * 0.6);
        const boltBranch: Bolt = {
          ax: originNorm.x + Math.cos(branchAngle) * 0.05,
          ay: originNorm.y + Math.sin(branchAngle) * 0.05,
          bx: clickNorm.x + (Math.random() - 0.5) * 0.08,
          by: clickNorm.y + (Math.random() - 0.5) * 0.08,
          life: 0.8,
        };
        bolts.current.push(boltBranch);
        if (bolts.current.length > MAX_BOLTS) bolts.current.shift();
      }
    };
    window.addEventListener("click", onClick);

    const loop = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      time += dt;

      // Decay bolt life
      bolts.current.forEach((b) => { b.life -= dt / BOLT_DURATION; });
      bolts.current = bolts.current.filter((b) => b.life > 0);

      const W = canvas.width;
      const H = canvas.height;
      gl.viewport(0, 0, W, H);
      gl.uniform2f(uRes, W, H);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mouse.current.x, H - mouse.current.y);

      // Write bolt uniforms (fill unused slots with life=0)
      for (let i = 0; i < MAX_BOLTS; i++) {
        const bolt = bolts.current[i];
        if (bolt) {
          gl.uniform2f(boltUniforms[i].a, bolt.ax, bolt.ay);
          gl.uniform2f(boltUniforms[i].b, bolt.bx, bolt.by);
          gl.uniform1f(boltUniforms[i].t, Math.max(0, bolt.life));
        } else {
          gl.uniform2f(boltUniforms[i].a, 0, 0);
          gl.uniform2f(boltUniforms[i].b, 0, 0);
          gl.uniform1f(boltUniforms[i].t, 0);
        }
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default DarkMatterBackground;
