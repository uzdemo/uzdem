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
  const kayanSatirlar = document.querySelectorAll(".line");
  kayanSatirlar.forEach((satir) => {
  const kutular = satir.querySelector(".slidingLineArea");
  const kutuKontrolleri = satir.querySelector(".slidingLineControls");
  const kutuKontrolSol = satir.querySelector(".lineControl.prev");
  const kutuKontrolSag = satir.querySelector(".lineControl.next");

  let kutuIndex = 0;
  let kutuGenislik = kutular.querySelector(".box").offsetWidth;

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

    kutular.style.transform = `translateX(-${kutuIndex * (kutuGenislik + 10)}px)`;
  }

  kaydir();
});

