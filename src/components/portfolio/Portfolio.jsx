import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/codepen-img1.png";
import IMG2 from "../../assets/netflix-img.png";
import IMG3 from "../../assets/food-app-img.png";
import IMG4 from "../../assets/password-generator-img.png";
import IMG5 from "../../assets/product-slider-img.png";
import IMG6 from "../../assets/css-generator-img.png";

// data
const data = [
  {
    id: 1,
    image: IMG1,
    title: "CodePen-Clone",
    github: "https://github.com/Praveensk06/codepen-clone.git",
    demo: "https://codepen-clone-86816.web.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Netflix-Clone",
    github: "https://github.com/Praveensk06/netflix-clone.git",
    demo: "https://relaxed-blini-186d6a.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Food-Delivery-App",
    github: "https://github.com/Praveensk06/food-delivery-app.git",
    demo: "https://fastidious-smakager-01bd34.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Password Generator",
    github: "https://github.com/Praveensk06/Password-Generator.git",
    demo: "https://praveensk06.github.io/Password-Generator/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Product-Slider",
    github: "https://github.com/Praveensk06/Product-Slider.git",
    demo: "https://praveensk06.github.io/Product-Slider/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Css Generator",
    github: "https://github.com/Praveensk06/CSS-Generator.git",
    demo: "https://praveensk06.github.io/CSS-Generator/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
