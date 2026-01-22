import { useState, useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  hue: number;
}

interface ParticleFieldProps {
  count?: number;
  mouseEffect?: boolean;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 50,
  mouseEffect = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const isMouseInCanvas = useRef(false);
  const isClicked = useRef(false);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const hueRef = useRef(140); // Starting hue - emerald green

  // Initialize particles and set up canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    // Set canvas dimensions to match parent container
    const updateCanvasDimensions = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const parent = canvas.parentElement;

      if (parent) {
        const width = parent.clientWidth;
        const height = parent.clientHeight;

        canvas.width = width;
        canvas.height = height;

        setDimensions({ width, height });

        // Initialize particles when dimensions change
        initializeParticles(width, height);
      }
    };

    // Create initial particles
    const initializeParticles = (width: number, height: number) => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const baseSize = Math.random() * 2 + 1;
        newParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: baseSize,
          baseSize: baseSize,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          color: `hsla(${hueRef.current}, 70%, 50%, ${Math.random() * 0.5 + 0.3})`,
          opacity: Math.random() * 0.5 + 0.3,
          hue: hueRef.current + Math.random() * 20 - 10,
        });
      }
      particlesRef.current = newParticles;
    };

    // Initial setup
    updateCanvasDimensions();

    // Handle window resize
    window.addEventListener("resize", updateCanvasDimensions);
    return () => window.removeEventListener("resize", updateCanvasDimensions);
  }, [count]);

  // Handle mouse and touch interactions
  useEffect(() => {
    if (!mouseEffect || !canvasRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      isMouseInCanvas.current = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!canvasRef.current || e.touches.length === 0) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
      isMouseInCanvas.current = true;
      e.preventDefault();
    };

    const handleMouseLeave = () => {
      isMouseInCanvas.current = false;
    };

    const handleMouseDown = () => {
      isClicked.current = true;
      // Shift hue slightly on click for visual feedback
      hueRef.current = (hueRef.current + 5) % 360;
    };

    const handleMouseUp = () => {
      isClicked.current = false;
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("touchstart", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseEffect]);

  // Animation loop with time-based updates
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0)
      return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = (timestamp: number) => {
      // Calculate delta time for smooth animation regardless of frame rate
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = (timestamp - lastTimeRef.current) / 16; // Normalize to ~60fps
      lastTimeRef.current = timestamp;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const particles = particlesRef.current;

      // Update and draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply mouse influence if mouse is in canvas
        if (isMouseInCanvas.current && mouseEffect) {
          const dx = mousePos.current.x - p.x;
          const dy = mousePos.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = isClicked.current ? 150 : 100;

          if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx);
            const force = isClicked.current
              ? (maxDistance - distance) / 500
              : (maxDistance - distance) / 1000;

            p.speedX += Math.cos(angle) * force * deltaTime;
            p.speedY += Math.sin(angle) * force * deltaTime;

            // Increase size when near mouse
            p.size = p.baseSize + (maxDistance - distance) / 20;

            // Adjust color based on mouse interaction
            if (isClicked.current) {
              p.hue = hueRef.current + (maxDistance - distance) / 5;
              p.opacity = Math.min(0.8, p.opacity + 0.01);
            }
          } else {
            // Return to base size
            p.size = p.baseSize + (p.size - p.baseSize) * 0.9;
            p.opacity = Math.max(0.3, p.opacity * 0.99);
          }
        } else {
          // Return to base size when mouse is not in canvas
          p.size = p.baseSize + (p.size - p.baseSize) * 0.9;
          p.opacity = Math.max(0.3, p.opacity * 0.99);
        }

        // Update position with delta time for smooth movement
        p.x += p.speedX * deltaTime;
        p.y += p.speedY * deltaTime;

        // Apply friction
        p.speedX *= 0.98;
        p.speedY *= 0.98;

        // Add slight random movement for more organic feel
        p.speedX += (Math.random() - 0.5) * 0.03;
        p.speedY += (Math.random() - 0.5) * 0.03;

        // Bounce off edges
        if (p.x < 0) {
          p.x = 0;
          p.speedX = Math.abs(p.speedX) * 0.8;
        } else if (p.x > dimensions.width) {
          p.x = dimensions.width;
          p.speedX = -Math.abs(p.speedX) * 0.8;
        }

        if (p.y < 0) {
          p.y = 0;
          p.speedY = Math.abs(p.speedY) * 0.8;
        } else if (p.y > dimensions.height) {
          p.y = dimensions.height;
          p.speedY = -Math.abs(p.speedY) * 0.8;
        }

        // Update color based on current properties
        p.color = `hsla(${p.hue}, 70%, 50%, ${p.opacity})`;

        // Draw particle with glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            // Calculate opacity based on distance
            const opacity =
              0.15 * (1 - distance / 100) * p.opacity * p2.opacity;

            // Create gradient for line
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `hsla(${p.hue}, 70%, 50%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${p2.hue}, 70%, 50%, ${opacity})`);

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Slowly shift the base hue over time for subtle color changes
      hueRef.current = (hueRef.current + 0.05) % 360;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, mouseEffect]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full cursor-none"
    />
  );
};

export default ParticleField;
