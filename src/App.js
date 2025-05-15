import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import profilePic from './assets/nayan-profile.jpg';
import resumeFile from './assets/CV.docx';
import taskflowImg from './assets/taskflow.png';
import voxyImg from './assets/voxy.png';
import gamesImg from './assets/games.png';
import GamesPortfolio from './components/GamesPortfolio';

const ProjectCard = ({ title, image, githubUrl, description }) => {
  return (
    <div className="project-card" onClick={() => window.open(githubUrl, '_blank')}>
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="hover-icon">{description}</div>
    </div>
  );
};

function App() {
  const projects = [
    {
      title: 'Taskflow AI',
      image: taskflowImg,
      githubUrl: 'https://github.com/Voxy-Taskflow/TaskflowAI',
      description: 'An AI-powered task automation and workflow orchestration system'
    },
    {
      title: 'Voxy OS',
      image: voxyImg,
      githubUrl: 'https://github.com/Voxy-Taskflow/Voxy-OS',
      description: 'A custom operating system focused on AI and automation'
    },
    {
      title: 'Games Portfolio',
      image: gamesImg,
      githubUrl: '',
      description: 'Collection of games showcasing creative mechanics and engaging gameplay',
      isLink: true
    },
  ];

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <div className="App fade">
            <div className="matrix-bg"></div>
            
            <a href={resumeFile} className="resume-button" download target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
      
            <section className="hero-section">
              <div className="hero-left">
                <img src={profilePic} alt="Nayan Sinha" className="profile-image" />
                <h1>Nayan Sinha</h1>
                <p className="location">India</p>
                <p className="tagline">Building AI-driven systems with open-source intelligence</p>
              </div>
              <div className="hero-right">
                <h2>Background</h2>
                <p className="background">Self-taught developer passionate about AI and open-source technology</p>
                <div className="skills">
                  <span>Python</span>
                  <span>AI</span>
                  <span>ML</span>
                  <span>RAG</span>
                  <span>LangChain</span>
                  <span>Transformers</span>
                  <span>FastAPI</span>
                  <span>Project Orchestration</span>
                  <span>C#</span>
                  <span>Unity Game Dev</span>
                  <span>C</span>
                  <span>Assembly</span>
                  <span>x86_64</span>
                </div>
              </div>
            </section>
      
            <section className="projects-grid">
              {projects.map((project, index) => (
                project.isLink ? (
                  <Link to="/games" key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <div className="hover-icon">{project.description}</div>
                  </Link>
                ) : (
                  <ProjectCard key={index} {...project} />
                )
              ))}
            </section>
      
            <section className="contact-section">
              <h2>Get in Touch</h2>
              <div className="contact-links">
                <a href="mailto:nayansinha2007@gmail.com">nayansinha2007@gmail.com</a>
                <a href="https://github.com/Voxy-Taskflow" target="_blank" rel="noopener noreferrer">
                  GitHub: Voxy-Taskflow
                </a>
                <a href="https://twitter.com/NayanSinha2267" target="_blank" rel="noopener noreferrer">
                  Twitter: @NayanSinha2267
                </a>
              </div>
            </section>
          </div>
        } />
        <Route path="/games" element={<GamesPortfolio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
