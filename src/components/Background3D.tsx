import { useRef, useEffect } from 'react';

const Background3D = () => {
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
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 0.9 + 0.8;
        // Slow autonomous movement velocity
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        // Naruto theme: Kurama Orange (rgba(249, 115, 22)) and Rasengan Blue (rgba(14, 165, 233))
        this.color = Math.random() > 0.5 ? 'rgba(249, 115, 22, 1)' : 'rgba(14, 165, 233, 1)';
      }

      update() {
        // Move particles autonomously
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around screen boundaries
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
            // Smooth ease attraction towards mouse
            this.x += dx * 0.02;
            this.y += dy * 0.02;
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
      // Aggressively reduced: /15000 density, cap at 100
      // With 100 particles, the O(n²) connect loop does ~5000 comparisons vs ~31000 with 250
      let numberOfParticles = (canvas.height * canvas.width) / 15000;
      if (numberOfParticles > 100) numberOfParticles = 100;

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      let opacityValue = 1;
      // Use squared distance to avoid expensive Math.sqrt() calls
      const connectionDist = 95;
      const connectionDistSq = connectionDist * connectionDist;
      const mouseRadiusSq = mouse.radius * mouse.radius;
      const len = particlesArray.length;

      for (let a = 0; a < len; a++) {
        const pA = particlesArray[a];

        for (let b = a + 1; b < len; b++) {
          const pB = particlesArray[b];
          let dx = pA.x - pB.x;
          let dy = pA.y - pB.y;
          let distSq = dx * dx + dy * dy;

          if (distSq < connectionDistSq) {
            // Only compute sqrt when we actually need opacity
            let distance = Math.sqrt(distSq);
            opacityValue = 1 - (distance / connectionDist);
            // Dynamic theme colored connecting lines
            const isOrange = pA.color.includes('249');
            ctx.strokeStyle = isOrange
              ? `rgba(249, 115, 22, ${opacityValue * 0.15})`
              : `rgba(14, 165, 233, ${opacityValue * 0.15})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.stroke();
          }
        }

        // Connect dots to the mouse cursor
        if (mouse.x != null && mouse.y != null) {
          let dx = pA.x - mouse.x;
          let dy = pA.y - mouse.y;
          let distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq) {
            let distance = Math.sqrt(distSq);
            opacityValue = 1 - (distance / mouse.radius);
            const isOrange = pA.color.includes('249');
            ctx.strokeStyle = isOrange
              ? `rgba(249, 115, 22, ${opacityValue * 0.35})`
              : `rgba(14, 165, 233, ${opacityValue * 0.35})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
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
    <div className="fixed inset-0 z-0 pointer-events-none bg-gray-950">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-100" />
    </div>
  );
};

export default Background3D;
