import { useEffect } from "react";
import { Container } from '../styles/components/studioStyle';
import animation from "../lib/studio";
import Link from "next/link";

const Studio = () => {

  useEffect(() => {
    animation();
  });
  
  return (
    <Container className="main__container">
      <article className="studio__video__wrap">
        <header className="studio__video__header hidden">
          <h2 className="studio__video__title">Studio Video</h2>
        </header>
        <div className="video__container">
          {/* <video className="studio__video" autoPlay loop controls poster={require('../../assets/img/poster.jpg')}>
            <source src={''} type="video/mp4" />
          </video> */}
        </div>
      </article>

      <section className="studio__container">
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
      </section>
    </Container>
  );
};

export default Studio;