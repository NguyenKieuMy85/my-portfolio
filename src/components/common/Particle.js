import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadFull(await import("tsparticles-engine"));
      setInit(true);
    };
    initParticles();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#0a0f1f",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
          move: { enable: true, speed: 1, outModes: { default: "bounce" } },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
