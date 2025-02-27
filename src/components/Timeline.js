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
                  Desarrollador full stack jr
                </span>
              </h2>
              <p className="timeline-description">
                Neoris - sept. 2020 - actualidad. Desarrollador en Banco Macro Julio 2024 -
                Actualmente Descripción: Desarrollador en célula externa para el proyecto Onboarding.
                Tareas: Desarrollador Backend en las siguientes tecnologías: Lenguajes de programación: Java 15.
                Frameworks: Spring Boot, Hibernate, JUnit 4.
                Herramientas: Git, Bitbucket, Stash, Jira, Jenkins, contenedores virtuales (Docker/Podman), Postman,
                GitLab. Desarrollador en AGEA 2020 - Marzo 2024 Descripción: Desarrollador para aplicaciones del sector HUB.
                Tareas: Desarrollador Backend en las siguientes tecnologías:
                Lenguajes de programación: Java 6 / Java 8, Python 3, JavaScript, HTML5, CSS3.
                Frameworks: Spring Boot, Hibernate, JUnit 4, Flask, Jinja2, Web2py, Tkinter, ReactJS, jQuery, Bootstrap.
                Herramientas: Git, Bitbucket, Stash, Jira, Jenkins, contenedores virtuales (Docker/Podman),
                uWSGI 2.0, Postman.
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Desarrollador full stack jr
                </span>
              </h2>
              <p className="timeline-description">
                Daitek - mar. 2019 - sept. 2020. Desarrollador Java jr. - Frameworks: Spring boot, Hibernate,
                JUnit 4. Desarrollador Python jr. -
                Frameworks: TkInter, WEB2PY. Herramientas: Git, Sonarqube, Jenkies, Contenedores virtuales
                (Docker/podman), Redmine, postman. Ingeniero de postventa Witbe technologies.
                Redshift Network technologies.
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Hardware Engineer
                </span>
              </h2>
              <p className="timeline-description">
                Hynet S.A. Feb. 2016 - feb. 2019 Network Engineer: Juniper EX Series Ethernet Switches.
                Brocade ServerIron ADX Switches. Security Analyst: Bluecoat ProxySG series.
                Symantec WAN Optimization - PacketShaper: PacketShaper S200/S400/S500.
                Accedian Networks products Infoblox Trinzic DDI Appliances.
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Voip engineer
                </span>
              </h2>
              <p className="timeline-description">
                TecnoVoz S.A. Mar. 2013 - ene. 2016. Soporte técnico especializado en telefonía IP.
                Seguimiento, resolución de reclamos o incidencias técnicas.
                Asistencia técnica en sitio. Manejo del sistema de tickets: Vtiger CRM.
                Instalación, configuración y puesta en marcha de la plataforma Approach.
                Soporte de las aplicaciones Approach. Capacitador técnico. Instalación y
                configuración de Gateways IP (plataforma asterisk). Instalación y
                configuración de Gateways Telular (HG). Análisis, detección de fallas sobre
                telefonía IP / TDM.
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Operador NOC
                </span>
              </h2>
              <p className="timeline-description">
                Claro S.A. Abr. 2012 - jun. 2012. Área: Dirección de Mercado Empresarial NOC Empresarial
                Tecnologías: ATM (Lucent, Alcatel, Cisco , Newbridge ); IP (Cisco, Juniper, Huawei);
                SDH (Alcatel, Huawei, Lucent, Nortel , GPON);
                Wireless (LMDS, Radios PaP Harrys , Huawei , Aimux , Canopy, Wimax D , Wimax E ,
                Wimax 4 Motion, Wi-Fi, WLL , 3G , VSAT) , HFC. Tareas: seguimiento y
                resolución de reclamos o incidencias, coordinación y asistencia
                técnica de mantenimientos para servicios de clientes
                (Internet, RPV, Enlaces transparentes, Lan-to-Lan , Telefonía ).
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Operador NOC
                </span>
              </h2>
              <p className="timeline-description">
                Huawei feb. 2011 - abr. 2012. Ligado al proyecto Movistar. Monitoreo de la Red 3G y
                GSM de Movistar: NOA, SUR, CUYO y ANDINA. Dispatcher.
                Coordinación de asistencia técnica al sitio. Seguimiento de casos.
                Manejo del sistema de gestión de tickets de Movistar, plataforma BPM.
                Manejo del sistema de monitoreo, plataforma SGA.
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Operador NOC
                </span>
              </h2>
              <p className="timeline-description">
                Metrotel jul. 2010 - feb. 2011. Operador NOC / Soporte Corporativo:
                Atención a grandes clientes, resolución de fallas. Monitoreo proactivo de la red,
                nodos y los enlaces corporativos mediante herramientas de administración y alarmas,
                SNMPc Network manager, Cacti. Manejo y administración de equipamiento cisco: Swiches,
                routers. Administración y control de la red SDH, manejo de de multiplexores Asga,
                Chasis de Fibra: Tredent y Asga; Flex, módems ópticos, Raisecom, Alcatel-Lucent y
                Software de gestión. Análisis, control, detección de fallas y cortes de FO
                (fibra óptica). Administración y configuración de Swiches Planet. Monitoreo y
                control de equipos Microtik para enlaces radius. Control de de la red de Banda Ancha
                ADSL, utilización de módems y equipos DSLAM. Instalación y configuración de UPS APC.
                Control de los equipos del Datacenter.
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Operador NOC
                </span>
              </h2>
              <p className="timeline-description">
                Asignet. Oct. 2009 - jul. 2010. Proyecto I-ROUTING: Ruteo de llamadas de celulares a
                través de internet. Operador NOC / Help desk. Soporte Técnico PBX Asterisk.
                Troubleshooting básico y soporte a usuarios. Monitoreo y control de Tramas E1.
                Administración de Equipos GATEWAY-GSM, Servidores LINUX. Control de Tráfico IP.
                Administración y configuración sistema de Monitoreo NAGIOS y CACTI.
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Operador NOC
                </span>
              </h2>
              <p className="timeline-description">
                Asignet. Jun. 2008 - jun. 2009. Operador NOC. Redes. Atención y resolución de fallas.
                Soporte técnico de 2do nivel. Control de datos, Uso de VPNs.
                Configuración de conversores seriales (PBX2NET, EXEMYS).
                Manejo Básico de PBX (Meridiam, Avaya, Ericcson, Asterisk).
                Análisis y diagnósticos de Scripts. Monitoreo de Redes Mediante el sistema Nagios y CACTI.
                Control de servidores.
              </p>
              <h2 className="timeline-me">
                <span className="timeline-description font-500">
                  Auxiliar especializado
                </span>
              </h2>
              <p className="timeline-description">
                NSX SA. oct. 2007 - mar. 2008. Auxiliar Especializado. Sistemas.
                Técnico en programación en informática. Proyecto en el HSBC Arg. Migración de
                usuarios de correo electrónico Lotus Notes. Proyecto en Conarco Arg.
                Actualización de versión de correo electrónico Lotus Notes.
                Capacitación dictada a los usuarios para la utilización de la nueva versión.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Timeline;
