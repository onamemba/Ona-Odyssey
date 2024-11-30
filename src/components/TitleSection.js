import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import "./TitleSection.css";

// AnimatedModel Component
const AnimatedModel = ({ modelPath }) => {
  const { scene, animations } = useGLTF(modelPath);
  const mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    // Play animations on the model
    animations.forEach((clip) => mixer.clipAction(clip).play());

    const clock = new THREE.Clock();

    const animate = () => {
      mixer.update(clock.getDelta()); // Smoother animation updates
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup when component unmounts
    return () => mixer.stopAllAction();
  }, [animations, mixer]);

  return (
    <primitive
      object={scene}
      scale={[3, 3, 3]}
      position={[0, -1, 0]}
      castShadow
    />
  );
};

// TitleSection Component
const TitleSection = () => {
  useEffect(() => {
    const words = ["Engineer", "Programmer", "Designer"];
    let i = 0;
    let timer;

    const typingEffect = () => {
      const word = words[i].split("");
      const loopTyping = () => {
        if (word.length > 0) {
          document.getElementById("word").innerHTML += word.shift();
        } else {
          deletingEffect();
          return;
        }
        timer = setTimeout(loopTyping, 200);
      };
      loopTyping();
    };

    const deletingEffect = () => {
      const word = words[i].split("");
      const loopDeleting = () => {
        if (word.length > 0) {
          word.pop();
          document.getElementById("word").innerHTML = word.join("");
        } else {
          i = (i + 1) % words.length;
          typingEffect();
          return;
        }
        timer = setTimeout(loopDeleting, 100);
      };
      loopDeleting();
    };

    typingEffect();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="title-section" className="title-section">
      {/* Text Section */}
      <div className="text-container">
        <h1 className="title">Hi, I'm Francis Tumba</h1>
        <div className="subtitle">
          <span>I'm a </span>
          <span className="animated-title">
            <span id="word"></span>
          </span>
          <span className="blink">|</span>
        </div>
      </div>

      {/* 3D Model Canvas */}
      <div className="model-container">
        <Canvas
          className="model-canvas"
          shadows
          camera={{ position: [0, 2, 5], fov: 50 }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={{ width: 1024, height: 1024 }}
            shadow-camera-near={0.1}
            shadow-camera-far={50}
          />
          {/* Ground for Shadows */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1.5, 0]}
            receiveShadow
          >
            <planeGeometry args={[50, 50]} />
            <shadowMaterial opacity={0.5} />
          </mesh>
          {/* 3D Model */}
          <AnimatedModel modelPath="/object.glb" />
          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
};

export default TitleSection;
