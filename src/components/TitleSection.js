import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE
import './TitleSection.css';

// AnimatedModel Component
const AnimatedModel = ({ modelPath }) => {
  const { scene, animations } = useGLTF(modelPath);
  const mixer = new THREE.AnimationMixer(scene); // Use THREE.AnimationMixer

  useEffect(() => {
    // Play all animations in the GLTF file
    animations.forEach((clip) => mixer.clipAction(clip).play());

    const clock = new THREE.Clock();

    const animate = () => {
      mixer.update(clock.getDelta()); // Use clock for smoother timing
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup function to stop animations when unmounted
    return () => mixer.stopAllAction();
  }, [animations, mixer]);

  return (
    <primitive
      object={scene}
      scale={[0.02, 0.02, 0.02]}
      position={[0, -1, 0]}
      castShadow // Enable shadow casting for the model
    />
  );
};

// TitleSection Component
const TitleSection = () => {
  useEffect(() => {
    const words = ["Engineer", "Programmer", "Designer"];
    let i = 0;
    let timer;

    // Function to start the typing effect
    function typingEffect() {
      let word = words[i].split('');
      const loopTyping = function () {
        if (word.length > 0) {
          document.getElementById('word').innerHTML += word.shift();
        } else {
          deletingEffect();
          return false;
        }
        timer = setTimeout(loopTyping, 200);
      };
      loopTyping();
    }

    // Function to start the deleting effect
    function deletingEffect() {
      let word = words[i].split('');
      const loopDeleting = function () {
        if (word.length > 0) {
          word.pop();
          document.getElementById('word').innerHTML = word.join('');
        } else {
          if (words.length > i + 1) {
            i++;
          } else {
            i = 0;
          }
          typingEffect();
          return false;
        }
        timer = setTimeout(loopDeleting, 100);
      };
      loopDeleting();
    }

    typingEffect();

    // Cleanup timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="title-section" className="title-section">
      {/* Left Text Section */}
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

      {/* Right 3D Model Canvas */}
      <div className="model-container">
        <Canvas className="model-canvas" shadows>
          {/* Ambient Light */}
          <ambientLight intensity={0.5} />
          {/* Directional Light for Shadows */}
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow // Enable shadow casting
            shadow-mapSize-width={1024} // Shadow quality
            shadow-mapSize-height={1024}
            shadow-camera-near={0.1}
            shadow-camera-far={50}
          />
          {/* Ground Plane to Receive Shadows */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]} // Make it horizontal
            position={[0, -1.5, 0]}
            receiveShadow // Enable shadow reception
          >
            <planeGeometry args={[50, 50]} /> {/* Large ground */}
            <shadowMaterial opacity={0.5} /> {/* Semi-transparent shadow */}
          </mesh>
          {/* Model */}
          <AnimatedModel modelPath="/object.glb" />
          {/* Orbit Controls */}
          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
};

export default TitleSection;
