const slider = document.getElementById("slider");
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = sliderWrapper.getElementsByTagName("img");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const dotsWrapper = document.querySelector('.slider-dots');

const slideWidth = slides[0].clientWidth;
const slidesToShow = 1;
const slidesToScroll = 1;
let slideIndex = 0;

// Slayt gösteriminde sona gelindiğinde veya başa dönüldüğünde yapılacak işlemleri içeren fonksiyon
function checkIndex() {
  if (slideIndex < 0) {
    slideIndex = slides.length - slidesToShow;
  } else if (slideIndex >= slides.length - slidesToShow + 1) {
    slideIndex = 0;
  }
}

// Slider'ın görüntüsünü güncelleyen fonksiyon
function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  for (let i = 0; i < dotsWrapper.children.length; i++) {
    dotsWrapper.children[i].classList.remove('active');
  }
  dotsWrapper.children[slideIndex].classList.add('active');
}

// Sol ve sağ oklara tıklama olayını dinleyen fonksiyon
function handleArrowClick(direction) {
  if (direction === 'prev') {
    slideIndex -= slidesToScroll;
  } else {
    slideIndex += slidesToScroll;
  }
  checkIndex();
  updateSlider();
}

// Noktalara tıklama olayını dinleyen fonksiyon
function handleDotClick(dotIndex) {
  slideIndex = dotIndex;
  updateSlider();
}

// Sol ve sağ oklara tıklama olayını dinleme
prevButton.addEventListener('click', () => handleArrowClick('prev'));
nextButton.addEventListener('click', () => handleArrowClick('next'));

// Noktalara tıklama olayını dinleme
for (let i = 0; i < dotsWrapper.children.length; i++) {
  dotsWrapper.children[i].addEventListener('click', () => handleDotClick(i));
}

// Slider'ın otomatik olarak kaydırılmasını sağlayan fonksiyon
function autoSlide() {
  slideIndex += slidesToScroll;
  checkIndex();
  updateSlider();
}

setInterval(autoSlide, 5000);