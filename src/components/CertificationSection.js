import React, { useState } from 'react';
import './CertificationSection.css';

const certificationsData = [
  {
    title: 'Google IT Automation with Python',
    date: 'Mar 2023',
    description: 'Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VMs, Version Control Tools, Automation.',
    logo: 'google-logo.png', // Replace with actual logo path
    credentialLink: 'https://www.google.com/credentials' // Replace with actual credential link
  },
  {
    title: 'WHMIS (Worker Health and Safety)',
    date: 'Sep 2020',
    description: 'Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention.',
    logo: 'whmis-logo.png', // Replace with actual logo path
    credentialLink: 'https://www.whmis.org' // Replace with actual credential link
  },
  // Add more certifications here...
];

function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certificationsData.length) % certificationsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certificationsData.length);
  };

  return (
    <div className="certifications-container">
      <h2 className="certifications-heading">CONTINUOUS LEARNING</h2>
      <h1 className="certifications-title">Certifications</h1>
      <div className="certifications-list">
        <button className="prev-button" onClick={handlePrev}>&#8249;</button>
        <div className="certification-card">
          <h3>{certificationsData[activeIndex].title}</h3>
          <p>{certificationsData[activeIndex].date}</p>
          <ul>
            {certificationsData[activeIndex].description.split('\n').map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <div className="logo-container">
            <img src={certificationsData[activeIndex].logo} alt={certificationsData[activeIndex].title} />
          </div>
          <a href={certificationsData[activeIndex].credentialLink} target="_blank" rel="noopener noreferrer">View Credential</a>
        </div>
        <button className="next-button" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
}

export default Certifications;