import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'
import T1 from '../../images/t1.jpg'
import T2 from '../../images/t2.jpg'
import T3 from '../../images/t3.jpg'

function Testimonials() {
    const Clients = [
    {
        img: T1,
        review: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.",
        span: 'Simab Dave - Web Designer'
    },

    {
        img: T2,
        review: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.",
        span: 'Simab Dave - Web Designer'
    },

    {
        img: T3,
        review: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.`,
        span: 'Simab Dave - Web Designer'
    }
]
    return (
        <div className="testimonials text-center py-5">
            <h2 className="pt-5">Testimonials</h2>
            <div className="container">
                <Swiper
                    modules={[ Pagination ]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {Clients.map((client, index) =>{
                        return (
                            <SwiperSlide key={index}>
                                <div className="t-info text-center pt-5">
                                    <img src={client.img}/>
                                    <p>{client.review}</p>
                                    <span>{client.span}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials