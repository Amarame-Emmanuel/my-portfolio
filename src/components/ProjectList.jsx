import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data'; // Use your existing data file

const ProjectList = () => {
  // 1. STATE: Which project is currently open? (null means none)
  const [selectedProject, setSelectedProject] = useState(null);

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
            onClick={() => setSelectedProject(project)} // <--- CLICK TO OPEN MODAL
            style={{ cursor: 'pointer' }}
          >
            {/* The Mini Screen (Browser Window) */}
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
      
      {/* Back to Home Link */}
      <div style={{ textAlign: 'center', paddingBottom: '60px' }}>
        <Link to="/" className="back-link"><span>←</span> Return to Home</Link>
      </div>

      {/* --- THE MODAL (POPUP) --- */}
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
              {/* Using Tech stack as "Role" since we don't have role in data.js yet */}
              <span className="modal-role">{selectedProject.tech[0]} Developer</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <Link to={`/project-details/${selectedProject.id}`} className="modal-link"> View Project Details → </Link>
              
              {/* --- MAPPING YOUR DATA FIELDS --- */}
              
              <h3 style={{ color: 'white', marginTop: '20px' }}>The Problem</h3>
              <p className="modal-desc">{selectedProject.problem}</p>

              <h3 style={{ color: 'white', marginTop: '20px' }}>Key Features</h3>
              <ul style={{ color: '#94a3b8', paddingLeft: '20px', marginBottom: '20px' }}>
                {selectedProject.features && selectedProject.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>{feature}</li>
                ))}
              </ul>

              <h3 style={{ color: 'white', marginTop: '20px' }}>What I Learned</h3>
              <p className="modal-desc">{selectedProject.learned}</p>

              <div className="tech-stack" style={{ marginTop: '30px' }}>
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

export default ProjectList;