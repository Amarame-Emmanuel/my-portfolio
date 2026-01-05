import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      {/* 1. INVISIBLE SPACER */}
      <div style={{ width: '100px' }}></div> 

      {/* 2. MIDDLE LINKS */}
      <div className="nav-links">
        
        {/* Only show "Home" if we are NOT on the Home page */}
        {location.pathname !== '/' && (
          <Link to="/" className="nav-item">
            Home
          </Link>
        )}

        {/* Only show "Projects" if we are NOT on the Projects page */}
        {location.pathname !== '/projects' && (
          <Link to="/projects" className="nav-item">
            Projects
          </Link>
        )}
        
      </div>

      {/* 3. CALL TO ACTION */}
      <a href="mailto:emmanuelamarame@gmail.com" className="nav-btn">
        <span>→</span> Get in touch
      </a>
    </nav>
  );
};

export default Navbar;