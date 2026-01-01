import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  // 1. STATE: Which project is currently open? (null means none)
  const [selectedProject, setSelectedProject] = useState(null);

  // 2. DATA: Your Project List
  const projects = [
    {
      id: 1,
      title: "Inventory & POS System",
      role: "Full Stack Developer",
      shortDesc: "A comprehensive tool for businesses to track stock levels, manage sales, and generate real-time reports.",
      fullDesc: `
        This project was built to solve the issue of manual stock tracking for local businesses. 
        It features a real-time dashboard, barcode scanning support, and automated re-order alerts.
        
        The backend is powered by Node.js and PostgreSQL to handle thousands of transactions, 
        while the frontend uses React for a snappy, app-like experience.
      `,
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "https://via.placeholder.com/600x400" // Replace with real screenshot
    },
    {
      id: 2,
      title: "EduBridge Learning",
      role: "Backend Engineer",
      shortDesc: "An EdTech platform bridging the gap for students preparing for WAEC/JAMB using USSD technology.",
      fullDesc: `
        EduBridge tackles the digital divide by allowing students without internet access to 
        practice exam questions via SMS and USSD. 
        
        I utilized Africa's Talking API for the gateway and Python (FastAPI) to handle the 
        logic, ensuring high availability even on low-end feature phones.
      `,
      tech: ["Python", "FastAPI", "USSD"],
      image: "https://via.placeholder.com/600x400"
    },
    {
      id: 3,
      title: "FM Attribute Analyzer",
      role: "Frontend Developer",
      shortDesc: "A data visualization tool for Football Manager players to analyze stats and create custom sheets.",
      fullDesc: `
        As a fan of Football Manager, I wanted a way to visualize player strengths instantly. 
        This tool parses game data and generates radar charts and attribute comparisons. 
        It helps gamers make data-driven transfer decisions.
      `,
      tech: ["JavaScript", "React", "Data Viz"],
      image: "https://via.placeholder.com/600x400"
    }
  ];

  return (
    <div className="project-wrapper">
      
      {/* Header */}
      <div className="gallery-header">
        <h1 className="gallery-title">
          Selected <span className="gradient-text">Works</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
          Click on any project to see the details.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="gallery-card" 
            onClick={() => setSelectedProject(project)} // <--- CLICK TO OPEN
            style={{ cursor: 'pointer' }}
          >
            <div className="card-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.shortDesc}</p>
              <div className="card-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="mini-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', paddingBottom: '60px' }}>
        <Link to="/" className="back-link"><span>←</span> Return to Home</Link>
      </div>


      {/* --- THE MODAL (POPUP) --- */}
      {/* Only render if a project is selected */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          
          {/* Stop click inside modal from closing it */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              ×
            </button>

            <div className="modal-img-wrapper">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-body">
              <span className="modal-role">{selectedProject.role}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              
              {/* Renders line breaks properly */}
              <p className="modal-desc" style={{ whiteSpace: 'pre-line' }}>
                {selectedProject.fullDesc}
              </p>

              <div className="tech-stack">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;