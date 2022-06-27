import React from 'react'
import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BsHeartHalf } from "react-icons/bs";
import './Footer.css'

function Footer() {
    return (
        <div className="Footer text-center pb-2">
            <div style={{width: '100%'}}>
                <div className="social">
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaYoutube/>
                    <FaDribbble/>
                    <FaLinkedinIn/>
                    <FaInstagram/>
                </div>
                <p className="mt-5">copyright ©2022 Mohamed Mamdouh DO7A <BsHeartHalf className='fa'/></p>
            </div>
        </div>
    )
}

export default Footer