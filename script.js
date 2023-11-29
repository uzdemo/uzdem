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
    const kutuGenislik = kutular.querySelector(".kutu").offsetWidth + 20; // Kutu genişliği ve kenar boşluğu
    const kutuSayisi = kutular.querySelectorAll(".kutu").length;

    kutuKontrolSol.addEventListener("click", function () {
      kaydir(-1);
    });

    kutuKontrolSag.addEventListener("click", function () {
      kaydir(1);
    });

    function kaydir(adim) {
      kutuIndex += adim;

      if (kutuIndex < 0) {
        kutuIndex = kutuSayisi - 1;
      } else if (kutuIndex >= kutuSayisi) {
        kutuIndex = 0;
      }

      const kaydirmaMesafe = -kutuIndex * kutuGenislik;
      kutular.style.transform = `translateX(${kaydirmaMesafe}px)`;
    }
  });