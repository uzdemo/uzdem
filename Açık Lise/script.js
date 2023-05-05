const slideContainer = document.querySelector('.sliding-box-container');
const slides = Array.from(document.querySelectorAll('.sliding-box'));
const boxControl = document.querySelector('.box-control');
const nextBtn = document.querySelector('.next-box');
const prevBtn = document.querySelector('.prev-box');

let currentSlide = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let slideWidth = slideContainer.offsetWidth / 3;
const slidesToShow = 3;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img');
  slideImage.addEventListener('dragstart', (e) => e.preventDefault());

  slide.addEventListener('mousedown', mousedown);
  slide.addEventListener('mouseup', mouseup);
  slide.addEventListener('mouseleave', mouseup);
  slide.addEventListener('mousemove', mousemove);
});

function mousedown(event) {
  startPos = event.clientX;
  isDragging = true;

  animationID = requestAnimationFrame(animation);
  slideContainer.classList.add('grabbing');
}

function mouseup() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentSlide < slides.length - slidesToShow) {
    currentSlide += 1;
  }

  if (movedBy > 100 && currentSlide > 0) {
    currentSlide -= 1;
  }

  setPositionByIndex();

  slideContainer.classList.remove('grabbing');
}

function mousemove(event) {
  if (isDragging) {
    const currentPosition = event.clientX;
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slideContainer.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentSlide * -slideWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}

function slideForward() {
  if (currentSlide >= slides.length - slidesToShow) return;
  currentSlide++;
  setPositionByIndex();
}

function slideBackward() {
  if (currentSlide <= 0) return;
  currentSlide--;
  setPositionByIndex();
}

nextBtn.addEventListener('click', slideForward);
prevBtn.addEventListener('click', slideBackward);