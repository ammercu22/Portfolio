import React from 'react';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/email.png'
function Homepage() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <h4>AM</h4>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                </ul>
            </nav>
            
            <div className='page' id='home'>
                <div className="header">
                    <h2>Hey, I'm</h2>
                    <h1>Alliyah Mercurio</h1>
                    <p>Software Engineer</p>
                    <button className = "available-button">Resume</button>
                </div>
                <div className='social-media'>
                    <div><img src={github} width = "40px" alt=""/></div>
                    <div><img src={linkedin} width="45px"  alt=""></img></div>
                    <div><img src={email} width="45px"  alt=""></img></div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
