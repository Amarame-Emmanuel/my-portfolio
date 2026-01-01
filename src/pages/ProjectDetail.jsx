import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  return (
    <div className="project-wrapper">
      
      {/* 1. Page Header */}
      <div className="gallery-header">
        <h1 className="gallery-title">
          Selected <span className="gradient-text">Works</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
          A collection of projects that define my journey as a developer.
        </p>
      </div>

      {/* 2. The Projects Grid */}
      <div className="projects-grid">

        {/* --- PROJECT 1: INVENTORY SYSTEM --- */}
        <div className="gallery-card">
          <div className="card-image-wrapper">
            {/* Replace with your screenshot */}
            <img src="https://via.placeholder.com/600x400" alt="Inventory Project" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Inventory & POS System</h3>
            <p className="card-desc">
              A comprehensive tool for businesses to track stock levels, manage sales, and generate real-time reports. Built for speed and reliability.
            </p>
            <div className="card-tech">
              <span className="mini-badge">React</span>
              <span className="mini-badge">Node.js</span>
              <span className="mini-badge">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* --- PROJECT 2: EDUBRIDGE --- */}
        <div className="gallery-card">
          <div className="card-image-wrapper">
             <img src="https://via.placeholder.com/600x400" alt="EduBridge Project" />
          </div>
          <div className="card-content">
            <h3 className="card-title">EduBridge Learning</h3>
            <p className="card-desc">
              An EdTech platform bridging the gap for students preparing for WAEC/JAMB. Features USSD access for offline learning support.
            </p>
            <div className="card-tech">
              <span className="mini-badge">Python</span>
              <span className="mini-badge">FastAPI</span>
              <span className="mini-badge">USSD</span>
            </div>
          </div>
        </div>

        {/* --- PROJECT 3: FOOTBALL MANAGER TOOL --- */}
        <div className="gallery-card">
          <div className="card-image-wrapper">
             <img src="https://via.placeholder.com/600x400" alt="FM Tool" />
          </div>
          <div className="card-content">
            <h3 className="card-title">FM Attribute Analyzer</h3>
            <p className="card-desc">
              A data visualization tool for Football Manager players to analyze player stats and generate custom attribute sheets.
            </p>
            <div className="card-tech">
              <span className="mini-badge">JavaScript</span>
              <span className="mini-badge">Data Viz</span>
              <span className="mini-badge">React</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Navigation Footer */}
      <div style={{ textAlign: 'center', paddingBottom: '60px' }}>
        <Link to="/" className="back-link">
          <span>←</span> Return to Home
        </Link>
      </div>

    </div>
  );
};

export default ProjectDetail;