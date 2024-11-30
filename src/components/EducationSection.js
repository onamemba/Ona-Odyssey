import React from "react";
import "./Education.css";

const EducationSection = () => {
  return (
    <section id="education-section" className="education-section">
      {/* Left: Education Timeline */}
      <div className="education-timeline">
        <h2>Education</h2>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Associate in Computer Science</h3>
            <p>Cape Peninsula University of Technology (CPUT)</p>
            <span>2017 - 2019</span>
            <p>Focused on foundational computer science concepts, programming, and software development.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Bachelor in Computer Science</h3>
            <p>University of Wisconsin-Green Bay (UWGB)</p>
            <span>2022 - Present</span>
            <p>Current coursework emphasizes Data Science, Artificial Intelligence, and Software Engineering.</p>
          </div>
        </div>
      </div>

      {/* Right: Certifications */}
      <div className="certifications-slider">
        <h2>Certifications</h2>
        <div className="certification-cards">
          <div className="card">
            <h3>AWS Certified Solutions Architect</h3>
            <p>Issued: Jan 2024</p>
            <p>Specialized in cloud infrastructure and solution design.</p>
          </div>
          <div className="card">
            <h3>Google IT Automation with Python</h3>
            <p>Issued: Mar 2023</p>
            <p>Focus on automation, Google Cloud, and Python scripting.</p>
          </div>
          <div className="card">
            <h3>Certified Enterprise Scripting Architect</h3>
            <p>Issued: Jul 2024</p>
            <p>Expertise in scripting, RMM, and enterprise architecture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
