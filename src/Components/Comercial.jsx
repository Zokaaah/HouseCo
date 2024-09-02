import React from "react";
import "../assets/comercial.css";
import comercialIMG from "../assets/images/comercialImg.png";

const Comercial = () => {
  return (
    <div className="ComercialContent animate__animated animate__fadeIn">
      <div className="TextArea">
        <h3>Imóveis em locais privilegiados</h3>
        <p>
          Imóveis Exclusivos: Um novo patamar de sofisticação. Descubra uma
          seleção cuidadosamente curada de imóveis de alto padrão, perfeitos
          para quem busca o que há de mais exclusivo no mercado imobiliário. Com
          acabamentos impecáveis e localizações privilegiadas, nossos imóveis
          oferecem o máximo em conforto e elegância.
        </p>
        
        <button className="TalkButton">Fale conosco</button>
      </div>

      <div className="ImageArea animate__animated animate__fadeInRight">
        <img src={comercialIMG} alt="" />
      </div>
    </div>
  );
};

export default Comercial;
