import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {
  Polyline,
  Renderer,
  Transform,
  Vec3,
  Color
} from 'ogl';
import {createPortal} from 'react-dom';
import {useAnimationFrame} from 'components/services/useAnimationFrame';

const vertex = `
    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;

    vec4 getPosition() {
      vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
      vec2 nextScreen = next.xy * aspect;
      vec2 prevScreen = prev.xy * aspect;

      vec2 tangent = normalize(nextScreen - prevScreen);
      vec2 normal = vec2(-tangent.y, tangent.x);
      normal /= aspect;
      normal *= 1.0 - pow(abs(uv.y - 0.5) * 1.9, 2.0);

      float pixelWidth = 1.0 / (uResolution.y / uDPR);
      normal *= pixelWidth * uThickness;

      // When the points are on top of each other, shrink the line to avoid artifacts.
      float dist = length(nextScreen - prevScreen);
      normal *= smoothstep(0.0, 0.02, dist);

      vec4 current = vec4(position, 1);
      current.xy -= normal * side;
      return current;
    }
    void main() {
        gl_Position = getPosition();
    }
`;

const StyledContainer = styled.div`
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  @media screen and (max-width: 768px) {
   display: none;
  }
  canvas {
    left: 0;
    top: 0;
  }
`;

function random(a, b) {
  const alpha = Math.random();
  return a * (1.0 - alpha) + b * alpha;
}

const portalRoot = document.getElementById('portal-root');

const CursorTrail = () => {
  const containerRef = useRef(null);
  const lines = [];
  const mouse = new Vec3();
  const renderer = new Renderer({ dpr: 2, alpha: true });
  const scene = new Transform();

  useEffect(() => {
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      lines.forEach(line => line.polyline.resize());
    }
    window.addEventListener('resize', resize, false);

    ['#d8b2d8', '#000', '#222', '#333', '#444'].forEach(
      (color) => {
        const line = {
          spring: random(0.02, 0.1),
          //lower number, more friction .7, .95
          friction: random(0.7, 0.85),
          mouseVelocity: new Vec3(),
          mouseOffset: new Vec3(random(-1, 1) * 0.02)
        };
        const count = 20;
        const points = (line.points = []);
        for (let i = 0; i < count; i++) points.push(new Vec3());

        line.polyline = new Polyline(gl, {
          points,
          vertex,
          uniforms: {
            uColor: { value: new Color(color) },
            //line thickness (20,50)
            uThickness: { value: random(10, 20) }
          }
        });

        line.polyline.mesh.setParent(scene);

        lines.push(line);
      }
    );
    resize();
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', updateMouse, false);
    }

    function updateMouse(e) {
      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      }

      // Get mouse value in -1 to 1 range, with y flipped
      mouse.set(
        (e.x / gl.renderer.width) * 2 - 1,
        (e.y / gl.renderer.height) * -2 + 1,
        0
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const tmp = new Vec3();

  function update() {
    lines.forEach(line => {
      for (let i = line.points.length - 1; i >= 0; i--) {
        if (!i) {
          tmp
            .copy(mouse)
            .add(line.mouseOffset)
            .sub(line.points[i])
            .multiply(line.spring);
          line.mouseVelocity.add(tmp).multiply(line.friction);
          line.points[i].add(line.mouseVelocity);
        } else {
          // The rest of the points ease to the point in front of them, making a line
          line.points[i].lerp(line.points[i - 1], 0.9);
        }
      }
      line.polyline.updateGeometry();
    });
    renderer.render({ scene });
  }

  useAnimationFrame(update);

  return createPortal(
    <StyledContainer ref={containerRef}/>, portalRoot
  );
};

export default CursorTrail;
