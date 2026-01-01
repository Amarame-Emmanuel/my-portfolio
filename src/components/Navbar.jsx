import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      {/* 1. INVISIBLE SPACER (Crucial for centering) */}
      {/* This empty div takes the place of the logo so the links stay in the middle */}
      <div style={{ width: '100px' }}></div> 

      {/* 2. MIDDLE LINKS (Centered) */}
      <div className="nav-links">
        
        {/* Home Link */}
        {location.pathname !== '/' && (
          <Link to="/" className="nav-item">
            Home
          </Link>
        )}

        {/* Projects Link */}
        {location.pathname !== '/project-details' && (
          <Link to="/project-details" className="nav-item">
            Projects
          </Link>
        )}
      </div>

      {/* 3. CALL TO ACTION (Right Side) */}
      <a href="mailto:emmanuelamarame@gmail.com" className="nav-btn">
        <span>→</span> Get in touch
      </a>
    </nav>
  );
};

export default Navbar;