import React from "react";
import "./App.css";
import logo from './logo.svg'; // Import the logo if needed

function Header() {
  return (
    <div className="header">
      <div className="logo">Website Logo</div>
      <button className="notification-button">Notifications<span className="notification-badge">3</span>
      </button>
      <button className="account-button">Account</button>
      <button className="menu-button">&#9776; Menu</button>
    </div>
  );
}

function Navbar() {
  return (
    <div className="App">
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a className="active" href="#">Explore</a></li>
        <li><a className="active" href="#">Learn</a></li>
        <li><a className="active" href="#">Achieve</a></li>
        <li><a className="active" href="#">Practice</a></li>
        <li><a className="active" href="#">Projects</a></li>
        <li><a className="active" href="#">Careers</a></li>
        <li><a className="active" href="#">Mentorship</a></li>
        <li><a className="active" href="#">Blogs</a></li>
        <li><a className="active" href="#">Community</a></li>
        <h4>Connect with us</h4>
        <div className="social-media">
          <button><img className="social" src="whatsapp.png" alt="whatsapp" /></button>
          <button><img className="social" src="linkedin.png" alt="linkedin" /></button>
          <button><img className="social" src="instagram.png" alt="instagram" /></button>
          <button><img className="social" src="discord.png" alt="discord" /></button>
          <button><img className="social" src="youtube.jpg" alt="youtube" /></button>
        </div>
      </ul>
    </div>
  );
}

function Mentorship() {
  return (
    <div className="Mentorship">
      <div className="mentor_logo">
        <img src="./first.png" width="50%" alt="Mentor Logo"></img>
      </div>
      <div className="description">
        <button type="submit" name="My Mentor">My Mentor</button>
        <li className="name">Mr. Ankit Awasti</li>
        <li>
          <img name="highlight-logo" src="" alt="highlight"></img>
          <span className="highlight-head">Highlights:</span> 
          <span className="highlight-body">IIT Delhi Graduate | Bain & Company</span>
        </li>
        <li>
          <img name="about-logo" src="" alt="about"></img>
          <span className="about-head">About:</span> 
          <span className="about-body">Ankit is an IIT Delhi graduate and current Bain & Company consultant, specializing in strategic consulting and business optimization</span>
        </li>
        <button type="submit" name="Connect Me">Connect Me</button>
      </div>
      <div className="booking">
        <h1>Session booking</h1>
        <div>Book a session for guidance in any specific area like projects, interviews, etc.</div>
      </div>
      <div className="manage">
        <h1>Manage Sessions</h1>
        <div>Upcoming Sessions: 2</div>
        <div>Credits left: 5</div>

        <div className="ui-widgets">
          <div className="ui-values">2/5</div>
          <div className="ui-labels">Java</div>
        </div>
      </div>

      <div className="course section">
        <h1>Executive Masterclass</h1>
        <div className="cards list">
          <div className="card">
            <img src="cp.png" alt="cp" width="100%"></img>
            <h1>Competitive Programming</h1>
            <button className="duration" name="time">1hr 30 Min</button>
          </div>
          <div className="card">
            <img src="case.jpg" alt="case study & Guesstimates" width="100%"></img>
            <h1>Case Study & Guesstimates</h1>
            <button className="duration" name="time">live</button>
          </div>
          <div className="card">
            <img src="finance.png" alt="Financial Analysis" width="100%"></img>
            <h1>Financial Analysis</h1>
            <button className="duration" name="time">1hr 30 Min</button>
          </div>
          <div className="card">
            <img src="resume.png" alt="Resume Making" width="100%"></img>
            <h1>Resume Making</h1>
            <button className="duration" name="time">1hr 30 Min</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mainpage() {
  return (
    <div className="main">
      {/* <Header /> */}
      <Navbar />
      <Mentorship />
    </div>
  );
}

export default Mainpage;
