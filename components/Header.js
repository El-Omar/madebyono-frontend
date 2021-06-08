import { useEffect, useRef, useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';

const Header = ({ setBodyOverlay }) => {
  const $navBtn = useRef(null);
  const $pageNav = useRef(null);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const onBtnClick = () => {
    setIsHeaderOpen(open => open = !open);
  }

  Router.events.on('routeChangeStart', () => setIsHeaderOpen(false)); 

  useEffect(() => {
    setBodyOverlay(isHeaderOpen);

    if (isHeaderOpen) {
      // set button to focus
      $navBtn.current.classList.add(`nav__button-active`);
      // show menu
      $pageNav.current.classList.add(`active`);
    } else {
      $navBtn.current.classList.remove(`nav__button-active`);
      $pageNav.current.classList.remove(`active`);
    }

  }, [isHeaderOpen, $pageNav]);
  
    return (
      <div className="container container--header">
        <header className="page__header">
          <h1 className="page__title pointer"> 
            <Link href="/">
              <a className="logo">
                {/* <img className="logo" src="/assets/img/logo.png" alt="Logo" /> */}
                yoshi ono
              </a>
            </Link>
          </h1> 

          <div className="nav__btns">
            <div className="nav__button" 
              ref={el => $navBtn.current = el}
              onMouseOver={({ currentTarget }) => currentTarget.classList.add(`nav__button-active`)} 
              onMouseOut={({ currentTarget }) => !isHeaderOpen && currentTarget.classList.remove(`nav__button-active`)}
              onClick={onBtnClick}>
              <div className="nav-x"></div>
              <div className="nav-y"></div>
            </div>
            <Link href="/cart"><a className="cart__btn"></a></Link>
          </div>
        </header>

        <nav className="page__nav" ref={el => $pageNav.current = el}>

          <div className="container">
            <div className="col-row">
              <div className="w-33">
                <ul className="pages page__nav__list">
                  <li className="navigation__link page__link-projects">
                    <Link href="/projects">
                      <a className="link-wrap">
                        <span className="link-title color--blue">Stunning</span> <span className="page-name">Projects</span>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation__link page__link-we-are">
                    <Link href="/studio">
                      <a className="link-wrap">
                        <span className="link-title color--rose">Creative</span> <span className="page-name">Studio</span>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation__link page__link-blog">
                    <Link href="/blog">
                      <a className="link-wrap">
                        <span className="link-title color--purple">Design</span> <span className="page-name">Blog</span>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation__link page__link-shop">
                    <Link href="http://www.startupkits.shop" target="_blank">
                      <a className="link-wrap">
                        <span className="link-title color--yellow">Handy</span> <span className="page-name">Shop</span>
                      </a>
                    </Link>
                  </li>
                  <li className="navigation__link page__link-contact">
                    <Link href="/contact">
                      <a className="link-wrap">
                        <span className="link-title color--gray">Friendly</span> <span className="page-name">Contact</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-33 emails__wrapper">
                <ul className="emails page__nav__list">
                  <li className="info-label">
                    Join us <br />
                    <a href="mailto:yoshi@madebyono.com?subject=Career&cc=career@madebyono.com" className="email-adress">career@madebyono.com</a>
                  </li>
                  <li className="info-label">
                    Creative <br />
                    <a href="mailto:yoshi@madebyono.com?subject=Creative&cc=creative@madebyono.com" className="email-adress">creative@madebyono.com</a>
                  </li>
                  <li className="info-label">
                    Development <br />
                    <a href="mailto:yoshi@madebyono.com?subject=Development&cc=development@madebyono.com" className="email-adress">development@madebyono.com</a>
                  </li>
                </ul>
              </div>

              <div className="w-33 emails__wrapper">
                <ul className="contact-info page__nav__list">
                  <li className="info-label">
                    General <br />
                    <a href="mailto:yoshi@madebyono.com?subject=Info - Madebyono" className="email-adress">yoshi@madebyono.com</a>
                  </li>

                  <li className="adress info-label">
                    Brussels, Belgium <br />
                    <a href="tel:0032484624639">(+32) 484 62 46 39</a>
                  </li>

                  <li className="info-label social-media">
                    Social Media <br />
                    <a className="social-media__links" rel="noreferer" target="_blank" href="https://www.linkedin.com/in/yoshideschrijver">In</a>
                    <a className="social-media__links" rel="noreferer" target="_blank" href="https://www.instagram.com/madebyono">Ig</a>
                    <a className="social-media__links" rel="noreferer" target="_blank" href="https://www.facebook.com/madebyono">Fb</a>
                    <a className="social-media__links" rel="noreferer" target="_blank" href="https://www.behance.net/YoshiOno">Be</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>


        </nav>
      </div>
    );
}

export default Header;
