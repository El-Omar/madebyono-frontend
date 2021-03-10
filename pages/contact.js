import React, { useState, useEffect } from "react";
import { Container } from "../styles/components/contactStyle";
import animation from "../lib/contact";

const Contact = () => {

  useEffect(() => {
    animation();
  }, []);

  return (
    <Container className="main__container">
      <div className="contact-intro spacing rellax" data-rellax-speed="-1">
        <strong className="contact__subtitle">
          <strong className="color--purple">A Digital Agency</strong> - Hello
        </strong>

        <h2 className="contact__title">
          We create beautiful digital design and bring your mental creation to life.
        </h2>

        <a className="contact__btn" 
          href="mailto:contact@madebyono.com" 
          target="_blank" rel="noopener noreferrer">
          Mail me
        </a>
      </div>

      <section className="contact-footer spacing">
        <header className="contact-footer__head rellax" data-rellax-speed="0">
          <h2>
            Need help with a project? <br />
            Let's build something together.
          </h2>
        </header>

        <form action="#" className="contact-form" method="post">
          <div className="form-group w-5">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          
          <div className="form-group w-5">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          
          <div className="form-group w-10 mt-20">
            <label htmlFor="note">Note</label>
            <textarea name="note" id="note" cols="30" rows="2" required></textarea>
          </div>

          <div className="form-group w-10 mt-10 submit-wrap">
            <input className="submit" type="submit" value="Send" />
          </div>
        </form>
      </section>
    </Container>
  );
};

export default Contact;