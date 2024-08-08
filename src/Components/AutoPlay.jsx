import React, { Component } from "react";
import Slider from "react-slick";
import logo from '../assets/images/logo.png'

import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'


function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div className="slider-container">

      <h1 className="SliderTitle">Parceiros</h1>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
        <img src={img2} alt="" />
        </div>
        <div>
        <img src={img3} alt="" />
        </div>
        <div>
        <img src={img4} alt="" />
        </div>
        <div>
        <img src={img5} alt=""/>
        </div>
        <div>
        <img src={img4} alt="" />

        </div>
      </Slider>


    </div>

  );
}

export default PauseOnHover;
