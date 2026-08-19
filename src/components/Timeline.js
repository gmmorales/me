import React, { useEffect } from "react";
import "./styles/Timeline.css";

const Timeline = () => {
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
      <section id="timeline" className="s-about target-section">
        <div className="row">
          <div className="column large-9 tab-12 s-about__content">
            <h1 className="timeline-me">
              <span className="timeline-description font-500">Experiencia laboral</span>
            </h1>
            <div>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Epam-Neoris | Software Engineer / AI Engineer
                </span>
              </h2>
              <h3 className="timeline-me">
                <span className="timeline-description font-250">
                  09/2020 – Presente | Buenos Aires, Argentina
                </span>
              </h3>
              <ul className="timeline-description">
                <li>
                  <p className="timeline-description">Proyecto Araucana: Migración de aplicaciones web heredadas
                    (IBM WebSphere / Java EE) a Java 21 y Jakarta EE 10 (WildFly 32). Actualización de namespaces
                    (javax.* a jakarta.*), migración del sistema de autenticación a Elytron/LDAP y actualización de
                    logging a SLF4J/Logback. Contenedorización con Docker/Docker Compose, integración
                    de servicios SOAP/WSDL (SAP XI, validadores, SMS) y aceleración de refactorización
                    con GitHub Copilot.
                  </p>
                </li>
                <li>
                  <p className="timeline-description">Proyecto Banco Macro (Onboarding): Desarrollo de servicios backend
                     y componentes frontend utilizando Java 11/17, Spring Boot, Hibernate, JUnit 4, React.js y Angular
                  </p>
                </li>
                <li>
                  <p className="timeline-description">Proyecto AGEA (Grupo Clarín): Desarrollo backend y automatización con Java (6/8/11)
                    y Python 3 (Flask, Web2py, Tkinter).
                  </p>
                </li>
                <li>
                  <p className="timeLine-description">DevOps & Metodologías: Configuración de pipelines en Jenkins/GitLab,
                    manejo de contenedores Docker/Podman y gestión del flujo de trabajo con Git, Bitbucket, Stash y Jira.
                  </p>
                </li>
              </ul>
              
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Daitek | Desarrollador Jr. / Ingeniero de Postventa
                </span>
              </h2>
              <h3 className="timeline-me">
                <span className="timeline-description font-250">
                  03/2019 – 09/2020 | Buenos Aires, Argentina
                </span>
              </h3>
              <ul className="timeline-description">
                <li>
                  <p className="timeline-description">Desarrollo web y aplicaciones con Java 8, PHP 7, Python 3, 
                    Spring Boot, WEB2PY, AJAX, jQuery y SQL.</p>
                </li>
                <li>
                  <p className="timeline-description">Implementación de buenas prácticas de código con SonarQube, control de versiones en 
                    Git/GitLab/GitHub y contenedores Docker/Podman.</p>
                </li>
                <li>
                  <p className="timeline-description">Soporte postventa e integración para tecnologías Witbe y 
                    Redshift Network.</p>
                </li>
              </ul>              
              
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Hynet | Network Engineer / Security Analyst
                </span>
              </h2>
              <h3 className="timeline-me">
                <span className="timeline-description font-250">
                  01/2016 – 03/2019 | Buenos Aires, Argentina 
                </span>
              </h3>
              <ul className="timeline-description">
                <li>
                  <p className="timeline-description">Soporte técnico especializado y 
                    postventa en infraestructura de redes y seguridad.</p>
                </li>
                <li>
                  <p className="timeline-description">Administración de equipamiento Juniper EX Series, Brocade ServerIron
                     ADX, Bluecoat ProxySG e Infoblox Trinzic DDI.</p>
                </li>
              </ul>
              
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Tecnovoz | Soporte Técnico Especializado en Telefonía IP
                </span>
              </h2>
              <h3 className="timeline-me">
                <span className="timeline-description font-250">
                  03/2013 – 01/2016 | Buenos Aires, Argentina 
                </span>
              </h3>
              <ul className="timeline-description">
                <li>
                  <p className="timeline-description">Instalación, configuración y soporte de la plataforma Approach
                     y Gateways IP (Asterisk/Telular).</p>
                </li>
                <li>
                  <p className="timeline-description">Resolución de incidencias técnicas en redes TDM e IP, 
                    capacitación a clientes y gestión de tickets vía Vtiger CRM.</p>
                </li>
              </ul>

              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Giansol | Consultor Externo / Desarrollador Web
                </span>
              </h2>
              <h3 className="timeline-me">
                <span className="timeline-description font-250">
                  01/2013 – Presente | Buenos Aires, Argentina 
                </span>
              </h3>
              <ul className="timeline-description">
                <li>
                  <p className="timeline-description">Desarrollo y mantenimiento de soluciones web utilizando PHP, 
                    JavaScript, HTML5, CSS, MySQL y entorno LAMP.</p>
                </li>                
              </ul>
              
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Experiencia Previa en Redes y Telecomunicaciones (NOC)
                </span>
              </h2>              
              <ul className="timeline-description">
                <li>
                  <p className="timeline-description">Claro (04/2012 - 06/2012): Operador NOC Empresarial 
                    (Monitoreo de redes IP/ATM/SDH/Wireless y resolución de incidencias).</p>
                </li>
                <li>
                  <p className="timeline-description">Huawei (01/2011 - 04/2012): Operador NOC para Proyecto Movistar
                     (Monitoreo de red 3G/GSM y dispatching). </p>
                </li>
                <li>
                  <p className="timeline-description">Metrotel & Asignet (2008 - 2011): Operador NOC / Help Desk /
                     Redes (Administración de Asterisk, Nagios, Cacti, Linux y equipos Cisco). </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Timeline;
