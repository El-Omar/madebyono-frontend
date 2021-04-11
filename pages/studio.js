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
                <strong>Innovation</strong>, <strong>Dedication</strong> and <strong>Interdependency</strong> are 
                the 3 main pillars upon which my brand stands. 
                I am dedicated to provide a <strong>solution </strong> and 
                work interdependend with fellow creatives and 
                entrepreneurs to deliver <strong>high-end</strong> products. Im an 
                eternal student striving to improve as an individual 
                and a creative innovator designing <strong>sustainable</strong> products. 
                Prioritising <strong>emotional relevancy</strong> and <strong>clear communication</strong> creating <strong>impact</strong>. 
                My goal is to provide both relevant and creative solutions that meet the 
                objectives with a <strong>human centric</strong> approach. <strong className="contact"><Link href="/contact"><a>Contact me</a></Link></strong> and experience my full-service.
              </p>
            </article>
          </div>

          <div className="w-25">
            <article className="skills rellax" data-rellax-speed="5">
              <header className="skills__header">
                <h2 className="skills__title">Skills</h2>
              </header>
              <ul className="skills__content">
                <li className="skills__content__item">Brand Identities</li>
                <li className="skills__content__item">Print Design</li>
                <li className="skills__content__item">UI/UX Design</li>
                <li className="skills__content__item">Art &amp; Illustration</li>
                <li className="skills__content__item">Motion Graphics</li>
                <li className="skills__content__item">Front-end Development</li>
                <li className="skills__content__item">Video editing</li>
                <li className="skills__content__item">Photo retouching</li>
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