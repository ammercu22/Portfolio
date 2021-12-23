import React from 'react'

function Modal({id, imgSrc, title, techArray,about, closeModal}) {

    return (
        <div className="modal" id={id}>
            <div className="modal-image">
                <img src={imgSrc}/>
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
                        <p>{about}</p>
                    </div>
                    <div className = "buttons">
                        <a href="#" className="unavailable-button" >Demo</a>
                        <a className = "available-button" href="" target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
