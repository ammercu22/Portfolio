import React from 'react'
import Modal from './Modal'
import {useState} from 'react'
import chessGif from '../assets/chess.gif'
import apex from '../assets/profile.png'
import tours from '../assets/tours.png'
function Card({id, title, imgSrc, linksArray, techArray, modalTarget}) {
    const [openModal, setOpenModal] = useState(false);
    
    return (
    <div>                
        <div className = "card" id = {id}>
            <div className="image-box">
                <img src={imgSrc} alt=''/>
            </div>
            <div className = "description">
                <div className="links">
                    {linksArray}
                </div>
                <h3>{title}</h3>
                <p>{techArray}</p>
                <button className = "button" onClick={
                    () =>{
                        console.log('Before: ' + openModal)
                        setOpenModal(true);
                        console.log('After: ' + openModal)
                    }
                }>Learn More</button>

                </div>
        </div>
        {openModal && id==="chess"? 
                <Modal id = "chess" closeModal = {setOpenModal} imgSrc={chessGif} title="Chess Game" techArray = {<p key = '1'>Python</p>}  about = {'A chess game simulation that allows two user to compete against each other on the same computer in a game of chess. This simulation was built using python module Pygame'}/>     
                : openModal && id==="stats" ? 
                <Modal id = "stats" closeModal = {setOpenModal} imgSrc={apex} title="Apex Legends Stat Tracker" techArray = {[<p key = '2'>React</p>,<p key = '3'>Express/Node.js</p>,<p key = '4'>Tracker Network API</p>]}  about = {'A web application that shows various stats for a specified player in the video game "Apex Legends". This application was using html5, css, javascript and the tracker.gg api to to retrive the stats from Apex Legends.'}/>     
                : openModal ?
                <Modal id = "tours" closeModal = {setOpenModal} imgSrc={tours} title="Madison County History Tours App" techArray = {[<p key = '5'>Flutter</p>,<p key = '6'>Dart</p>,<p key = '7'>MySQL</p>,<p key = '8'>Google Maps API</p>]}  about = {'This an Android and iOS supported mobile app that allows users to select self-guided tours through Madison County, IL and view information about specific tour sites.This was a project myself and 3 other students built for our senior project in college. In the span of 2 semesters, we collaborated with clients from the Madison CountyHistorical Society to develop a prototype that met their requirements. My role in the project was to design and develop the front-end of the app as well as query neccessary information from the app\'s database to be displayed. The technologies that I used were Flutter which uses the language \'Dart\' and the Google Maps API. \n\n The project is no longer available to use because the server running on the back-end of our app is now unavailable since it was school administrated and neither our group or our clients could agree on where to equip a new server.The code for this project is also unavailable because they were a lot of information that our group wanted to keep private such as APIs and IP addresses. '}/>     
                : null
                    }
    </div>
    )
}

export default Card
