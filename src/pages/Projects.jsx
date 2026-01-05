import ProjectList from '../components/ProjectList'; // Adjust path if needed

const Projects = () => {
  return (
    <div className="page-container" style={{ paddingTop: '80px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="section-title">All <span className="gradient-text">Projects</span></h1>
        <p style={{ color: '#94a3b8' }}>Here is a selection of my recent work.</p>
      </div>

      {/* Reuse your existing ProjectList component */}
      <ProjectList />
      
    </div>
  );
};

export default Projects;