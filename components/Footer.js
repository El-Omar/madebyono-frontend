import React from 'react';
import { Container } from '../styles/components/footerStyles';

const Footer = () => {

  return (
    <Container>
      <div className="footer__logo">
        <img src='/assets/img/logo.png' alt="Logo" className="footer__logoImg"/>
        2021 - Designing values for brands
      </div>
      <ul className="socialMedia">
        <a target="_blank" href="https://www.linkedin.com/in/yoshideschrijver" className="socialMedia__link">Ln</a>
        <a target="_blank" href="https://www.instagram.com/madebyono" className="socialMedia__link">Ig</a>
        <a target="_blank" href="https://www.facebook.com/madebyono" className="socialMedia__link">Fb</a>
        <a target="_blank" href="https://www.behance.net/YoshiOno" className="socialMedia__link">Be</a>
      </ul>
      <div className="rights">
        &copy; 2021 Yoshi Ono all rights reserved.
      </div>
    </Container>
  );
};

export default Footer;