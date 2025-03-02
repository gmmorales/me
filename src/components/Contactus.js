import React, { useEffect } from "react";
import "./styles/Contactus.css";
import Form from "./Form";
import gmailStiker from "../assets/image/gmail.png";
// import phoneStiker from "../assets/image/1220365_whatsapp_chat_communication_message_phone_icon.png";
import githubStiker from "../assets/image/github (3).png";
import gitlabStiker from "../assets/image/gitlab.png";
import linkedinStiker from "../assets/image/linkedin.png";
// import telegranStiker from "../assets/image/telegram-logo.png";
import twitterStiker from "../assets/image/twitter.png";
// import torreStiker from "../assets/image/logo-torre-invertido.png";
import ContactNetwork from "./ContactNetwork";
// const cellPhone =
  // "https://api.whatsapp.com/send/?phone=584249501974&text&app_absent=0";
const githubLink = "https://github.com/gmmorales";
const gitlabLink = "https://gitlab.com/gmmorales";
const linkedinLink = "https://www.linkedin.com/in/ing-gustavo-mauricio-morales-77193022/";
// const telegramLink = "https://t.me/dbriceno";
const twitterLink = "https://x.com/GustavoLepton";
// const torreLink = " https://torre.co/dbriceno10?s=hWuAmyFOFx";

const Contactus = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScrollToTop()
  }, [])


  return (
    <section id="contact" className="s-contact target-section">
      <div className="row s-contact__header">
        <div className="column large-12">
          <h3 className="section-header-allcaps">
            <span className="black-background">{/*Say Hello*/}Contáctame</span>
          </h3>
        </div>
      </div>
      <div className="row s-contact__content">
        <div className="column large-7 medium-12">
          <h4 className="huge-text">
            <span className="black-background">
              {/* Let's start a new project together, I want to collaborate to
                materialize that idea into a successful project. */}
              Si requiere asistencia técnica o consultoría, puede contactarme a través
              de mis redes sociales o dejarme un mensaje.
            </span>
          </h4>
          <Form />
        </div>
        <div className="column large-4 medium-12">
          <div className="row contact-infos">
            <div
              className="column large-12 medium-6 tab-12"
              id="ContactNetwork-Container"
            >
              <div className="contact-block">
                <ContactNetwork
                  stiker={gmailStiker}
                  alt="gmail-Stiker"
                  title="Correo Electrónico"
                  header="Email"
                  linkName="gustavom.morales@gmail.com"
                />
                <ContactNetwork
                  stiker={linkedinStiker}
                  alt="linkedin-Stiker"
                  title="Linkedin"
                  header="Linkedin"
                  href={linkedinLink}
                  target="_blank"
                  linkName="Gustavo Morales"
                />
                <ContactNetwork
                  stiker={githubStiker}
                  alt="github-Stiker"
                  title="Github"
                  header="Github"
                  href={githubLink}
                  target="_blank"
                  linkName="gmmorales"
                />
                <ContactNetwork
                  stiker={gitlabStiker}
                  alt="gitlab-Stiker"
                  title="Gitlab"
                  header="Gitlab"
                  href={gitlabLink}
                  target="_blank"
                  linkName="gmmorales"
                />
                <ContactNetwork
                  stiker={twitterStiker}
                  alt="twitter-Stiker"
                  title="Twitter"
                  header="Twitter"
                  href={twitterLink}
                  target="_blank"
                  linkName="@GustavoLepton"
                />
                {/* <ContactNetwork
                  stiker={phoneStiker}
                  alt="phone-Stiker"
                  title="WhatsApp"
                  header="WhatsApp"
                  href={cellPhone}
                  target="_blank"
                  linkName="Enlace al Chat"
                /> */}
                {/* <ContactNetwork
                  stiker={telegranStiker}
                  alt="telegram-Stiker"
                  title="Telegram"
                  header="Telegram"
                  href={telegramLink}s
                  target="_blank"
                  linkName="@dbriceno"
                /> */}
                {/* <ContactNetwork
                  stiker={torreStiker}
                  alt="torre-Stiker"
                  title="Torre"
                  header="Torre"
                  href={torreLink}
                  target="_blank"
                  linkName="dbriceno10"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
