import React from "react";

import { BsLinkedin } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";

import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kesavan-p-218978259" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Praveensk06" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
