import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface CyberBubbleRef {
  triggerNavigationBubbles: (count?: number) => void;
  triggerCompletionBurst: (count?: number) => void;
}

interface Bubble {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  alpha: number;
  maxAlpha: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  wobbleOffset: number;
  isVictory?: boolean;
}

const BUBBLE_PALETTE = [
  { main: 'rgba(0, 240, 255, 0.7)', glow: '#00f0ff', accent: 'rgba(255, 255, 255, 0.8)' },    // Electric Cyan
  { main: 'rgba(168, 85, 247, 0.7)', glow: '#a855f7', accent: 'rgba(255, 255, 255, 0.8)' },   // Purple Matrix
  { main: 'rgba(244, 63, 94, 0.7)', glow: '#f43f5e', accent: 'rgba(255, 255, 255, 0.8)' },    // Pink Neon
  { main: 'rgba(16, 185, 129, 0.7)', glow: '#10b981', accent: 'rgba(255, 255, 255, 0.8)' },   // Emerald Shield
  { main: 'rgba(251, 191, 36, 0.7)', glow: '#fbbf24', accent: 'rgba(255, 255, 255, 0.8)' },   // Solar Gold
  { main: 'rgba(59, 130, 246, 0.7)', glow: '#3b82f6', accent: 'rgba(255, 255, 255, 0.8)' }    // Azure Blue
];

interface CyberBubbleEffectProps {
  currentRoute?: string;
}

export const CyberBubbleEffect = forwardRef<CyberBubbleRef, CyberBubbleEffectProps>(({ currentRoute }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const spawnBubbles = (count: number = 14, isVictory: boolean = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;

    for (let i = 0; i < count; i++) {
      const palette = BUBBLE_PALETTE[Math.floor(Math.random() * BUBBLE_PALETTE.length)];
      // Simple & elegant bubble sizes: 14px-34px for navigation, 18px-42px for victory
      const radius = isVictory ? Math.random() * 24 + 18 : Math.random() * 20 + 14;
      const startX = Math.random() * width;
      const startY = Math.random() * -120 - 10; // spawn above viewport

      bubblesRef.current.push({
        id: Math.random() + Date.now(),
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 0.9,
        // Smooth, elegant fall speed: 3.2 - 6.5 px/frame for nav, 4.5 - 8.5 px/frame for victory
        vy: Math.random() * (isVictory ? 4.0 : 3.3) + (isVictory ? 4.5 : 3.2),
        radius,
        color: palette.main,
        glowColor: palette.glow,
        alpha: 0.05,
        maxAlpha: isVictory ? Math.random() * 0.35 + 0.4 : Math.random() * 0.25 + 0.35,
        wobbleSpeed: Math.random() * 0.04 + 0.02,
        wobbleAmp: Math.random() * 2.2 + 0.8,
        wobbleOffset: Math.random() * Math.PI * 2,
        isVictory
      });
    }
  };

  useImperativeHandle(ref, () => ({
    triggerNavigationBubbles: (count = 14) => {
      spawnBubbles(count, false);
    },
    triggerCompletionBurst: (count = 28) => {
      spawnBubbles(count, true);
    }
  }));

  // Trigger bubbles on route changes
  useEffect(() => {
    spawnBubbles(14, false);
  }, [currentRoute]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const activeBubbles: Bubble[] = [];

      for (let i = 0; i < bubblesRef.current.length; i++) {
        const b = bubblesRef.current[i];

        // Move downward with gentle sinusoidal sway
        b.y += b.vy;
        b.x += b.vx + Math.sin(time * b.wobbleSpeed + b.wobbleOffset) * (b.wobbleAmp * 0.3);

        // Fade in near top, fade out near bottom
        if (b.y < height * 0.25) {
          b.alpha = Math.min(b.maxAlpha, b.alpha + 0.02);
        } else if (b.y > height * 0.75) {
          b.alpha = Math.max(0, b.alpha - 0.015);
        }

        // Render glossy bubble
        if (b.y < height + 50 && b.alpha > 0.01) {
          ctx.save();
          ctx.globalAlpha = b.alpha;

          // Outer Neon Glow
          ctx.shadowBlur = b.radius * 0.8;
          ctx.shadowColor = b.glowColor;

          // Radial Gradient Fill
          const radGrad = ctx.createRadialGradient(
            b.x - b.radius * 0.3,
            b.y - b.radius * 0.3,
            b.radius * 0.1,
            b.x,
            b.y,
            b.radius
          );
          radGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          radGrad.addColorStop(0.3, b.color);
          radGrad.addColorStop(1, 'rgba(0, 0, 0, 0.2)');

          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
          ctx.fillStyle = radGrad;
          ctx.fill();

          // Bubble Outer Border Ring
          ctx.strokeStyle = b.glowColor;
          ctx.lineWidth = b.isVictory ? 1.8 : 1.2;
          ctx.stroke();

          // Glossy Specular Highlight Reflection Arc
          ctx.beginPath();
          ctx.arc(
            b.x - b.radius * 0.25,
            b.y - b.radius * 0.25,
            b.radius * 0.4,
            Math.PI * 1.1,
            Math.PI * 1.6
          );
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.lineWidth = Math.max(1, b.radius * 0.15);
          ctx.stroke();

          ctx.restore();
          activeBubbles.push(b);
        }
      }

      bubblesRef.current = activeBubbles;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 0.9 }}
    />
  );
});

CyberBubbleEffect.displayName = 'CyberBubbleEffect';
