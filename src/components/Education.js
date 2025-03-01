import React, { useEffect } from "react";
import "./styles/Education.css";

const Education = () => {
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
      <section id="education" className="s-about target-section">
        <div className="row">
          <div className="column large-9 tab-12 s-about__content">
            <h1 className="education-me">
              <span className="education-description font-500">Formación académica, cursos y certificaciones</span>
            </h1>
            <div>
              <h2 className="education-me">
                <span className="education-description font-500">
                Técnico Superior en Ciencias de Datos e Inteligencia Artificial
                </span>
              </h2>
              <p className="education-description">
                03/2023 - En curso | Instituto de formación técnica superior 24 (IFTS24). Tecnicatura Superior en Ciencias de Datos e Inteligencia Artificial.
              </p>
              <h2 className="education-me">
                <span className="education-description font-500">
                Ingeniero en telecomunicaciones
                </span>
              </h2>
              <p className="education-description">
              03/2010 - 03/2023 | Instituto Universitario de la Policía Federal Argentina (IUPFA). Ingeniería en Telecomunicaciones.
              </p>
              <h2 className="education-me">
                <span className="education-description font-500">
                Bachiller con orientación en gestión y administración de pymes
                </span>
              </h2>
              <p className="education-description">
                03/2001 - 12/2002 | Instituto Federal Nicolás Avellaneda (IFNA). Bachiller con orientación en gestión y administración de pymes.
              </p>              
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Education;
