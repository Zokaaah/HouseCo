import React, { useEffect, useState } from 'react';
import '../assets/home.css';
import banner from '../assets/images/image1.png';
import { Button } from 'react-bootstrap';



const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>

      <div className='container-content'>
        <div className='TextContent'>
          <h3 className='TextTitle'>Encontre seu imóvel dos sonhos</h3>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</p>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</p>
          <div className="search-bar">
            <input type="text" placeholder="Pesquisar" className="search-input" />
            <button className="search-button">Pesquisar</button>
          </div>
          <div className="subitens">
            <div>
              <h4>+9000</h4>
              <p>Imóveis disponiveis</p>
            </div>

            <div>
              <h4>+1500</h4>
              <p>Negócios fechados</p>
            </div>

            <div>
              <h4>+5000</h4>
              <p>Clientes satisfeitos</p>
            </div>

            
          </div>
        </div>

        <div className={`ImageContent ${fadeIn ? 'fade-in' : ''}`}>
          <img className='Banner' src={banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;