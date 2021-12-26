import React from 'react'
import Modal from './Modal'
import {useState} from 'react'
import chessGif from '../assets/chess.gif'
import tours from '../assets/tours.png'
import apexGif from '../assets/apex_legends_2.gif'
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
        {openModal && id==="chess"? <div id="overlay">
                <Modal id = "chess" github = {true} demo = {false} githubLink = "https://github.com/ammercu22/Pygame-Chess" demoLink = "" closeModal = {setOpenModal} imgSrc={chessGif} title="Chess Game" techArray = {<p key = '1'>Python</p>}  about = {<p>A chess game simulation that allows two user to compete against each other on the same computer 
                    in a game of chess. This simulation was built using the python module 'Pygame'</p>}/>     
                </div>
                : openModal && id==="stats" ? <div id="overlay">
                <Modal id = "stats" github = {true} demo = {true} githubLink = "https://github.com/ammercu22/Video-Game-Stat-Tracker" demoLink = "https://video-game-stat-tracker.herokuapp.com/" closeModal = {setOpenModal} imgSrc={apexGif} title="Apex Legends Stat Tracker" techArray = {[<p key = '2'>ReactJS</p>,<p key = '3'>Express/Node.js</p>,<p key = '4'>Tracker Network API</p>]}  about = {<p>A web application that 
                    shows various stats for a specified player in the video game "Apex Legends". To develop this app, I used React for the front-end and Express/Node.js for the backend. For the backend, I created an API that recieves GET requests for a specified player (ex: /api/v1/profile/:platform/:gamertag) and 
                    then sends a GET requests to the Tracker Network API (tracker.gg/developers) given the parameters from the request sent to my API. The Tracker Network then responds with a JSON response containing the player's stats. This JSON response was then parsed and displayed on the front-end.</p>}/>     
                </div>
                : openModal ?<div id="overlay">
                <Modal id = "tours" github = {false} demo = {false} githubLink = "" demo = "" closeModal = {setOpenModal} imgSrc={tours} title="Madison County History Tours App" techArray = {[<p key = '5'>Flutter</p>,<p key = '6'>Dart</p>,<p key = '7'>MySQL</p>,<p key = '8'>Google Maps API</p>]}  about = {<p>This an Android and iOS supported mobile app that allows users to select self-guided 
                    tours through Madison County, IL and view information about specific tour sites. This was a project myself and 3 other students built for our senior project 
                    in college. In the span of 2 semesters, we collaborated with clients from the Madison County Historical Society to develop a prototype that met their 
                    requirements. My role in the project was to design and develop the front-end of the app as well as query neccessary information from the app's database 
                    to be displayed. The technologies that I used were Flutter which uses the language 'Dart' and the Google Maps API. <br></br><br></br>The project is no longer available 
                    to use because the server running on the back-end of our app is now unavailable since it was school administrated and neither our group or our clients
                     could agree on where to host a new server. The code for this project is also unavailable because there was a lot of information that our group wanted 
                     to keep private such as APIs and database info (IP addresses, passwords, etc.) . </p>}/>     
                </div>
                : null
                    }
    </div>
    )
}

export default Card
