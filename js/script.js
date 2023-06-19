const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderContainer = document.querySelector('.slider-container');
const videoSlides = Array.from(document.querySelectorAll('.video-slide'));
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? videoSlides.length - 1 : currentIndex - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === videoSlides.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

function updateSlider() {
  const slideWidth = videoSlides[currentIndex].offsetWidth;
  sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}