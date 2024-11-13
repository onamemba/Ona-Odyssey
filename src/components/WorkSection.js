import React, { useState } from 'react';
import './WorkSection.css';

const WorkExperience = () => {
  const [activeExperience, setActiveExperience] = useState('Data Engineer');

  const handleRoleClick = (role) => {
    setActiveExperience(role);
  };

  return (
    <section id="work-section" className="work-section">
      <div className="work-container">
        <h2 className="section-heading">MY PROFESSIONAL JOURNEY</h2>
        <h1 className="section-title">Work Experience</h1>

        <div className="work-content">
          <div className="experience-list">
            <div className="experience-item" onClick={() => handleRoleClick('Data Engineer')}>
              <div className="experience-role">Data Engineer</div>
              <div className="experience-company">Liberty Life</div>
            </div>
            <div className="experience-item" onClick={() => handleRoleClick('IT Support')}>
              <div className="experience-role">IT Support</div>
              <div className="experience-company">Autumn Leaf</div>
            </div>
          </div>

          <div className="experience-details">
            {activeExperience === 'Data Engineer' ? (
              <>
                <h2 className="experience-title">Data Engineer</h2>
                <div className="company-name">Liberty Life</div>
                <div className="experience-duration">Jun 2023 - Present</div>
                <ul className="experience-description">
                  <li>Designed and optimized data pipelines for processing and transforming large volumes of data, ensuring smooth data flow across multiple systems.</li>
                  <li>Built ETL frameworks from scratch, integrating with diverse data sources and optimizing for scalable and efficient data ingestion.</li>
                  <li>Managed cloud-based data storage solutions, ensuring high availability and fast retrieval of data across platforms.</li>
                  <li>Enhanced data warehouse performance by fine-tuning SQL queries, implementing indexing, and leveraging partitioning strategies for optimized data access.</li>
                  <li>Implemented validation scripts and conducted routine audits to maintain data quality and resolve discrepancies in real time.</li>
                </ul>
              </>
            ) : (
              <>
                <h2 className="experience-title">IT Support</h2>
                <div className="company-name">Autumn Leaf</div>
                <div className="experience-duration">Jun 2020 - May 2023</div>
                <ul className="experience-description">
                  <li>Provided comprehensive IT support across multiple systems, ensuring that all technical issues were resolved quickly to minimize downtime.</li>
                  <li>Automated routine IT tasks and streamlined workflows using PowerShell and other scripting tools, significantly improving system efficiency.</li>
                  <li>Managed system infrastructure, ensuring data security and ensuring smooth system operations.</li>
                  <li>Provided support for hardware and software issues, troubleshooting and resolving technical challenges for employees across various departments.</li>
                  <li>Coordinated with cross-functional teams to deploy and manage IT systems, ensuring proper configuration and system compatibility.</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
