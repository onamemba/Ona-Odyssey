import React from 'react';
import './ProjectSection.css';

const projectsData = [
  {
    title: 'FinancialFlow',
    description: 'Comprehensive personal finance management application built with Next.js and TypeScript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.',
    image: 'financialflow.png', // Replace with actual image path
    tags: ['#React.js', '#Typescript', '#Tailwind CSS'],
    link: 'https://www.financialflow.com' // Replace with actual project link
  },
  {
    title: 'Sunnify (Spotify Downloader)',
    description: 'Sunnify is a Spotify downloader webapp/desktop application that allows you to download entire playlists locally onto your Mac/Linux/Windows PC. The web version of the app is hosted on AWS Lambda and Elastic Beanstalk, with FastAPI ASGI production.',
    image: 'sunnify.png', // Replace with actual image path
    tags: ['#Python', '#Webscraping', '#Proxy/API', '#AWS Lambda/Beanstalk', '#FastAPI'],
    link: 'https://www.sunnify.com' // Replace with actual project link
  },
  {
    title: 'Enterprise API Request Tester',
    description: 'Comprehensive API testing tool with support for all major HTTP methods, authentication and CORS-friendly proxy. Features include request import/export, real-world samples, and local storage for data persistence. Built with Next.js and TypeScript for optimal performance and developer experience.',
    image: 'enterprise-api-tester.png', // Replace with actual image path
    tags: ['#Typescript', '#Tailwind CSS', '#Next.js', '#Authentication/Body'],
    link: 'https://www.api-tester.com' // Replace with actual project link
  },
  // Add more projects here...
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">INNOVATIVE CREATIONS</h2>
      <h1 className="projects-title">Projects.</h1>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title}   
 />
            <h3>{project.title}</h3>
            <p>{project.description}</p>   

            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;