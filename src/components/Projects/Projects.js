import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import beautySalon from "../../Assets/Projects/beauty-salon.png";
import emotion from "../../Assets/Projects/emotion.png";
import gym from "../../Assets/Projects/gym.png";
import personalWeb from "../../Assets/Projects/personal-web.png";
import suicide from "../../Assets/Projects/suicide.png";
import fixPoint from "../../Assets/Projects/fix-point.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aqui hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personalWeb}
              isBlog={false}
              title="Sitio Web Personal"
              description="Sitio personal donde ofrezco servicios de desarrollo de landing pages modernas para negocios."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://oscaredudev.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fixPoint}
              isBlog={false}
              title="Fix Point"
              description="Tienda online para una empresa de soluciones tecnológicas, con catálogo y contacto directo por WhatsApp."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.fixpoint.site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Sitio web para gimnasio"
              description="Diseñado para gimnasios modernos que deseen mostrar sus servicios, planes, precios y contacto de forma atractiva y profesional."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://level-gym-v01.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beautySalon}
              isBlog={false}
              title="Sitio web para salón de belleza"
              description="Diseñado para salones de belleza, con diseño moderno, adaptado al logo y colores del negocio. Optimizado para móviles y pensado para que los clientes encuentren fácilmente el salón en línea."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://divinasbeautystudio.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
