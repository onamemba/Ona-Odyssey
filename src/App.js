import React from 'react';
import './App.css'; // Assuming basic styling is here
import Header from './components/Header';
import TitleSection from './components/TitleSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import EducationSection from './components/EducationSection';
import CertificationSection from './components/CertificationSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';



function App() {
  return (
    <div>
      <Header />
      <div id="title-section">
        <TitleSection />
      </div>
      {/* <div id="about-section">
        <AboutSection />
      </div>
      <div id="work-section">
        <WorkSection />
      </div>
      <div id="education-section">
        <EducationSection />
      </div> */}
      {/* 
      <CertificationSection />
      <ProjectSection />
      <ContactSection /> */}
      {/* Add more sections here */}
    </div>
  );
}

export default App;