import { Fragment } from 'react'
import Header from '../Header/Header'
import './Home.css'

function Home() {
    return (
        <Fragment>
            <Header/>
            <section className="number">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 text-center pt-3 text-white">
                            <span className='fw-bold fs-1'>1287+</span>
                            <p>SAVINGS</p>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center pt-3 text-white">
                            <span className='fw-bold fs-1'>5786+</span>
                            <p>PHOTOS</p>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center pt-3 text-white">
                            <span className='fw-bold fs-1'>1440+</span>
                            <p>ROCKETS</p>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center pt-3 text-white">
                            <span className='fw-bold fs-1'>7110+</span>
                            <p>GLOBES</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
        
    )
}

export default Home