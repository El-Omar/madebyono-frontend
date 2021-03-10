import { useEffect, useRef } from 'react';
import frames from "../components/frames";
import Image from 'next/image';

const Home = () => {
  const $title = useRef(null);
  const $subtitle = useRef(null);
  const $socialmedia = useRef([null]);
  
  const $hotspots = useRef([]);
  const $frames = useRef({});
  const $tempFrame = useRef(null);


  useEffect(() => {
    $title.current.classList.add(`element-shown`);
    $subtitle.current.classList.add(`element-shown`);
    $socialmedia.current.forEach(el => el.classList.add(`element-shown`));
  }, [$title, $subtitle, $socialmedia]);

  useEffect(() => {
    $hotspots.current.forEach(spot => {
      spot.addEventListener('mouseover', hotspotHandler);
      spot.addEventListener('click', hotspotHandler);
    })
  }, [$hotspots, $frames]);

  const hotspotHandler = ({ currentTarget: spot }) => {
    const { id } = spot?.dataset;
    if (!id || id === 0) return;

    Object.getOwnPropertyNames($frames.current).forEach(key => {
      $frames.current[key].classList.add(`invisible`)
    });

    const $frame = $frames.current[+id];

    if ($frame) {
      $tempFrame.current.classList.remove(`invisible`);
      $tempFrame.current.classList.add(`negative`);
      $frame.classList.remove(`invisible`);
      $frame.classList.add(`negative`);
      $frame.style.animationName = `glitch`;
      
      setTimeout(() => {
        $tempFrame.current.classList.add(`invisible`);
        $frame.style.animationName = ``;
        $frame.classList.remove(`negative`);
      }, 200)
    }
  }

  return (
    <div className="home__container">
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
                <strong className="trait">Freelance Creative</strong>
              </strong>
            </header>

            <div className="frame__wrap">
              <div className="frame-container" ref={el => $tempFrame.current = el}>
                <Image className="frame--current" src={`/assets/img/frames/13.png`} width="1850" height="1500" />
              </div>
              {
                Object.getOwnPropertyNames(frames()).map((name, i) => (
                  <div className="frame-container invisible" key={name} ref={el => $frames.current[name] = el}>
                    <Image className="frame" src={frames()[name]} width="1850" height="1500" />
                  </div>
                ))
              }
            </div>
            <div className="color-rectangle pink"></div>
            <div className="color-rectangle yellow"></div>
            <div className="color-rectangle blue"></div>
          </section>
        </main>
    </div>
  );
}

export default Home;