const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentPosition = 0;

nextBtn.addEventListener('click', () => {
  currentPosition -= 800;
  if (currentPosition < -2400) {
    currentPosition = 0;
  }
  slides.style.left = currentPosition + 'px';
});

prevBtn.addEventListener('click', () => {
  currentPosition += 800;
  if (currentPosition > 0) {
    currentPosition = -2400;
  }
  slides.style.left = currentPosition + 'px';
});
