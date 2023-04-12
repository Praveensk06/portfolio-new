import React, { useState, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  function handleClick() {
    setButtonText("Message sent!");

    setTimeout(() => {
      setButtonText(buttonText);
    }, 3000);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_yc371uh",
      "template_4mgrg4d",
      form.current,
      "asBxc-JVxWKmwH1SK"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mrkesav7@gmail.com</h5>
            <a href="mailto:mrkesav7@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>mrkesav7</h5>
            <a
              href="https://instagram.com/mrkesav7?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>9025646556</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919025646556"
              target="_blank"
            >
              Click here to Send me a message
            </a>
          </article>
        </div>
        {/* end form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
