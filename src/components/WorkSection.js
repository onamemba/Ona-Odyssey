import React from 'react';
import './WorkSection.css';

const WorkExperience = () => {
  return (
    <div className="work-container">
      <h2 className="section-heading">MY PROFESSIONAL JOURNEY</h2>
      <h1 className="section-title">Work Experience</h1>
      
      <div className="work-content">
        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-role">IT Technician III</div>
            <div className="experience-company">Canada's Wonderland</div>
          </div>
          <div className="experience-item">
            <div className="experience-role">Software Engineer</div>
            <div className="experience-company">Mackenzie Health Hospital</div>
          </div>
          <div className="experience-item">
            <div className="experience-role">Junior System Administrator</div>
            <div className="experience-company">Privcurity Consulting Corporation</div>
          </div>
        </div>

        <div className="experience-details">
          <h2 className="experience-title">IT Technician III</h2>
          <div className="company-name">Canada's Wonderland</div>
          <div className="experience-duration">Jun 2023 - Present</div>
          <ul className="experience-description">
            <li>Led Tier 1-3/L3 migration and deployment for 2000+ devices on domain, ensuring seamless park-wide operations.</li>
            <li>Automated tasks with PowerShell and ConnectWise on locally hosted virtual machines.</li>
            <li>Architected Windows MDT from scratch, enabling PXE boot, and sysprepped 15+ clean volumes for scalable PC deployment.</li>
            <li>Integrated SMB file shares with ACLs, configured Print Server roles, and optimized Azure.</li>
            <li>Optimized DNS zones and DHCP failover with RSAT, leveraging subnetting for high availability.</li>
            <li>Deployed POS/KDS/Debit systems using Oracle EMC and Simphony.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
