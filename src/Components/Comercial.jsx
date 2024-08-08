import React from 'react'
import '../assets/comercial.css';
import comercialIMG from '../assets/images/comercialImg.png';


const Comercial = () => {
  return (
    <div className='ComercialContent animate__animated animate__fadeIn'>

        <div className='TextArea'>
            <h3>Imóveis em locais privilegiados</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button className="TalkButton">Fale conosco</button>

        </div>

        <div className='ImageArea animate__animated animate__fadeInRight'>
            <img src={comercialIMG} alt="" />
        </div>
    </div>
  )
}

export default Comercial