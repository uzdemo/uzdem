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

const kayanSatirlar = document.querySelectorAll(".satir");

kayanSatirlar.forEach((satir) => {

  const kutular = satir.querySelector(".yatay-duzlem");
  const kutuKontrolSol = satir.querySelector(".onceki");
  const kutuKontrolSag = satir.querySelector(".sonraki");

  let kutuIndex = 0;
  let kutuGenislik = kutular.querySelector(".kutu").offsetWidth;

  kutuKontrolSol.addEventListener("click", () => {
    kutuIndex--;
    kaydir();
  });

  kutuKontrolSag.addEventListener("click", () => {
    kutuIndex++;
    kaydir();
  });

  function kaydir() {
    if (kutuIndex < 0) {
      kutuIndex = 0;
    } else if (kutuIndex > kutular.children.length - 1) {
      kutuIndex = kutular.children.length - 1;
    }

    kutular.style.transform = `translateX(-${kutuIndex * (kutuGenislik + 20)}px)`;
  }

  kaydir();
});