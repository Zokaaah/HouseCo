import React from "react";
import "../assets/Footer.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="FooterContainer">
        <div className="FooterFC">
          <div>
            <img src={logo} className="logo" alt="" />
          </div>
          <p className="FooterText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="FooterIcons">
            <ion-icon
              name="logo-facebook"
              color="white"
              size="large"
            ></ion-icon>
            <ion-icon
              name="logo-instagram"
              color="white"
              size="large"
            ></ion-icon>
            <ion-icon
              name="logo-whatsapp"
              color="white"
              size="large"
            ></ion-icon>
            <ion-icon name="logo-twitter" color="white" size="large"></ion-icon>
          </div>
        </div>

        <div className="FooterSC">
          <h4>Links uteis</h4>
          <br />
          <p>Sobre nós</p>
          <p>Contatos</p>
          <p>Propriedades</p>
          <p>Parcerias</p>
        </div>

        <div className="FooterTC">
          <h4>Ajuda</h4>
          <br />

          <p>Suporte ao cliente</p>
          <p>Termos e condições</p>
          <p>Politica de privacidade</p>
        </div>

        <div className="Footer4C">
          <h4>Onde estamos</h4>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1973529954835!2d-46.6564943!3d-23.5613545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1724279605640!5m2!1spt-BR!2sbr"
            width="300"
            height="250"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
