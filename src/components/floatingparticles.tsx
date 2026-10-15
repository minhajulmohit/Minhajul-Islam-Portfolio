const particles = [
  { x: 8, y: 15, size: 3, delay: 0, duration: 6, color: "cyan" },
  { x: 22, y: 70, size: 2, delay: 1.2, duration: 7, color: "purple" },
  { x: 38, y: 30, size: 3, delay: 2, duration: 5.5, color: "cyan" },
  { x: 52, y: 85, size: 2, delay: 0.8, duration: 6.5, color: "purple" },
  { x: 67, y: 18, size: 3, delay: 2.5, duration: 7, color: "cyan" },
  { x: 83, y: 55, size: 2, delay: 1.5, duration: 5.5, color: "purple" },
  { x: 93, y: 30, size: 3, delay: 3, duration: 6, color: "cyan" },
  { x: 14, y: 90, size: 2, delay: 2.2, duration: 7, color: "purple" },
  { x: 30, y: 45, size: 3, delay: 0.5, duration: 6, color: "cyan" },
  { x: 45, y: 12, size: 2, delay: 1.8, duration: 5.5, color: "purple" },
  { x: 60, y: 62, size: 3, delay: 2.8, duration: 7, color: "cyan" },
  { x: 75, y: 88, size: 2, delay: 0.4, duration: 6, color: "purple" },
  { x: 88, y: 12, size: 3, delay: 1.1, duration: 5.5, color: "cyan" },
  { x: 5, y: 48, size: 2, delay: 3.2, duration: 7, color: "purple" },
  { x: 48, y: 52, size: 2, delay: 1.4, duration: 6, color: "cyan" },
  { x: 72, y: 38, size: 3, delay: 2.4, duration: 5.5, color: "purple" },

  { x: 12, y: 25, size: 3, delay: 0.7, duration: 5.8, color: "purple" },
  { x: 27, y: 82, size: 2, delay: 1.6, duration: 6.2, color: "cyan" },
  { x: 35, y: 60, size: 3, delay: 2.3, duration: 7, color: "purple" },
  { x: 42, y: 35, size: 2, delay: 0.3, duration: 5.5, color: "cyan" },
  { x: 57, y: 20, size: 3, delay: 1.9, duration: 6.5, color: "purple" },
  { x: 63, y: 75, size: 2, delay: 2.7, duration: 7, color: "cyan" },
  { x: 78, y: 28, size: 3, delay: 0.9, duration: 5.7, color: "purple" },
  { x: 90, y: 68, size: 2, delay: 3.1, duration: 6.3, color: "cyan" },
  { x: 18, y: 55, size: 3, delay: 1.3, duration: 6, color: "purple" },
  { x: 33, y: 8, size: 2, delay: 2.1, duration: 5.8, color: "cyan" },
  { x: 50, y: 42, size: 3, delay: 0.6, duration: 7, color: "purple" },
  { x: 69, y: 92, size: 2, delay: 1.7, duration: 6.2, color: "cyan" },
  { x: 81, y: 45, size: 3, delay: 2.6, duration: 5.5, color: "purple" },
  { x: 96, y: 85, size: 2, delay: 0.2, duration: 6.8, color: "cyan" },
  { x: 3, y: 75, size: 3, delay: 2.9, duration: 6, color: "purple" },
  { x: 54, y: 5, size: 2, delay: 1.0, duration: 5.6, color: "cyan" },
];

const shootingStars = [
  { delay: "0s" },
  { delay: "9s" },
  { delay: "18s" },
  { delay: "27s" },
];

const FloatingParticles = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          className={`particle ${particle.color} ${
            index >= 8 ? "particle-desktop" : ""
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      {shootingStars.map((star, index) => (
        <span
          key={`shooting-star-${index}`}
          className="shooting-star"
          style={{
            left: "-20vw",
            top: "-15vh",
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
