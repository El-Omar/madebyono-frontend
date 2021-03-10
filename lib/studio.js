export default () => {
  let animReq;
  
  const init = () => {
    animateOnScroll();
  };
  
  const animateOnScroll = () => {
    animReq = window.requestAnimationFrame(animateOnScroll);

    const $video = document.querySelector('.studio__video__wrap');
    const $visionHeader = document.querySelector('.vision__header');
    const $visionContent = document.querySelector('.vision__content');
    const $softwareHeader = document.querySelector('.passion__header');
    const $skillsHeader = document.querySelector('.skills__header');
    const $skillsItems = document.querySelectorAll('.skills__content__item');

    if (!$video || !$visionHeader || !$visionContent || !$softwareHeader || !$skillsHeader) return;

    if (!$video.classList.contains("animated")) {
      $video.classList.add('animated');
    }

    if (isInView($visionHeader) && !$visionHeader.classList.contains("animated")) {
      $visionHeader.classList.add('animated');
      $visionContent.classList.add('animated');
    }

    if (isInView($skillsHeader) && !$skillsHeader.classList.contains("animated")) {
      $softwareHeader.classList.add('animated');
      $skillsHeader.classList.add('animated');
      $skillsItems.forEach(skill => skill.classList.add('animated'));
    }
    
    if ([$video, $visionHeader, $softwareHeader, $skillsHeader]
      .filter(p => p.classList.contains('animated')).length === 4) {
      window.cancelAnimationFrame(animReq);
    }
  };
  
  const isInView = el => {
    const bounds = el.getBoundingClientRect();
    
    return (
      bounds.top >= 0 && 
      bounds.y <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  init();
};