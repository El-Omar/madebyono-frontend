export default () => {
  //-- DOM Elements
  const $navBtn           = document.querySelector('.nav__button');
  const $navWrapper       = document.querySelector('.page__nav');
  const $bodyOverlay      = document.querySelector('.body__overlay');
  const $mainContainer    = document.querySelector('.main__container');
  const $navX             = document.querySelector('.nav-x');
  const $navY             = document.querySelector('.nav-y');
  const $hotspotWrapper   = document.querySelector('.hotspot__wrapper');
  const $socialMediaSide  = document.querySelector('.social-media-side');
  const $navLinks         = document.querySelectorAll('.page__link');
  const $pageHeader       = document.querySelector('.page__title');

  //-- VARS
  let isNavOpen = false;

  //-- FUNCTIONS
  const init = () => {
    if (!$navBtn || !$navWrapper || !$navX || !$navY) return;

    $navLinks.forEach(el => el.addEventListener('click', () => {
      onNavClick();
      isNavOpen = false;
      document.querySelector('html').style = "";
    }));

    $navBtn.addEventListener('click', onNavClick);

    //Add the closing event on the logo if the nav is open
    isNavOpen && $pageHeader.addEventListener('click', onNavClick);

    $navBtn.addEventListener('mouseover', onNavHover);
    $navBtn.addEventListener('mouseout', onNavOut);

    $bodyOverlay.style.zIndex = '0';

  };

  //-- EVENT HANDLERS
  const onNavClick = () => {
    const $html = document.querySelector('html');
    isNavOpen = !isNavOpen;

    //scroll animation
    if ($mainContainer) {
      $mainContainer.classList.toggle('main__container-active');
    }

    //disable the hover rotation default animation
    $navBtn.classList.remove('nav__button-active');
    $navWrapper.classList.toggle('page__nav-active');

    if ($bodyOverlay) {
      $bodyOverlay.classList.toggle('body__overlay-active');

      if (!isNavOpen) {
        $bodyOverlay.style.zIndex = '0';
        $bodyOverlay.addEventListener('transitionend', () => {
          $bodyOverlay.style.display = `hidden`
          $html.style = "";
        });
      } else {
        $bodyOverlay.style.zIndex = '15';
        $html.style.overflow = "hidden";
        $bodyOverlay.addEventListener('transitionend', () => {
          $bodyOverlay.style.display = ``
        });
      }
    }

    $navX.classList.toggle('nav-x-active');
    $navY.classList.toggle('nav-y-active');

    $navLinks.forEach(link => {
      if (isNavOpen) link.classList.add('page__link-active');
      else link.classList.remove('page__link-active');
    });

    if ($hotspotWrapper) {
      setTimeout(() => {
        $hotspotWrapper.classList.toggle('on-top');
        $socialMediaSide.classList.toggle('on-top');
      }, 400);
    }
  };

  const onNavHover = () => {
    if (isNavOpen) return;
    $navBtn.classList.add('nav__button-active');
  };
  
  const onNavOut = () => {
    if (isNavOpen) return;
    $navBtn.classList.remove('nav__button-active');
  };

  init();
};