import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    // Load only basic particles package
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0f0f2e",
          },
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
