import React, { useEffect } from "react";
import Skills from "./Skills";
import userPhoto from "../assets/image/fondo-blanco.png";
import "./styles/About.css";
import CV from "../assets/cv/Gustavo_Morales_CV.pdf";

const About = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={userPhoto} alt="user avatar" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h1 className="about-me">
              <span className="about-description font-500">Sobre Mí</span>
            </h1>
            <div>
              <p className="about-description">
                ¡Hola! Soy Gustavo Mauricio Morales, Ingeniero en Telecomunicaciones, Software Engineer y estudiante avanzado de Ciencia de Datos e Inteligencia Artificial.
              </p>

              <p className="about-description">
                Con más de 13 años de trayectoria integral en el ecosistema IT y la industria de la tecnología, me he especializado en diseñar, construir y modernizar soluciones de software de alto impacto. 
                Mi perfil combina sólidas bases en infraestructura y redes con la pasión por el desarrollo full stack y la innovación impulsada por inteligencia artificial.
              </p>

              <h2 className="about-me">
                <span className="about-description font-500">
                  Mi Enfoque Profesional
                </span>
              </h2>

              <ul className="about-description">
                <li><p className="about-description">Desarrollo Full Stack & Arquitectura Backend: Cuento con vasta experiencia liderando y participando en proyectos para grandes organizaciones (como Epam-Neoris, Banco Macro y Grupo Clarín). Mi especialidad incluye arquitecturas sólidas con Java (Spring Boot, Jakarta EE) y Python (Flask, Web2py), además del desarrollo frontend con React.js y Angular.</p></li>
                <li><p className="about-description">Modernización de Sistemas Heredados: Tengo experiencia práctica resolviendo desafíos técnicos de gran escala, como la migración de aplicaciones legacy empresariales (de IBM WebSphere/Java EE a Java 21 y Jakarta EE 10 en servidores WildFly), refactorización de código, reestructuración de seguridad (Elytron/LDAP) y actualización de patrones de logging.</p></li>
                <li><p className="about-description">DevOps & Infraestructura: Mi fondo en redes y telecomunicaciones me permite conectar el desarrollo con la infraestructura de forma natural. Manejo entornos de contenedorización (Docker, Podman), integración continua (Jenkins, GitLab CI/CD) y administración de servidores Linux.</p></li>
                <li><p className="about-description">Ciencia de Datos e Inteligencia Artificial: Actualmente complemento mi experiencia profesional con la Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial. Aplico estas capacidades tanto para el análisis cuantitativo como para optimizar el ciclo de vida del software mediante herramientas de asistencia basada en IA (como GitHub Copilot)</p></li>
              </ul>

              <h2 className="about-me">
                <span className="about-description font-500">
                  Mi Filosofía de Trabajo
                </span>
              </h2>

              <p className="about-description">
                Me apasiona el aprendizaje continuo, la resolución pragmática de problemas y la escritura de código limpio y mantenible. Mi objetivo es conectar el mundo de las telecomunicaciones, la ingeniería de software y los datos para construir productos escalables, seguros y eficientes.
              </p>              
            </div>
            <hr size="8px" color="white" />
            <h2 className="about-me">
              <span className="about-description font-500">
                ¿Qué puedo hacer?
              </span>
            </h2>
            <br />
            <h3 className="about-me">
              <span className="about-description font-500">
                Back-End & Arquitectura de Software
              </span>
            </h3>

            <ul className="about-description">
                <li><p className="about-description">Diseño y desarrollo de APIs & Microservicios: Construcción de arquitecturas backend robustas, escalables y seguras utilizando Java (Spring Boot) y Python (Flask, Web2py).</p></li>
                <li><p className="about-description">Modernización y migración de sistemas legacy: Transición de aplicaciones complejas heredadas (Java EE / WebSphere) hacia estándares modernos como Java 21 y Jakarta EE 10 (WildFly), refactorizando código, migrando dependencias (javax.* a jakarta.*) y actualizando sistemas de autenticación y logging.</p></li>
                <li><p className="about-description">Integración de servicios y BDD: Conexión con APIs REST, SOAP/WSDL, servicios externos (SAP, pasarelas) y diseño/optimización de bases de datos relacionales (MySQL, SQL) con ORMs como Hibernate.</p></li>
            </ul>

            <h3 className="about-me">
              <span className="about-description font-500">
                Front-End & Experiencia de Usuario
              </span>
            </h3>
            <ul className="about-description">
              <li><p className="about-description">Desarrollo de interfaces dinámicas y SPA: Creación de aplicaciones web modernas, reactivas y componentes reutilizables utilizando React.js y Angular.</p></li>
              <li><p className="about-description">Maquetación e integración responsive: Implementación de interfaces intuitivas integrando frontend con servicios RESTful, utilizando JavaScript moderno (ES6+), HTML5, CSS3 y maquetación web adaptativa.</p></li>
              <li><p className="about-description">Mantenimiento y evolución de interfaces: Adaptación de aplicaciones web existentes (PHP, jQuery, AJAX) hacia tecnologías o estándares más actuales sin interrumpir el servicio.</p></li>
            </ul>

            <h3 className="about-me">
              <span className="about-description font-500">
                DevOps, Infraestructura e Inteligencia Artificial
              </span>
            </h3>
            <ul className="about-description">
              <li><p className="about-description">Contenedorización y despliegue: Creación y gestión de entornos de desarrollo y producción aislados con Docker y Podman, gestionando variables de entorno y health checks.</p></li>
              <li><p className="about-description"></p>Pipelines de CI/CD: Automatización de flujos de integración y despliegue continuo con Jenkins y GitLab CI/CD.</li>
              <li><p className="about-description"></p>Aceleración del desarrollo con IA: Integración de asistentes de Inteligencia Artificial (GitHub Copilot) en el ciclo de vida del desarrollo para agilizar tareas de refactorización, optimización y generación de código.</li>
            </ul>
            
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack cv">
                <a
                  id="btn-donwload-cv"
                  className="btn btn--download btn-donwload"
                  href={CV}
                  download="Gustavo_Morales_CV"
                >
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </React.Fragment>
  );
};

export default About;
