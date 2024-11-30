import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./ContactSection.css";

const RotatingGlobe = () => {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#ffffff" wireframe />
    </mesh>
  );
};

const ContactSection = () => {
  return (
    <section id="contact-section" className="contact-section">
      {/* Left Form Section */}
      <div className="form-container">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src="/images/github.png" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src="/images/linkedin.png" alt="Instagram" />
          </a>
          <a href="mailto:example@example.com">
          <img src="/images/email.png" alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Right Globe Section */}
      <div className="globe-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <RotatingGlobe />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </section>
  );
};

export default ContactSection;
