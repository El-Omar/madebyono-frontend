export default () => {
  let animReq;
  let didScroll;
  
  const init = () => {
    animateOnScroll();
  };
  
  const animateOnScroll = () => {
    animReq = window.requestAnimationFrame(animateOnScroll);

    const $projects = document.querySelectorAll('.project__wrap');
    const $collabsTitle = document.querySelector('.title--collabs');
    const $projectsTitle = document.querySelector('.title--projects');

    if (!$collabsTitle || !$projectsTitle) return;

    const scrollToElem = document.getElementById(window.location.hash.replace('#', ''));
    if (scrollToElem && !didScroll) {        
      window.scrollTo(0, scrollToElem.getBoundingClientRect().top);
      didScroll = true;
    }

    $projects.forEach(p => {
      if (isInView(p) && !p.classList.contains("animated")) {
        animateProject(p);
      }
    });
    
    if (isInView($collabsTitle) && !$collabsTitle.classList.contains("animated")) {
      $collabsTitle.classList.add("animated");
      $projectsTitle.classList.add("animated");
    }

    if ([...$projects].filter(p => p.classList.contains('animated')).length === $projects.length 
      && $projects.length > 1) {
      window.cancelAnimationFrame(animReq);
    }
  };
  
  const animateProject = project => {
    //get all the elements that will be animated
    const $thumbnail = project.querySelector('.project__thumbnail');
    const $title = project.querySelector('.project__title');
    const $year = project.querySelector('.project__year');
    
    //add classes to the elements if necessary
    $thumbnail.classList.add('animated');
    $title.classList.add('animated');
    $year.classList.add('animated');
    
    //increase the animated elements
    project.classList.add('animated');
  };
  
  const isInView = el => {
    const bounds = el.getBoundingClientRect();
    
    return (
      bounds.top >= 0 && 
      bounds.top - (bounds.height / 2) <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  init();
};