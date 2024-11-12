import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
    <div id="about-section" className="about-container">
      <h2 className="introduction">INTRODUCTION</h2>
      <h1 className="title">Overview.</h1>
      <img
        className="profile-image"
        src={`${process.env.PUBLIC_URL}/images/profile-picture.png`} // Replace with the path to your image
        alt="Profile"
      />
      <div className="description">
        <p>👨‍💻 I'm a Software Engineer with over 4 years of experience in data engineering, DevOps, and cloud solutions.</p>
        <p>🎓 Currently pursuing my Bachelor of Science in Computer Science at the University of Wisconsin-Green Bay, I'm focused on building efficient, scalable systems that solve real-world problems.</p>
        <p>⚙️ From optimizing data pipelines to managing cloud infrastructure, I’ve led projects that drive operational efficiency and make a difference.</p>
        <p>🔧 I thrive on automation, system optimization, and turning complex challenges into effective solutions.</p>
        <p>💡 Always curious and driven to learn, I’m passionate about pushing boundaries in AI and machine learning</p>
      </div>
      <div className="button-container">
        <a className="button" href="resume_link">Resume</a>
        <a className="button" href="linkedin_link">LinkedIn</a>
        <a className="button" href="github_link">GitHub</a>
      </div>
    </div>
    </section>
  );
};

export default AboutSection;
