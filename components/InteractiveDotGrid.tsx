"use client";

import React, { useEffect, useRef } from "react";

export function InteractiveDotGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const mouseActiveRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    let mouseOnScreen = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseOnScreen = true;
    };

    const handleMouseLeave = () => {
      mouseOnScreen = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseleave", handleMouseLeave);

    const GRID_GAP = 30;
    const HOVER_RADIUS = 160;

    const render = () => {
      if (!ctx || width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const maxDistance = Math.hypot(centerX, centerY) || 1;

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      if (mouseOnScreen) {
        mouseActiveRef.current = Math.min(1, mouseActiveRef.current + 0.05);
      } else {
        mouseActiveRef.current = Math.max(0, mouseActiveRef.current - 0.04);
      }

      for (let x = GRID_GAP / 2; x < width; x += GRID_GAP) {
        for (let y = GRID_GAP / 2; y < height; y += GRID_GAP) {
          const distFromCenter = Math.hypot(x - centerX, y - centerY);
          const normalizedDist = Math.min(1, distFromCenter / maxDistance);
          const vignetteFactor = Math.pow(normalizedDist, 1.6);
          
          const baseOpacity = 0.02 + 0.18 * vignetteFactor;
          const baseRadius = 0.7 + 0.7 * vignetteFactor;

          let finalOpacity = baseOpacity;
          let finalRadius = baseRadius;

          if (mouseActiveRef.current > 0.01) {
            const distToMouse = Math.hypot(x - mouse.x, y - mouse.y);
            if (distToMouse < HOVER_RADIUS) {
              const hoverPower = 1 - distToMouse / HOVER_RADIUS;
              const proximityGlow = Math.pow(hoverPower, 2.5) * mouseActiveRef.current;

              finalOpacity = baseOpacity + (0.95 - baseOpacity) * proximityGlow;
              finalRadius = baseRadius + (2.6 - baseRadius) * proximityGlow;
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, finalRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(223, 255, 0, ${finalOpacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden mix-blend-screen"
      style={{ opacity: 0.35 }}
      id="interactive-canvas-grid-bg"
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full"
      />
    </div>
  );
}
