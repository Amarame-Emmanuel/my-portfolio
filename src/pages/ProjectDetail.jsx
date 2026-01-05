import { useParams, Link } from 'react-router-dom';
import { projects } from '../data'; // Ensure this points to your data file
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  // Scroll to top when the page loads (fix for staying at bottom)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '100px', color: 'white' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '20px' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <div className="project-wrapper">
      
      {/* 1. HERO HEADER SECTION */}
      <div className="project-header">
        
        {/* Left Side: Text Info */}
        <div style={{ flex: 1 }}>
          <Link to="/projects" className="back-link" style={{ marginBottom: '30px', display: 'inline-block' }}>
            ← Back
          </Link>
          
          <h1 className="project-title">{project.title}</h1>
          <p className="project-desc">{project.shortDesc}</p>
          
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginBottom: '30px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              {/* GitHub Icon (SVG) */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
                View Code
            </a>
      )}
          
          {/* Tech Stack Pills */}
          <div className="tech-stack">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* Right Side: Big Image */}
        <div className="header-image">
           {/* Uses the same "Browser Window" style if you want, or just the glass border */}
           <img src={project.image} alt={project.title} />
        </div>
      </div>

      {/* 2. DETAILS GRID (Problem vs Solution) */}
      <div className="details-grid">
        
        {/* Left Column: The Problem */}
        <div className="problem-box">
          <span className="section-label">The Challenge</span>
          <h2 className="section-title">The Problem</h2>
          <p className="problem-text">{project.problem}</p>
        </div>

        {/* Right Column: Solution & Features (Glass Card) */}
        <div className="solution-box">
          <span className="section-label">The Solution</span>
          <h2 className="section-title">Key Features</h2>
          
          <ul style={{ color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
            {project.features.map((feature, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>{feature}</li>
            ))}
          </ul>

          <h2 className="section-title">What I Learned</h2>
          <p className="problem-text">{project.learned}</p>
        </div>

      </div>
{/* 3. NEW: SCREENSHOTS GALLERY (THE SLOTS) */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div style={{ paddingBottom: '100px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Interface <span className="gradient-text">Gallery</span>
          </h2>
          
          <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
            {project.screenshots.map((shot, index) => (
              <div key={index} className="gallery-card" style={{ cursor: 'default', transform: 'none' }}>
                
                {/* Reusing the "Browser Window" style for consistency */}
                <div className="card-image-wrapper" style={{ height: '300px' }}>
                  <img src={shot} alt={`Screenshot ${index + 1}`} />
                </div>
                
                {/* Optional Caption */}
                <div style={{ padding: '15px', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                  UI View {index + 1}
                </div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>


  );
};

export default ProjectDetail;