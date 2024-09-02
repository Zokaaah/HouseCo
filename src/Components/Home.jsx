import React, { useEffect, useState } from "react";
import "../assets/home.css";
import "animate.css";

import banner from "../assets/images/image1.png";

import AutoPlay from "../Components/AutoPlay";
import Comercial from "./Comercial";
import Properties from "./Properties";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="ContentBody">
      <div className="container-content">
        <div className="TextContent animate__animated animate__fadeIn">
          <h3 className="TextTitle">Encontre seu imóvel dos sonhos</h3>
          <p>
            HouseCo: Seu lar, nossa prioridade. Com anos de experiência no
            mercado imobiliário, a HouseCo se destaca por oferecer soluções
            personalizadas e seguras para a realização do seu sonho da casa
            própria. Conte com nossa equipe de especialistas para encontrar o
            imóvel ideal e realizar uma negociação tranquila e transparente.
          </p>

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
          <button className="BtnContact">Fale com especialista</button>
        </div>

        <div className="ImageContent animate__animated animate__fadeInRight">
          <img className="Banner" src={banner} alt="Banner" />
        </div>
      </div>

      <div>
        {/* COMPONENTES HOME */}
        <AutoPlay />
        <Comercial />
        <Properties />
        <Stats />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
