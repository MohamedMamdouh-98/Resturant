import React from 'react'
import './Intro.css'
import { FiCheck } from "react-icons/fi";
import IntroImage from '../../images/intro.png';
function Intro() {
    return (
        <div className="intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand <br/>with the best possible<br/> ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="text my-5">
                            <p><FiCheck className="fa fs-2 me-2"/> Etiam sed dolor ac diam volutpat.</p>
                            <p><FiCheck className="fa fs-2 me-2"/> Erat volutpat aliquet imperdiet.</p>
                            <p><FiCheck className="fa fs-2 me-2"/> purus a odio finibus bibendum.</p>
                        </div>
                        <button className="mb-3">learn more</button>
                    </div>
                    <div className="col-md-6 intro-img">
                            <img src={IntroImage} style={{width: '100%'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro