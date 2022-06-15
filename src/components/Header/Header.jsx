import React from 'react'
import './Header.css'
import { BiChevronRight,BiBasket } from "react-icons/bi";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h2 className="">Good food choices<br/> are good<br/> investments.</h2>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                            <button className='me-2'>order now <BiBasket className='ms-3 fs-3'/></button>
                            <button>learn more<BiChevronRight className='ms-3 fs-3 text-secondary'/></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header