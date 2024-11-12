// src/components/EducationSection.js
import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
  return (
    <div className="education-container">
    <div className="education-heading">
      <h2>WHAT I HAVE STUDIED SO FAR</h2>
      <h1>Education.</h1>
    </div>
    <div className="education-timeline">
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>Honours Computer Science (H. BSc)</h3>
          <p>Ontario Tech University, Oshawa, ON</p>
          <ul>
            <li>Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL</li>
          </ul>
          <p>2022 - Present</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>High School</h3>
          <p>Richmond Hill High School, ON</p>
          <ul>
            <li>Ontario Scholar</li>
            <li>12th Grade: 96%</li>
          </ul>
          <p>2018 - 2022</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EducationSection;
