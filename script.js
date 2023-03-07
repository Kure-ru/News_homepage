const menuBar = document.querySelector('#nav__bar')
const iconMenu = document.querySelector('#icon--menu')
const iconClose = document.querySelector('#icon--menu--close')
const darkFilter = document.querySelector('#darken--bg')

iconMenu.addEventListener('click', openMenu)
iconClose.addEventListener('click', closeMenu)

function openMenu() {
    menuBar.classList.add('menu--open')
    darkFilter.classList.add('dark--bg')
}

function closeMenu() {
    console.log('close')
    menuBar.classList.remove('menu--open')
    darkFilter.classList.remove('dark--bg')
}

//Slideshow

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

  var index = 0, time = 3000;
  slides[index].classList.add('active');  
  
  setInterval( () => {
    slides[index].classList.remove('active');
    
    //Go over each slide incrementing the index
    index++;
    
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}