export default () => {
  let animReq;
  
  const init = () => {
    animateOnScroll();
  };
  
  const animateOnScroll = () => {
    animReq = window.requestAnimationFrame(animateOnScroll);

    const $subtitle = document.querySelector('.contact__subtitle');
    const $title = document.querySelector('.contact__title');
    const $btn = document.querySelector('.contact__btn');
    const $formTitle = document.querySelector('.contact-footer h2');
    const $formFields = document.querySelectorAll('.form-group');

    if (!$subtitle || !$title || !$btn || !$formTitle) return;

    if (isInView($subtitle) && !$subtitle.classList.contains("animated")) {
      $subtitle.classList.add('animated');
    }

    if (isInView($title) && !$title.classList.contains("animated")) {
      $title.classList.add('animated');
    }
    if (isInView($btn) && !$btn.classList.contains("animated")) {
      $btn.classList.add('animated');
    }

    if (isInView($formTitle) && !$formTitle.classList.contains("animated")) {
      $formTitle.classList.add('animated');
      $formFields.forEach(field => field.classList.add('animated'));
    }
    
    if ([$subtitle, $title, $btn, $formTitle]
      .filter(p => p.classList.contains('animated')).length === 4) {
      window.cancelAnimationFrame(animReq);
    }
  };
  
  const isInView = el => {
    const bounds = el.getBoundingClientRect();
    
    return (
      bounds.top >= 0 && 
      bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  init();
};