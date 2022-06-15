import React from 'react'
import './Video.css'
import { FaPlay } from "react-icons/fa";

function Video() {
    return (
        <div className="video-stor py-5 mt-5">
            <div className="container text-center">
                <h2>When a mans stomach is full it makes no<br/>
                difference whether he is rich or poor.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <a href="#" ><FaPlay className="fa me-2"/> 
                Watch Our Story</a>
            </div>
        </div>
    )
}

export default Video