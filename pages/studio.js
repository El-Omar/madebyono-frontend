import { useEffect, useRef } from "react";
import { Container } from '../styles/components/studioStyle';
import Link from "next/link";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Studio = () => {
  const $studioContent = useRef(null);

  useEffect(() => {
    const $visionHeader = $studioContent.current.querySelector('.vision__header');
    const $visionContent = $studioContent.current.querySelector('.vision__content');
    const $skillsHeader = $studioContent.current.querySelector('.skills__header');
    const $softwareHeader = $studioContent.current.querySelector('.passion__header');
    const $skillsContent = $studioContent.current.querySelectorAll('.skills__content__item');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: $studioContent.current,
        start: "top 90%",
      }
    });

    const showAndTransform = { autoAlpha: 1, translateY: 0, translateX: 0, };
    
    tl.to($visionHeader, showAndTransform)
      .to($visionContent, showAndTransform)
      .to($skillsHeader, showAndTransform)
      .to($softwareHeader, {
        ...showAndTransform,
        delay: -.1
      })
      .to($skillsContent, {
        ...showAndTransform,
        duration: .38,
        stagger: .17
      });

  }, [$studioContent]);
  
  return (
    <Container className="main__container">
      <div className="thumbnail__wrapper">
        <div className="thumbnail thumbnail--9by16 thumbnail--limited">
          <img src="/assets/img/studio.png" />
        </div>
      </div>

      <section className="container" ref={$studioContent}>
        <div className="col-row">
          <div className="w-50">
            <header className="studio__container__header hidden">
              <h1 className="studio__container__title">Studio</h1>
            </header>

            <article className="vision rellax" data-rellax-speed="3">
              <header className="vision__header">
                <h2 className="vision__title">Vision</h2>
              </header>
              <p className="vision__content">
                Hand out your digital obligations so you can <strong>Save time</strong>, <strong>stay effective</strong> and focuson the core of your business. My job is to brand your idea, design your social media content, make the audience resonate and communicate with potential costumers. On a budget? Take at look at <strong className="contact"><Link href="/contact"><a>My Shop</a></Link></strong> for DIY social media kits. These content creation kits are designed professionally and editable in powerpoint.
I am Yoshi Ono, a geeky freelance designer & entrepreneur who is aiming to support and kickstart startups / individuals with a passion for entrepreneurship.
My objective is to help, advice and bring you in contact with other young and valuable partners who can help you with your objective. Don’t hesitate to <strong className="contact"><Link href="/contact"><a>Contact me</a></Link></strong>,
let’s get to work, practice problem solving together and make a change. 
              </p>
            </article>
          </div>

          <div className="w-25">
            <article className="skills rellax" data-rellax-speed="5">
              <header className="skills__header">
                <h2 className="skills__title">Skills</h2>
              </header>
              <ul className="skills__content">
                <li className="skills__content__item">Social Media Content</li>
                <li className="skills__content__item">Logo/Brand Design</li>
                <li className="skills__content__item">UI/UX Webdesign</li>
                <li className="skills__content__item">Illustrations</li>
                <li className="skills__content__item">Artworks</li>
                <li className="skills__content__item">Video editing</li>
                <li className="skills__content__item">Photo retouching</li>
                <li className="skills__content__item">Advertising</li>
              </ul>
            </article>
          </div>

          <div className="w-25">
            <article className="passion rellax" data-rellax-speed="1">
              <header className="passion__header">
                <h2 className="passion__title">Software</h2>
              </header>
              <ul className="skills__content">
                <li className="skills__content__item">Photoshop</li>
                <li className="skills__content__item">Illustrator</li>
                <li className="skills__content__item">InDesign</li>
                <li className="skills__content__item">Premiere Pro</li>
                <li className="skills__content__item">After Effects</li>
                <li className="skills__content__item">Adobe XD</li>
                <li className="skills__content__item">Sketch</li>
                <li className="skills__content__item">Sublime</li>
              </ul>
            </article>
          </div>

        </div>

      </section>
    </Container>
  );
};

export default Studio;
