import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SpaceScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Basic Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background (space theme)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const light = new THREE.PointLight(0xffffff, 2, 100); // Bright point light
    light.position.set(10, 10, 10);
    scene.add(light);

    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Increased intensity for ambient light
    scene.add(ambientLight);

    // Directional light simulating sunlight
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Increased intensity for sunlight
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load GLTF model (static model without animations)
    const loader = new GLTFLoader();
    let starfighter;

    loader.load(
      `${process.env.PUBLIC_URL}/models/scene.gltf`, // Adjust path to your model
      (gltf) => {
        console.log('GLTF model loaded successfully:', gltf);
        starfighter = gltf.scene;
        starfighter.scale.set(0.5, 0.5, 0.5); // Scale to fit
        scene.add(starfighter);
      },
      undefined,
      (error) => {
        console.error('Error loading the model', error);
      }
    );

    // Mouse Move Interaction
    const onMouseMove = (event) => {
      if (starfighter) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        starfighter.position.x = x * 2;
        starfighter.position.y = y * 2;
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    // Add Asteroids
    const createAsteroids = () => {
      const asteroidGeometry = new THREE.SphereGeometry(0.5, 16, 16);
      const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
      
      for (let i = 0; i < 5; i++) {
        const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
        asteroid.position.set(
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5
        );
        scene.add(asteroid);
      }
    };
    createAsteroids();

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls for smooth movement
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
  );
};

export default SpaceScene;
