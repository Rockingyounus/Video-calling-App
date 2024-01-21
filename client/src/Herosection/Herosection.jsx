import React from 'react'
import './Herosection.css';
import {Link} from 'react-router-dom';

function Herosection() {
  return (
    <div>
    <div className="nav-bar">
    <h1 className="h-text"> MOCK INTERVIEW</h1>
  
    </div>

    <div className="hero-section">
    <div className='div-section'>
     
      <img src="./images/Mock1.jpg" alt="Mock interview" className="hero-image" style={{ width: '90%', maxHeight: '90vh', objectFit: 'cover', borderRadius: '10px' }} />
      
    </div>
    <div className="mock-interview-card">
      <img
        src="./images/Mock.jpg"
        alt="Mock interview"
        className="card-image" 
      />

      <div className="card-content">
        <h3 className="card-title">Mock Interview Session</h3>
        <p className="card-description">
          Prepare for success with our realistic mock interview experiences.
        </p>
        <Link to="/lobby">
        <button className="card-button">Start Interview</button>
        </Link>
      </div>

    </div>

  
  </div>
  </div>
    
  )
}

export default Herosection