import React, { useEffect } from "react";
import logoGithub from "../assets/image/github (3).png";
import logoGitlab from "../assets/image/gitlab.png";
import logoLinkedin from "../assets/image/linkedin.png";
import logoTwitter from "../assets/image/x.png";
import HeroButton from "./HeroButton";
import HeroSocial from "./HeroSocial";
import "./styles/Hero.css";
const linkedinLink = "https://www.linkedin.com/in/ing-gustavo-mauricio-morales-77193022/";
const gihubLink = "https://github.com/gmmorales";
const gitlabLink= "https://gitlab.com/gmmorales"
const twitterLink = "https://x.com/GustavoLepton";

const Hero = () => {

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
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg rellax" data-rellax-speed={-7} />
      <div className="row s-hero__content">
        <div className="column">
          <div className="s-hero__content-about">
            <h1>
              <span className="font-500">Gustavo Morales</span>
            </h1>
            <h3>
              <span>Telecomunication engineer ▪︎ Data Scientist ▪︎ Jr full stack developer</span>              
              <br />
              <br />
              <span>| Java | Python | JavaScript | React JS | Node | MySQL | PostgreSQL | SCRUM | Spring Boot |</span>
            </h3>
            <div className="s-hero__content-social">
              <HeroSocial
                href={linkedinLink}
                src={logoLinkedin}
                alt="logo de linkedin"
                title="LinkedIn"
              />
              <HeroSocial
                href={gihubLink}
                src={logoGithub}
                alt="logo de github"
                title="Github"
              />
              <HeroSocial
                href={gitlabLink}
                src={logoGitlab}
                alt="logo de gitlab"
                title="Gitlab"
              />
              <HeroSocial
                href={twitterLink}
                src={logoTwitter}
                alt="logo de telegram"
                title="Twitter"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-hero__scroll links">
        <HeroButton
          path="/contact"
          // text="Hire Me"
          text="Contáctame"
        />
        <HeroButton
          path="/portfolio"
          //text="Explore Me"
          text="Proyectos"
        />
      </div>
    </section>
  );
};

export default Hero;
