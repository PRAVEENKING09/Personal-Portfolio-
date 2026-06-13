import { useRef, useEffect } from 'react';

const BackgroundParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Reinitialize particles on resize to maintain density
    };

    // Mouse interaction state
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 180 // Radius for connecting lines
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1.5;
        this.density = (Math.random() * 30) + 1;
        // Randomly assign cyan or purple colors, fully opaque for brightness
        this.color = Math.random() > 0.5 ? 'rgba(34, 211, 238, 1)' : 'rgba(168, 85, 247, 1)';
      }

      update() {
        // Very slow autonomous drift
        this.baseX += (Math.random() - 0.5) * 0.5;
        this.baseY += (Math.random() - 0.5) * 0.5;

        // Wrap around screen
        if (this.baseX > canvas!.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas!.width;
        if (this.baseY > canvas!.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas!.height;

        // Mouse attraction physics
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = mouse.radius;

          if (distance < maxDistance) {
            // Use a smooth ease to pull particles towards the mouse without overshooting
            this.x += dx * 0.03;
            this.y += dy * 0.03;
          } else {
            // Return to base position
            if (this.x !== this.baseX) {
              let dxBase = this.x - this.baseX;
              this.x -= dxBase / 20;
            }
            if (this.y !== this.baseY) {
              let dyBase = this.y - this.baseY;
              this.y -= dyBase / 20;
            }
          }
        } else {
          // Return to base position when mouse leaves
          if (this.x !== this.baseX) {
            let dxBase = this.x - this.baseX;
            this.x -= dxBase / 20;
          }
          if (this.y !== this.baseY) {
            let dyBase = this.y - this.baseY;
            this.y -= dyBase / 20;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      // Dynamic density based on screen size
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      // Cap the particles to avoid performance issues
      if (numberOfParticles > 200) numberOfParticles = 200;

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            opacityValue = 1 - (distance / 120);
            ctx.strokeStyle = `rgba(100, 100, 250, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        // Connect dots to the mouse cursor
        if (mouse.x != null && mouse.y != null) {
          let dx = particlesArray[a].x - mouse.x;
          let dy = particlesArray[a].y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            opacityValue = 1 - (distance / mouse.radius);
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacityValue * 0.5})`; // Cyan glowing lines
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial setup
    setCanvasSize();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-100" />
    </div>
  );
};

export default BackgroundParticles;
