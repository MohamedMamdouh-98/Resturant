import React from 'react'
import AboutImg from '../../images/abut.png'
import './About.css'

function About() {
    return (
        <div className="about py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-7 col-md-12">
                        <img src={AboutImg}/>
                    </div>
                    <div className=" col-lg-5 col-md-12 mt-5 px-4">
                        <h2 className="my-4">We pride ourselves on<br/> making real food from the<br/> best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button> Leam More </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About