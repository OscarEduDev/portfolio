import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Soy, <span className="purple">Oscar Pillajo</span>{" "}
            desarrollador web especializado  en crear <span className="purple">landing pages modernas que venden</span>.<br />
            <br />
            Ayudo a negocios a tener presencia online con páginas simples, rápidas y efectivas desde {" "}
            <span className="purple">$30 USD</span> {" "} usando tecnologías como
            <span className="purple"> React, Angular, Nextjs y Nodejs</span>.<br />
            <br />Actualmente estoy enfocado en ofrecer soluciones para emprendedores, marcas personales y pequeñas empresas que quieren páginas funcionales sin complicarse.{" "}
            {/* <span className="purple">Mathematics and Computing</span> from{" "} */}
            {/* <span className="purple">BIT Mesra</span>. */}
            {/* <br /> */}
            {/* <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired: */}
          </p>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
