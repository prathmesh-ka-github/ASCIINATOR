import { useRef, useEffect } from 'react';
import '../styles/matrix.css';

const Matrix = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Cache as non-nullable so TypeScript trusts them inside draw()
    const c: HTMLCanvasElement = canvas;
    const context: CanvasRenderingContext2D = ctx;

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy1234567890#@$%&*+=-_,.;:\\|?<>/{}[]()~';
    const fontSize = 20;
    const columns = Math.floor(c.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    function draw() {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, c.width, c.height);
      context.fillStyle = '#ff0000';
      context.font = `bold ${fontSize}px mono`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">
      <canvas ref={canvasRef} id="matrix"></canvas>
    </div>
  );
};

export default Matrix;