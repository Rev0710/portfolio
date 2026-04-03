import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBG() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        fullScreen: { enable: true, zIndex: -2 },
        particles: {
            number: { value: 80 },
            density: { enable: true, area: 800 },
            color: { value: ["#6366f1", "#9333ea", "#06b6d4"] },
            links: {
                enable: true,
                distance: 150,
                color: "#fff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                outModes: "out",
            },
            size: { value: { min: 1, max: 4 } },
            opacity: { value: { min: 0.3, max: 0.8 } },
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "attract", // particles follow the cursor
                },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
                attract: { distance: 200, duration: 0.4 },
                push: { quantity: 4 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    );
}

export default ParticlesBG;