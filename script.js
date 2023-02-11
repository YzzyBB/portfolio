const images = document.querySelectorAll('.slider-container img');
let current = 0;

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}

function startSlide() {
  reset();
  images[0].classList.add('active');
}

function slideLeft() {
  reset();
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  images[current].classList.add('active');
}

function slideRight() {
  reset();
  current++;
  if (current === images.length) {
    current = 0;
  }
  images[current].classList.add('active');
}

startSlide();

const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);

const slider = document.querySelector('.slider');

slider.addEventListener('click', function(event) {
  if (event.clientX < slider.offsetWidth / 2) {
    slideLeft();
  } else {
    slideRight();
  }
});
