import React from 'react'
import '../assets/Properties.css';


import pro1 from '../assets/images/pro1.png'
import pro2 from '../assets/images/pro2.png'
import pro3 from '../assets/images/pro3.png'



const Properties = () => {
  return (
    <div className='PropertiesContainer animate__animated animate__fadeInRight'>
        <h1 className='PropertiesTitle'>Alguns imóveis disponiveis</h1>
        <p>Explore nossas opções e agende uma visita</p>

        <div className='PropertiesCards'>

            <div className='Card'>
                <img src={pro1} alt="" />
                <p className='ProName'>Apartamento beira mar</p>
                <p>Imovel próximo a praia com localização privilegiada</p>
                <p className='ProPrice'>R$480.0000</p>
            </div>

            <div className='CardMiddle'>
                <img src={pro2} alt="" />
                <p className='ProName'>Conjunto de apartamento</p>
                <p>Imovel com localização privilegiada</p>
                <p className='ProPrice'>R$180.0000</p>
            </div>

            <div className='Card'>
                <img src={pro3} alt="" />
                <p className='ProName'>Condominio Nova Sede</p>
                <p>Condominio fechado proximo ao centro</p>
                <p className='ProPrice'>R$180.0000</p>
            </div>

        </div>

        <button className="BtnVertodos">Veja todos</button>



    </div>
  )
}

export default Properties