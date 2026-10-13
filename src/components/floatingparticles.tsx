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
    </div>
  );
};

export default FloatingParticles;
