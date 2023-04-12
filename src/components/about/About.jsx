import React from "react";
import "./about.css";
import Me from "../../assets/portfolioicon-2.png";

import { FaAward } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Fresher</h5>
              <small>6+Month Training</small>
            </article>

            <article className="about__card">
              <GiCoffeeCup className="about__icon" />
              <h5>Cup of coffee</h5>
              <small>5000+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>05+Projects</small>
            </article>
          </div>
          <p>
            As a recent graduate in UI/UX design, I am eager to apply my skills
            and passion for creating beautiful and functional digital
            experiences. I am excited to bring my creativity and fresh
            perspective to a team that values user-centered design and
            collaboration. I have a solid foundation in design principles, user
            research, wireframing, prototyping, and visual design, and I am
            committed to staying up-to-date with the latest design trends and
            technologies. I am eager to learn from experienced designers and
            contribute my enthusiasm and hard work to create impactful and
            innovative digital solutions.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
