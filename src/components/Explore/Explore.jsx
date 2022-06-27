import React from 'react'
import './Explore.css'
import E1 from '../../images/E1.jpg'
import E2 from '../../images/E2.jpg'
import E3 from '../../images/E3.jpg'

function Explore() {
    return (
        <div className="explore py-5">
            <div className="container">
                <div className="text-center py-5">
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br/> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={E1}/>
                        <div className="text ps-2">
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 15 - 20 Minutes | Serves: 1</p>
                        <span>$10.50 <del>$11.70</del></span><br/>
                        </div>
                        <button className='mb-3'>order now</button>
                    </div>
                    <div className="col-md-4">
                        <img src={E2}/>
                        <div className="text ps-2">
                        <h5>Vegetarian Burger</h5>
                        <p>Time: 30 - 45 Minutes | Serves: 1</p>
                        <span>$9.20 <del>$10.50</del></span><br/>
                        </div>
                        <button className='mb-3'>order now</button>
                    </div>
                    <div className="col-md-4">
                        <img src={E3}/>
                        <div className="text ps-2">
                        <h5>Raspberry Stuffed French Toast</h5>
                        <p>Time: 10 - 15 Minutes | Serves: 1</p>
                        <span>$12.50 <del>$13.20</del></span><br/>
                        </div>
                        <button className='mb-3'>order now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore