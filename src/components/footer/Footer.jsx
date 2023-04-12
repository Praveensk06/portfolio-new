import React from "react";
import "./footer.css";

import { BsInstagram, BsFacebook } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Kesavan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/mrkesav7?igshid=ZDdkNTZiNTM=">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Kesavan .All rights reservice</small>
      </div>
    </footer>
  );
};

export default Footer;
