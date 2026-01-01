import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* 1. Navigation Bar */}
      <nav className="navbar">
        <div className="logo">🐾 PawPrint</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#mission">Mission</a>
          <a href="#team">Team</a>
        </div>
        <button className="btn-paw">Get the App</button>
      </nav>

      {/* 2. Hero Section */}
      <header className="hero" id="home">
        <div className="hero-overlay"></div>
        
        {/* Placeholder Image - You can change this link to any dog image you like */}
        <img 
            src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Dog Background" 
            style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}}
        />

        <div className="hero-content">
          <h1>Never Lose Your Best Friend.</h1>
          <p style={{fontSize: '1.5rem', marginBottom: '2rem'}}>
            The smartest GPS collar for dogs and cats. Real-time tracking, health monitoring, and peace of mind.
          </p>
          <button className="btn-paw">Meet the Collar</button>
        </div>
      </header>

      {/* 3. Mission & Vision (Required by Assignment) */}
      <section id="mission" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#FF9F1C', fontSize: '2.5rem' }}>Our Mission</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.2rem', color: '#555' }}>
          "Ensuring the safety and health of your furry best friends with smart technology."
        </p>
        
        <div style={{ background: '#E0F7FA', padding: '2rem', borderRadius: '20px', maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ color: '#006064' }}>Our Vision</h3>
          <p style={{ fontStyle: 'italic', color: '#006064', fontSize: '1.1rem' }}>
            "To create a world where every pet lives a longer, safer, and happier life through the power of connection."
          </p>
        </div>
      </section>

      {/* 4. Products / Services */}
      <section id="features" style={{ backgroundColor: '#FFF5E6' }}>
        <h2 style={{ textAlign: 'center', paddingTop: '3rem', fontSize: '2.5rem' }}>Why Pet Owners Love Us</h2>
        <div className="features-grid">
          
          <div className="feature-card">
            <div style={{ fontSize: '3rem' }}>📍</div>
            <h3>Live GPS</h3>
            <p>Real-time location tracking on your phone. Find them instantly if they wander off.</p>
          </div>

          <div className="feature-card">
            <div style={{ fontSize: '3rem' }}>❤️</div>
            <h3>Health Monitor</h3>
            <p>Track heart rate and sleep patterns to detect health issues early.</p>
          </div>

          <div className="feature-card">
            <div style={{ fontSize: '3rem' }}>🚧</div>
            <h3>Virtual Fence</h3>
            <p>Set a safe zone on the map and get an alert the second they leave it.</p>
          </div>

        </div>
      </section>

      {/* 5. Team Section (Required: You need to add photos here later) */}
      <section id="team" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Meet the Pack</h2>
        <p style={{ color: '#777', marginBottom: '3rem' }}>We are a team of engineers and pet lovers.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          
          {/* Member 1 (You) */}
          <div style={{ width: '200px' }}>
            <div style={{ width: '150px', height: '150px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
            <h3>Member Name 1</h3>
            <p style={{ color: '#FF9F1C', fontWeight: 'bold' }}>Lead Developer</p>
            <p style={{ fontSize: '0.9rem' }}>Built the GPS tracking algorithm.</p>
          </div>

           {/* Member 2 */}
           <div style={{ width: '200px' }}>
            <div style={{ width: '150px', height: '150px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
            <h3>Member Name 2</h3>
            <p style={{ color: '#FF9F1C', fontWeight: 'bold' }}>UI/UX Designer</p>
            <p style={{ fontSize: '0.9rem' }}>Designed the mobile app interface.</p>
          </div>

           {/* Member 3 */}
           <div style={{ width: '200px' }}>
            <div style={{ width: '150px', height: '150px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
            <h3>Member Name 3</h3>
            <p style={{ color: '#FF9F1C', fontWeight: 'bold' }}>QA Engineer</p>
            <p style={{ fontSize: '0.9rem' }}>Tested the collar in extreme weather.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;
