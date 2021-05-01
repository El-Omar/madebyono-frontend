import { useEffect, useRef } from 'react';
import frames from "../components/frames";
import traits from "../components/traits";
import Image from 'next/image';
import Head from "next/head";
import getRandomArbitrary from "../lib/getRandomArbitrary";

const Home = () => {
  const $title = useRef(null);
  const $subtitle = useRef(null);
  const $socialmedia = useRef([null]);
  
  const $hotspots = useRef([]);
  const $frames = useRef({});
  const $tempFrame = useRef(null);
  const $trait = useRef(null);
  const $rectangles = useRef([]);

  useEffect(() => {
    // Initial animation
    $title.current.classList.add(`element-shown`);
    $subtitle.current.classList.add(`element-shown`);
    $socialmedia.current.forEach(el => el.classList.add(`element-shown`));
  }, [$title, $subtitle, $socialmedia]);

  useEffect(() => {
    // Hotspot event handler
    $hotspots.current.forEach(spot => {
      spot.addEventListener('mouseover', hotspotHandler);
      spot.addEventListener('click', hotspotHandler);
    })
  }, [$hotspots, $frames]);

  const hotspotHandler = ({ currentTarget: spot }) => {
    // Get ID
    const { id } = spot?.dataset;
    if (!id || id === 0) return;

    // Set trait
    $trait.current.innerHTML = traits().get(+id);

    // Animate rectangles
    $rectangles.current.forEach(rectangle => {
      const randomScale = getRandomArbitrary(.7, 1.2).toFixed(2);
      const randomXPosition = Math.floor(getRandomArbitrary(-20, 30));
      rectangle.style.transform = `scaleX(${randomScale}) translateX(${randomXPosition}%)`;
    });
    
    // Hide all frames first
    Object.getOwnPropertyNames($frames.current).forEach(key => {
      $frames.current[key].classList.add(`invisible`)
    });

    // Get correct frame
    const $frame = $frames.current[+id];

    if ($frame) {
      $tempFrame.current.classList.remove(`invisible`);
      $tempFrame.current.classList.add(`negative`);
      $frame.classList.remove(`invisible`);
      $frame.classList.add(`negative`);
      $frame.style.animationName = `glitch`;
      
      setTimeout(() => {
        $tempFrame.current?.classList.add(`invisible`);
        $frame.style.animationName = ``;
        $frame.classList.remove(`negative`);
      }, 200);
    }
  }

  return (

    <div className="home__container">
      <Head>
        <title>Home - Madebyono</title>
      </Head>
        <div className="hotspot__wrapper on-top">
          {
            new Array(5).fill("row").map((_, i) => (
                <div className="hotspot__row" key={i}>
                  {
                    new Array(5).fill("hotspot").map((__, y) => {
                      const spotId = (i * 5) + y + 1;
                      return (
                        <div className={`hotspot${frames()[spotId] ? '' : '--empty'}`} 
                          data-id={frames()[spotId] ? spotId : 0} key={y}
                          ref={el => frames()[spotId] ? ($hotspots.current.push(el)) : null}></div>
                        )
                    })
                  }
                </div>
              ))
          }
        </div>

        <aside className="social-media-side on-top">
          <a rel="noreferer"
            className="social-media-side__links social-media__links pointer" 
            target="_blank" href="https://www.linkedin.com/in/yoshideschrijver"
            ref={el => $socialmedia.current[0] = el}>In</a>
          <a rel="noreferer"
            className="social-media-side__links social-media__links pointer" 
            target="_blank" href="https://www.instagram.com/madebyono"
            ref={el => $socialmedia.current[1] = el}>Ig</a>
          <a rel="noreferer"
            className="social-media-side__links social-media__links pointer" 
            target="_blank" href="https://www.facebook.com/madebyono"
            ref={el => $socialmedia.current[2] = el}>Fb</a>
          <a rel="noreferer"
            className="social-media-side__links social-media__links pointer" 
            target="_blank" href="https://www.behance.net/YoshiOno"
            ref={el => $socialmedia.current[3] = el}>Be</a>
        </aside>

        <main className="home main__container">
          <section className="welcome">
            <header className="welcome__header">
              <h1 className="welcome__title" ref={el => $title.current = el}>Hi I'm Yoshi Ono</h1>
              <strong className="welcome__subtitle" ref={el => $subtitle.current = el}>
                <strong className="trait" ref={$trait}>Freelance Creative</strong>
              </strong>
            </header>

            <div className="frame__wrap">
              <div className="frame-container" ref={el => $tempFrame.current = el}>
                <img className="frame--current" src={`/assets/img/frames/13.png`} width="1850" height="1500" />
              </div>
              {
                Object.getOwnPropertyNames(frames()).map((name, i) => (
                  <div className="frame-container invisible" key={name} ref={el => $frames.current[name] = el}>
                    <img className="frame" src={frames()[name]} width="1850" height="1500" />
                  </div>
                ))
              }
            </div>
            <div ref={el => $rectangles.current[0] = el} className="color-rectangle pink"></div>
            <div ref={el => $rectangles.current[1] = el} className="color-rectangle yellow"></div>
            <div ref={el => $rectangles.current[2] = el} className="color-rectangle blue"></div>
          </section>
        </main>
    </div>
  );
}

export default Home;