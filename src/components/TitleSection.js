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
    
    const animate = () => {
      mixer.update(0.01); // Adjust timing if needed
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup function to stop all actions when the component unmounts
    return () => mixer.stopAllAction();
  }, [animations, mixer]);

  return <primitive object={scene} scale={[2, 2, 2]} position={[0, -1, 0]} />;
};

// TitleSection Component
const TitleSection = () => {
  useEffect(() => {
    const words = ["Software Engineer", "Data Scientist", "AI Enthusiast"];
    let i = 0;
    let timer;

    // Function to start the typing effect
    function typingEffect() {
      let word = words[i].split('');
      const loopTyping = function() {
        if (word.length > 0) {
          document.getElementById('word').innerHTML += word.shift();
        } else {
          deletingEffect();
          return false;
        }
        timer = setTimeout(loopTyping, 200); // Increased speed for typing
      };
      loopTyping();
    }

    // Function to start the deleting effect
    function deletingEffect() {
      let word = words[i].split('');
      const loopDeleting = function() {
        if (word.length > 0) {
          word.pop();
          document.getElementById('word').innerHTML = word.join('');
        } else {
          if (words.length > (i + 1)) {
            i++;
          } else {
            i = 0;
          }
          typingEffect();
          return false;
        }
        timer = setTimeout(loopDeleting, 100); // Increased speed for deleting
      };
      loopDeleting();
    }

    typingEffect(); // Start typing effect

    // Cleanup timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="title-section" className="title-section">
      <h1 className="title">Hi, I'm Francis Tumba</h1>
      <div className="subtitle">
        <span>I'm a </span>
        <span className="animated-title">
          <span id="word"></span>
        </span>
        <span className="blink">|</span>
      </div>
      
      {/* 3D Model Canvas */}
      <Canvas className="model-canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <OrbitControls />
        <AnimatedModel modelPath="/object.glb" />
      </Canvas>
    </section>
  );
};

export default TitleSection;
