import React, { useEffect, useRef } from 'react';
import './SpaceCanvas.css';

const SpaceCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize array of asteroids
    const asteroids = [];

    // Starfighter movement with cursor
    const starfighter = { x: canvas.width / 2, y: canvas.height / 2 };
    
    const handleMouseMove = (e) => {
      starfighter.x = e.clientX;
      starfighter.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create random asteroids
    const createAsteroid = () => {
      const size = Math.random() * 30 + 10;
      const speed = Math.random() * 3 + 1;
      const y = Math.random() * canvas.height;
      asteroids.push({ x: canvas.width, y, size, speed });
    };

    // Animate canvas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw starfighter
      ctx.fillStyle = '#00ffff';
      ctx.beginPath();
      ctx.arc(starfighter.x, starfighter.y, 10, 0, Math.PI * 2);
      ctx.fill();

      // Draw and move asteroids
      asteroids.forEach((asteroid, index) => {
        ctx.fillStyle = 'gray';
        ctx.beginPath();
        ctx.arc(asteroid.x, asteroid.y, asteroid.size, 0, Math.PI * 2);
        ctx.fill();
        asteroid.x -= asteroid.speed;
        
        // Remove off-screen asteroids
        if (asteroid.x + asteroid.size < 0) {
          asteroids.splice(index, 1);
        }
      });

      // Create new asteroids randomly
      if (Math.random() < 0.05) createAsteroid();

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-canvas"></canvas>;
};

export default SpaceCanvas;
