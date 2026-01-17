import { useRef, useEffect } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";
import "./RippleGrid.css";

const RippleGrid = () => {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const target = useRef({ x: 0.5, y: 0.5 });
  const influence = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });

    const gl = renderer.gl;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    container.appendChild(gl.canvas);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    const vertex = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragment = `
      precision highp float;

      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec2 mouse;
      uniform float influence;

      varying vec2 vUv;

      void main() {
        vec2 uv = vUv * 2.0 - 1.0;
        uv.x *= iResolution.x / iResolution.y;

        float dist = length(uv);
        float wave = sin(6.2831 * (iTime - dist));

        vec2 ripple = uv + uv * wave * 0.08;

        vec2 m = mouse * 2.0 - 1.0;
        m.x *= iResolution.x / iResolution.y;

        float md = length(ripple - m);
        ripple += normalize(ripple - m) * sin(iTime * 2.0 - md * 3.0) * influence * 0.03;

        vec2 grid = abs(sin(ripple * 12.0));
        float line = exp(-18.0 * grid.x) + exp(-18.0 * grid.y);

        float fade = exp(-pow(dist, 1.2) * 2.0);

        vec3 color = vec3(0.49, 0.98, 1.0) * line * fade;

        gl_FragColor = vec4(color, line * fade * 0.9);
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      mouse: { value: [0.5, 0.5] },
      influence: { value: 0 },
    };

    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program: new Program(gl, { vertex, fragment, uniforms }),
    });

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value = [w, h];
    };

    window.addEventListener("resize", resize);
    resize();

    const onMove = (e) => {
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = 1 - (e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", onMove);
    
    // Default influence to 1 so ripples always work when moving mouse
    influence.current = 1;

    const animate = () => {
      uniforms.iTime.value += 0.01;

      mouse.current.x += (target.current.x - mouse.current.x) * 0.1;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.1;

      uniforms.mouse.value = [mouse.current.x, mouse.current.y];
      uniforms.influence.value = influence.current; // Simplified influence handling

      renderer.render({ scene: mesh });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return <div ref={containerRef} className="ripple-grid" />;
};

export default RippleGrid;
