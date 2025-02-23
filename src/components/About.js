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
                Hola, mi nombre es Gustavo Morales, Full Stack Developer.
              </p>

              <p className="about-description">
                Egresado del Instituto Universitario de la Policía Federal Argentina
                con el título de Ingeniero en Telecomunicaciones. Cuento con más de trece años
                de experiencia en el campo de IT y las telecomunicaciones. A lo largo de mi
                carrera, he trabajado en diversas empresas, ocupando distintos roles. 
                Actualmente, me desempeño como Desarrollador Full Stack en una compañía
                internacional, Neoris.
              </p>

              <p className="about-description">
                La comunicación y el trabajo en equipo es para mí esencial para
                poder crecer como desarrollador. Soy proactivo y metódico,
                siempre busco nuevos retos y me adapto fácilmente a los cambios,
                estoy abierto a aprender nuevas tecnologías y lenguajes.
              </p>

              <p className="about-description">
                Técnologías: Java, Spring boot, python, HTML, CSS, JavaScript, React JS/React Native, Next
                JS, TypeScript, Bootstrap, SQL, PostgreSQL, Figma, Git.
              </p>
            </div>
            <hr size="8px" color="white" />
            <h2 className="about-me">
              <span className="about-description font-500">
                ¿Qué puedo hacer?
              </span>
            </h2>
            <br />
            <h3 className="about-me center font-500">Front-End</h3>
            <p className="about-description">
              Como desarrollador frontend, tengo experiencia en el manejo de
              HTML y CSS, además del manejo de frameworks y liberías,
              especialmente React JS. He trabajado en proyectos
              de escala mediana y grandes, implementando soluciones de código
              eficientes, trabajado con arquitecturas de software escalables y
              fácilmente mantenibles.
            </p>
            <br />
            <h3 className="about-me center font-500">Back-End</h3>
            <p className="about-description">
              Utilizando Java con Spring boot, python con Flask , puedo crear
              rutas para APIs REST, protegerlas e implementar bases de datos SQL. 
              De igualmanera he trabajado con arquitecturas de software escalables
              y mantenibles, implementando módulos manteniendo separadas las distintas
              capas de un proyecto.
            </p>
            <p className="about-description">
              He trabajado en proyectos medianos y grandes, desde su
              planteamiento a su ejecución final, teniendo cada día la
              oportunidad de aprender cada día acerca de como ayudar al cliente
              a desarrollar su producto deseado resolviendo cualquier problema
              presentado. He tenido la oportunidad de trabajar en el desarrollo
              de aplicaciones bancarias, empleando las mejores prácticas,
              escribiendo código limpio, legible y mantenible, siempre teniendo
              en mente optimizar al máximo el rendimiento del prouducto final.
            </p>

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
