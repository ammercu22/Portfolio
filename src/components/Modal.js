import React from 'react'
import github_b from '../assets/github-b.png'
import github_w from '../assets/github.png'
import link_w from '../assets/link2.png'
import link_b from '../assets/link1.png'
function Modal({id, imgSrc, title, techArray,about, closeModal, github, demo, githubLink, demoLink}) {

    return (
        <div className="modal" id={id}>
            <div className="modal-image">
            {id === 'tours'? <iframe width="550" height="550" src="https://www.youtube.com/embed/6KTHj4XE0ns?start=279" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : <img alt="" src={imgSrc}/>}
            </div>
            <div className="modal-description">
                <div className="modal-header">
                    <div className="title"><h3>{title}</h3></div>
                    <button data-close-button className="close-button" onClick={()=>{
                        closeModal(false);
                    }}>&times;</button>
                </div>
                <div className="modal-tech">
                    {techArray}
                </div>
                <div className="modal-body">
                    <div className = "about">
                        {about}
                    </div>
                    <div className = "buttons">
                        {github === true? <div><a className = "available-button" href= {githubLink} target="_blank" rel="noopener noreferrer" ><img src={github_w} width= "20px" alt=''/>Code</a> </div>: <div><button className = "unavailable-button"><img src={github_b} width= "20px" alt=''/>Code</button> </div>}
                        {demo === true? <div><a className = "available-button" href={demoLink}  target="_blank" rel="noopener noreferrer" ><img src={link_w} width= "20px" alt=''/>Demo</a></div> : <div><button className = "unavailable-button"><img src={link_b} width= "20px" alt=''/>Demo</button> </div>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
