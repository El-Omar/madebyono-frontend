import React from 'react';
import { Container } from '../styles/components/footerStyles';

const Footer = () => {

  return (
    <Container>
      <div className="container">
        <div className="col-row">
          <div className="w-33">
            <div className="footer__logo">
              <img src='/assets/img/logo.png' alt="Logo" className="footer__logoImg" />
              {new Date().getFullYear()} - Aligning design to visions.
            </div>
          </div>
          <div className="w-33">
            <ul className="socialMedia">
              <a target="_blank" href="https://www.linkedin.com/in/yoshideschrijver" className="socialMedia__link">Ln</a>
              <a target="_blank" href="https://www.instagram.com/madebyono" className="socialMedia__link">Ig</a>
              <a target="_blank" href="https://www.facebook.com/madebyono" className="socialMedia__link">Fb</a>
              <a target="_blank" href="https://www.behance.net/YoshiOno" className="socialMedia__link">Be</a>
            </ul>
          </div>
          <div className="w-33">
            <div className="rights">
              &copy; {new Date().getFullYear()} Yoshi Ono all rights reserved.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
