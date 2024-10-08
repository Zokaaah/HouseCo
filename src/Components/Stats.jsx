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
            
            <div className='IconContainer'>    

                <div className='IconStats'>
                <ion-icon name="checkmark-circle-outline" size='large'></ion-icon>
                </div>
                <div className='TextStats'>
                <h5>Preços acessiveis</h5>
                <p className='StatsCardText'> Aproveite nossas condições especiais e encontre o imóvel ideal!</p>

                </div>
            </div>
            </div>

            <div className='StatsCard'>
            
            <div className='IconContainer'>    

                <div className='IconStats'>
                <ion-icon name="checkmark-circle-outline" size='large'></ion-icon>
                </div>
                <div className='TextStats'>
                <h5>Financiamento facilitado</h5>
                <p className='StatsCardText'> Conte com nossas condições especiais para realizar o sonho da casa própria.</p>

                </div>
            </div>
            </div>

            <div className='StatsCard'>
            
            <div className='IconContainer'>    

                <div className='IconStats'>
                <ion-icon name="checkmark-circle-outline" size='large'></ion-icon>
                </div>
                <div className='TextStats'>
                <h5>Seguro residência</h5>
                <p className='StatsCardText'> O seguro residencial é uma forma de proteger o seu imóvel contra diversos tipos de imprevistos.</p>

                </div>
            </div>
            </div>

           
        </div>

        <div className='SecondContent'>
                <img src={statsImg} alt="" />
        </div>
    </div>


    <div className='CardsBottom'>
        <div className='BotCards start'>
            <h3>+20 Anos de experiencia</h3>
            <p>Estamos no mercado a 25 anos, tornando sonhos em realidade</p>
        </div>

        <div className='BotCards'>
        <h2>+10 Sedes</h2>
        <p>Temos mais de 10 pontos fisicos para melhor te atender.</p>
        </div>

        <div className='BotCards'>
        <h2>+150 corretores</h2>
        <p>Temos mais de 150 profissionais para te atender da melhor forma</p>


        </div>
        </div>

        <div className='StatsBanner'>
            <h1>Venha realizar seu sonho</h1>
            <p>Saiba mais sobre as propriedades mais procuradas da semana</p>
            <button className='BtnBanner'>Fale conosco</button>


        </div>

        

    </div>
  )
}

export default Stats