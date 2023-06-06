/* Slayt Kodları */
const previousButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const slidingArea = document.querySelector('.slidingArea');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);
const slideWidth = slidingArea.querySelector('img').offsetWidth + 10; // 5 piksel sağ kenar boşluğu + 5 piksel sol kenar boşluğu
const totalSlides = slidingArea.querySelectorAll('img').length;

previousButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  slidingArea.scrollLeft -= slideWidth;
  slideInterval = setInterval(nextSlide, 5000);
});

nextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  slidingArea.scrollLeft += slideWidth;
  slideInterval = setInterval(nextSlide, 5000);
});

function nextSlide() {
  slidingArea.scrollLeft += slideWidth;

  if (currentSlide >= totalSlides - 1) {
    currentSlide = 0;
    slidingArea.scrollLeft = 0;
  } else {
    currentSlide++;
  }
}

/* Satır Kaydırma Kodları */
//...