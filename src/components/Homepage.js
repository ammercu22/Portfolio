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
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
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
                    <div><a href="https://github.com/ammercu22/" target="_blank" rel="noopener noreferrer"><img src={github} width = "40px" alt=""/></a></div>
                    <div><a href="https://www.linkedin.com/in/alliyah-mercurio-ab7b2a218/" target="_blank" rel="noopener noreferrer" ><img src={linkedin} width="45px"  alt=""/></a></div>
                    <div><div className='email'><h5>ammerc4@gmail.com</h5></div><img className = "emailImg" src={email} width="45px"  alt=""></img></div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
