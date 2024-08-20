import React from 'react'
import '../assets/testimonial.css';

import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'


import Rate from './Rate'

const Testimonial = () => {
  return (
    <div>
        <h1>Feedbacks</h1>
    <div className='TestimonialContainer'>
        <div className='TestimonialCard'>
            <Rate/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            <div className='Cliente'>
            <img className='iconFeedback' src={img1} alt="" /> 
            <h5>Aldenaire</h5>
            </div>
        </div>

        <div className='TestimonialCard'>
            <Rate/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            <div className='Cliente'>
            <img className='iconFeedback' src={img5} alt="" /> 
            <h5>Real Estate</h5>
            </div>
        </div>

        <div className='TestimonialCard'>
            <Rate/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            <div className='Cliente'>
            <img className='iconFeedback' src={img3} alt="" /> 
            <h5>Salford</h5>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Testimonial