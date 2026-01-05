import React from 'react';

const About = () => {
  return (
    <section className="about-section" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* 1. WHO YOU ARE (The Hook) */}
      <div className="about-header" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px' }}>
          About <span className="gradient-text">Me</span>
        </h2>
        <div style={{ height: '4px', width: '60px', background: '#3eb595', borderRadius: '2px' }}></div>
      </div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '50px', alignItems: 'start' }}>
        
        {/* LEFT: THE STORY */}
        <div className="about-text">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '20px' }}>
            Hello! I'm currently a student of <strong style={{ color: 'white' }}>Pan-Atlantic University</strong>. 
            I enjoy coding as hobby and also building software that solves real-world problems, from business tools to educational platforms.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '20px' }}>
            My journey started with a curiosity and love for how things work on the web, which led me to enrol as a student 
            of Pan-Atlantic University where I learned various programming languages. 
          </p>
          
          {/* CTA (Call to Action) */}
          <div style={{ marginTop: '30px' }}>
            <a href="mailto:emmanuelamarame@gmail.com" className="btn-primary" style={{
              textDecoration: 'none',
              padding: '12px 25px',
              background: 'white',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '30px',
              display: 'inline-block'
            }}>
              Let's Connect →
            </a>
          </div>
        </div>

        {/* RIGHT: THE SKILLS (Visual Focus) */}
        <div className="skills-box" style={{ background: '#1e293b', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1.2rem', color: '#94a3b8' }}>Technical Focus</h3>
          
          <div className="skill-category" style={{ marginBottom: '20px' }}>
            <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Frontend</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['React', 'JavaScript (ES6+)', 'Tailwind'].map(skill => (
                <span key={skill} style={{ background: 'rgba(62, 181, 149, 0.1)', color: '#3eb595', padding: '5px 12px', borderRadius: '6px', fontSize: '0.9rem', fontWeight: '500' }}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <span style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Backend & Data</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Node.js', 'Python', 'PostgreSQL', 'FastAPI'].map(skill => (
                <span key={skill} style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', padding: '5px 12px', borderRadius: '6px', fontSize: '0.9rem', fontWeight: '500' }}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;