import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";

// data
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Leaf",
    demo: "https://www.figma.com/proto/bCbUTmpixoDVgyl7d2n6XJ?node-id=0%3A1",
  },
  {
    id: 2,
    image: IMG2,
    title: "Leaf",
    demo: "https://www.figma.com/proto/wYbD8ApZllopqeXXaVrarr?node-id=0%3A1",
  },
  {
    id: 3,
    image: IMG3,
    title: "Leaf",
    demo: "https://www.figma.com/proto/5WydNSXKen4kLqZFhtkNJf?node-id=0%3A1",
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
