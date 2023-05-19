var prevButton = document.getElementById('prevBtn');
var nextButton = document.getElementById('nextBtn');
var sliderContainer = document.querySelector('.slider');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
var slideWidth = sliderContainer.offsetWidth / 2;
var totalSlides = sliderContainer.querySelectorAll('img').length;

prevButton.addEventListener('click', function() {
  clearInterval(slideInterval);
  sliderContainer.scrollLeft -= slideWidth;
  slideInterval = setInterval(nextSlide, 5000);
});

nextButton.addEventListener('click', function() {
  clearInterval(slideInterval);
  sliderContainer.scrollLeft += slideWidth;
  slideInterval = setInterval(nextSlide, 5000);
});

function nextSlide() {
  sliderContainer.scrollLeft += slideWidth;

  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
    sliderContainer.scrollLeft = 0;
  }
}