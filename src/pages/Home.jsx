import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      
      {/* 1. HERO SECTION: Typographic focus + "Glass" Image Card */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div> {/* Decorative blob */}
        
        <div className="hero-grid">
          <div className="hero-intro">
            <span style={{ color: '#a78bfa', fontWeight: 'bold', letterSpacing: '2px' }}>HELLO, I AM EMMANUEL</span>
            <h1>
              Building the <span className="gradient-text">Digital Future</span> <br />
              One Line at a Time.
            </h1>
            <p>
              A Computer Scientist & Developer specialized in creating 
              high-performance web applications that scale.
            </p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
              <Link to="/project-details" className="btn-primary">View My Work</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              {/* Replace with your image */}
              <img src="https://via.placeholder.com/500x600" alt="Emmanuel" className="hero-img" />
              
              <div className="floating-stat">
                <span>Experience</span>
                <strong>4+ Years</strong>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. EXPERTISE: Bento Grid Layout */}
      <section className="skills-section">
        <div className="section-head">
          <h2 className="section-title">My Expertise</h2>
          <p style={{ color: '#94a3b8' }}>Bridging the gap between design and engineering.</p>
        </div>

        <div className="bento-grid">
          {/* Card 1 */}
          <div className="bento-card">
            <span className="card-icon">💻</span>
            <h3>Frontend Architecture</h3>
            <p>Crafting responsive, pixel-perfect interfaces using React, Vue, and modern CSS frameworks.</p>
          </div>

          {/* Card 2 */}
          <div className="bento-card">
            <span className="card-icon">⚙️</span>
            <h3>Backend Logic</h3>
            <p>Building robust APIs and database structures that power complex applications securely.</p>
          </div>

          {/* Card 3 */}
          <div className="bento-card">
            <span className="card-icon">🚀</span>
            <h3>Performance Optimization</h3>
            <p>Ensuring applications load instantly and rank high on search engines.</p>
          </div>
        </div>
      </section>


      {/* 3. CONTACT: The Formspree API Form */}
      <section className="contact-section">
        <div className="contact-wrapper">
          <h2>Ready to <span className="gradient-text">Collaborate?</span></h2>
          <p style={{ color: '#94a3b8', marginBottom: '40px' }}>
            I am currently available for freelance projects and technical consulting.
          </p>
          
          {/* --- FORM START --- */}
          <form 
            action="https://formspree.io/f/xjgkgyjp" 
            method="POST"
            style={{ maxWidth: '500px', margin: '0 auto' }}
          >
            
            {/* NAME INPUT */}
            <div className="form-group">
              <input 
                type="text" 
                name="name"  /* Vital for API */
                placeholder="Your Full Name" 
                required 
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="form-group">
              <input 
                type="email" 
                name="email" /* Vital for API */
                placeholder="Enter your email address" 
                required 
              />
            </div>

            {/* MESSAGE INPUT */}
            <div className="form-group">
              <textarea 
                rows="4" 
                name="message" /* Vital for API */
                placeholder="Tell me about your project" 
                required
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
            
          </form>
          {/* --- FORM END --- */}

        </div>
      </section>

    </main>
  );
};

export default Home;