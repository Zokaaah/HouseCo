import React from 'react'
import '../assets/stats.css';
import statsImg from '../assets/images/stats.png'

const Stats = () => {
  return (
    <div>
            <div className='StatsContainer'>

        <div className='FirstContent'>
            <h1 className='StatsTitle'>Porque House Co?</h1>
            <div className='StatsCard'>
            <h5><ion-icon name="checkmark-circle-outline"></ion-icon>Preços acessiveis</h5>
            <p className='StatsCardText'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className='StatsCard'>
            <h5><ion-icon name="checkmark-circle-outline"></ion-icon>Preços acessiveis</h5>
            <p className='StatsCardText'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className='StatsCard'>
            <h5><ion-icon name="checkmark-circle-outline"></ion-icon>Preços acessiveis</h5>
            <p className='StatsCardText'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>

        <div className='SecondContent'>
                <img src={statsImg} alt="" />
        </div>
    </div>


    <div className='CardsBottom'>
        <div className='BotCards start'>
            <h3>2,500+</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div className='BotCards'>
        <h2>2,500+</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div className='BotCards'>
        <h2>2,500+</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


        </div>
        </div>

        <div className='StatsBanner'>
            <h1>Propriedades populares da semana</h1>
            <p>Saiba mais sobre as propriedades mais procuradas da semana</p>
            <button className='BtnBanner'>Fale conosco</button>


        </div>

        

    </div>
  )
}

export default Stats