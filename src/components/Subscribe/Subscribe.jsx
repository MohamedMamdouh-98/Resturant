import React from 'react'
import './Subscribe.css'

function Subscribe() {
    return (
        <div className="subscribe text-center py-5">
            <h2 className="py-4 fs-1">Hurry up! Subscribe our newsletter<br/> and get 25% Off</h2>
            <p className='my-3'>Limited time offer for this month. No credit card required.</p>
            <div className="py-3">
            <input type='email' placeholder='Enter Address Here'/>
            <button type='submit'>subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe