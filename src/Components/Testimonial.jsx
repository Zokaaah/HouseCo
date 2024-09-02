import React from "react";
import "../assets/testimonial.css";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";

import Rate from "./Rate";

const Testimonial = () => {
  return (
    <div>
      <h1>Feedbacks</h1>
      <div className="TestimonialContainer">
        <div className="TestimonialCard">
          <Rate />
          <p>
            "A parceria com a HouseCo tem sido fundamental para o sucesso de
            nossos empreendimentos. A equipe da HouseCo possui um profundo
            conhecimento do mercado imobiliário e uma rede de contatos sólida, o
            que nos permite comercializar nossos imóveis de forma rápida e
            eficiente".
          </p>

          <div className="Cliente">
            <img className="iconFeedback" src={img1} alt="" />
            <h5>Aldenaire</h5>
          </div>
        </div>

        <div className="TestimonialCard">
          <Rate />
          <p>
            "A HouseCo é um parceiro estratégico para a Real Estate. A empresa
            possui uma carteira de clientes qualificada e um histórico de
            pagamentos em dia, o que facilita a aprovação de financiamentos. A
            parceria com a HouseCo nos permite oferecer aos nossos clientes
            soluções completas para a aquisição de imóveis, aumentando a
            satisfação dos nossos clientes e fortalecendo a nossa marca."
          </p>

          <div className="Cliente">
            <img className="iconFeedback" src={img5} alt="" />
            <h5>Real Estate</h5>
          </div>
        </div>

        <div className="TestimonialCard">
          <Rate />
          <p>
            "A HouseCo é uma imobiliária que valoriza a segurança dos seus
            clientes. A parceria com a HouseCo nos permite oferecer aos seus
            clientes soluções completas em seguros residenciais, garantindo a
            proteção do maior bem de seus clientes. A equipe da HouseCo é muito
            profissional e sempre está disposta a colaborar para oferecer o
            melhor atendimento aos nossos clientes em comum."
          </p>

          <div className="Cliente">
            <img className="iconFeedback" src={img3} alt="" />
            <h5>Salford</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
