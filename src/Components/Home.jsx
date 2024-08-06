import React, { useEffect, useState } from 'react';
import '../assets/home.css';
import banner from '../assets/images/image1.png';

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
          <div>
            <input type="text" />
            <button className='searchBtn'>Pesquise</button>
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