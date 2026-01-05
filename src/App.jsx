import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      {/* The Navbar stays at the top of every page */}
      <Navbar /> 
      
      <Routes>
        {/* This is your main page with About, Projects, and Contact */}
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />
        
        {/* This is the dedicated page for one project [cite: 41, 42] */}
        <Route path="/project-details/:id" element={<ProjectDetail />} />
      </Routes>

      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '50px' }}>
        <p>Emmanuel Chukuwka Amarame | Matric: 22120612876</p> {/* Required for README/Submission [cite: 15] */}
      </footer>
    </Router>
  );
}

export default App;