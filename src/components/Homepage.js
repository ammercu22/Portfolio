import React from 'react';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
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
            <div id="overlay"></div>
            <div className='page' id='home'>
                <div className="header">
                    <h2>Hey, I'm</h2>
                    <h1>Alliyah Mercurio</h1>
                    <p>Software Engineer</p>
                </div>
                <div className='social-media'>
                    <img src={github} alt=""/>
                    <img src={linkedin} width="45" height = "35" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Homepage
