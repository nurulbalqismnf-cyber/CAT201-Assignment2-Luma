import React from 'react';
import './App.css';
import myImage from './cats.jpg'; // <-- ADD THIS LINE
import './App.css';
import member1 from './member1.jpg';
import member2 from './member2.jpg';
import member3 from './member3.jpg';
import collarImage from './collar.png'; 


function App() {
  return (
    <div className="App">
      
      {/* 1. Navigation Bar */}
      <nav className="navbar">
        <div className="logo">🐾PawFriends✧.*</div>
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
        
        {/* Placeholder Image */}
        <img 
            src={myImage} className="App-logo"
            alt="profile" 
            style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover',objectPosition: 'bottom', zIndex: 0}}
        />

        <div className="hero-content">
          <h1>Hello Friends!</h1>
          <p style={{fontSize: '1.5rem', marginBottom: '2rem'}}>
            Explore together, connected forever.
          </p>
         <a href="#meet-collar" className="btn-paw" style={{ textDecoration: 'none', display: 'inline-block' }}>
  Meet the Collar
        </a>
        </div>
      </header>

      {/* 3. Mission & Vision (Required by Assignment) */}
      <section id="mission" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#b395ee', fontSize: '2.5rem' }}>Our Mission</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.2rem', color: '#555' }}>
          "Ensuring the safety and health of your furry best friends with smart technology."
        </p>
        
        <div style={{ background: '#ede3faff', padding: '2rem', borderRadius: '20px', maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ color: '#120036ff' }}>Our Vision</h3>
          <p style={{ fontStyle: 'italic', color: '#120036ff', fontSize: '1.1rem' }}>
            "To bridge the distance between instinct and intelligence, creating a world where every exploration deepens the connection between you and your pet."
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

      {/* --- NEW SECTION: The Collar & Functionality --- */}
      <section id="meet-collar" style={{ padding: '5rem 2rem', background: 'white', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '4rem' }}>
        
        {/* Left Side: Collar Image */}
        <div style={{ flex: '1', maxWidth: '500px' }}>
          {/* Replace src with your actual collar image later */}
          <img 
            src={collarImage}
            alt="Luma Smart Collar" 
           style={{ 
              width: '100%', 
              maxWidth: '400px', /* Keeps it from getting too huge */
              objectFit: 'contain', /* Keeps the shape correct */
              dropShadow: '0px 10px 20px rgba(0,0,0,0.2)' /* Optional: Adds a cool shadow */
            }}
          />
        </div>

        {/* Right Side: Functionality Description */}
        <div style={{ flex: '1', maxWidth: '500px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#011627' }}>The Smartest Collar.</h2>
          <p style={{ fontSize: '1.2rem', color: '#b395ee', fontWeight: 'bold' }}>GPS • Health • Safety</p>
          
          <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
            The Luma Collar isn't just an accessory; it's a lifeline. Using 
            <strong> advanced satellite technology</strong>, it tracks your pet's location in real-time. 
            Built-in sensors monitor <strong>heart rate and sleep quality</strong>, alerting you to health issues before they become serious.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
            <li style={{ marginBottom: '10px' }}>⚡ <strong>30-Day Battery:</strong> Charge once a month.</li>
            <li style={{ marginBottom: '10px' }}>🌊 <strong>100% Waterproof:</strong> Ready for swimming.</li>
            <li style={{ marginBottom: '10px' }}>🌙 <strong>Night Light:</strong> LED glow for night walks.</li>
          </ul>

          <button className="btn-paw">Add to Cart - $89</button>
        </div>

      </section>

      {/* 5. Team Section */}
      <section id="team" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Luma Team</h2>
        <p style={{ color: '#777', marginBottom: '3rem' }}>We are a team of engineers and pet lovers.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          
          {/* Member 1*/}
          <div style={{ width: '200px' }}>
            {/* Replaced Grey Circle with Image */}
            <img 
              src={member1} 
              alt="Member 1" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block' }} 
            />
            <h3>Nurul Balqis</h3>
            <p style={{ color: '#7355adff', fontWeight: 'bold' }}>Lead Developer</p>
            <p style={{ fontSize: '0.9rem' }}>Built the GPS tracking algorithm.</p>
          </div>

           {/* Member 2 */}
           <div style={{ width: '200px' }}>
            <img 
              src={member2} 
              alt="Member 2" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block' }} 
            />
            <h3>Nurin Izzah</h3>
            <p style={{ color: '#7355adff', fontWeight: 'bold' }}>UI/UX Designer</p>
            <p style={{ fontSize: '0.9rem' }}>Designed the mobile app interface.</p>
          </div>

           {/* Member 3 */}
           <div style={{ width: '200px' }}>
            <img 
              src={member3} 
              alt="Member 3" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block' }} 
            />
            <h3>Siti Nursyasya</h3>
            <p style={{ color: '#7355adff', fontWeight: 'bold' }}>QA Engineer</p>
            <p style={{ fontSize: '0.9rem' }}>Tested the collar in extreme weather.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;
