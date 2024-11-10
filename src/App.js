import React from 'react';
import './App.css'; // Assuming basic styling is here
import TitleSection from './components/TitleSection';
// import AboutSection from './components/AboutSection';
// import ProjectsSection from './components/ProjectsSection';
// import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <TitleSection />
      {/* <AboutSection />
      <ProjectsSection />
      <ContactSection /> */}
    </div>
  );
}

export default App;