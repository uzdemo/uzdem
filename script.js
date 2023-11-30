/* Slayt Kodları */

const previousButton = document.getElementById('oncekiBtn');
const nextButton = document.getElementById('sonrakiBtn');

const slidingArea = document.getElementById('slayt-alani');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

const slideWidth = slidingArea.querySelector('img').offsetWidth + 20; // 10 piksel sağ kenar boşluğu + 10 piksel sol kenar boşluğu
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

const scrollingLines = document.querySelectorAll(".satir");

scrollingLines.forEach((satir) => {
  const boxes = satir.querySelector(".yatay-duzlem");
  const previousButton = satir.querySelector(".onceki");
  const nextButton = satir.querySelector(".sonraki");

    let kutuIndex = 0;
    const boxWidth = boxes.querySelector(".kutu").offsetWidth + 20; // Kutu genişliği ve kenar boşluğu
    const boxCount = boxes.querySelectorAll(".kutu").length;

    previousButton.addEventListener("click", function () {
      kaydir(-1);
    });

    nextButton.addEventListener("click", function () {
      kaydir(1);
    });

    function kaydir(adim) {
      kutuIndex += adim;

      if (kutuIndex < 0) {
        kutuIndex = boxCount - 1;
      } else if (kutuIndex >= boxCount) {
        kutuIndex = 0;
      }

      const kaydirmaMesafe = -kutuIndex * boxWidth;
      boxes.style.transform = `translateX(${kaydirmaMesafe}px)`;
    }
  });