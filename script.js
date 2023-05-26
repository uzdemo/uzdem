var previousButton = document.getElementById('prevBtn');
var nextButton = document.getElementById('nextBtn');
var slidingArea = document.querySelector('.slidingArea');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
var slideWidth = slidingArea.querySelector('img').offsetWidth;
var totalSlides = slidingArea.querySelectorAll('img').length;

previousButton.addEventListener('click', function() {
  clearInterval(slideInterval);
  slidingArea.scrollLeft -= slideWidth;
  slideInterval = setInterval(nextSlide, 5000);
});

nextButton.addEventListener('click', function() {
  clearInterval(slideInterval);
  slidingArea.scrollLeft += slideWidth;
  slideInterval = setInterval(nextSlide, 5000);
});

function nextSlide() {
  slidingArea.scrollLeft += slideWidth;

  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
    slidingArea.scrollLeft = 0;
  }
}