import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="about-content">
        <div className="profile-container">
          <img
            className="profile-image"
            src={`${process.env.PUBLIC_URL}/images/profile-picture.png`} // Replace with the path to your image
            alt="Profile"
          />
          <div className="button-container">
            <a className="button" href="resume_link">Resume</a>
            <a className="button" href="linkedin_link">LinkedIn</a>
            <a className="button" href="github_link">GitHub</a>
          </div>
        </div>
        <div className="text-container">
          <div className="floating-text">
            <p>👨‍💻 Software Engineer with 4+ years of experience.</p>
            <p>🎓 Pursuing Computer Science at UW-Green Bay.</p>
            <p>⚙️ Skilled in data engineering and DevOps.</p>
            <p>🔧 Passionate about automation and optimization.</p>
            <p>💡 Lifelong learner, curious about AI and ML.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
