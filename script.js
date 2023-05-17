/* Slider Sistemi Kodları */
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
  sliderWrapper.style.transform = `translateX(-${slideIndex * (slideWidth + 10)}px)`;
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

/* Kayan Satır Sistemi Kodları */
const kayanSatirlar = document.querySelectorAll(".line");
kayanSatirlar.forEach((satir) => {
  const kutular = satir.querySelector(".sliding-box-container");
  const kutuKontrolleri = satir.querySelector(".box-control");
  const kutuKontrolSol = satir.querySelector(".box-control .prev-box");
  const kutuKontrolSag = satir.querySelector(".box-control .next-box");

  let kutuIndex = 0;
  let kutuGenislik = kutular.querySelector(".sliding-box").offsetWidth;
  let dokunmaX;
  let baslangicX;
  let kutularinYeri;

  kutuKontrolSol.addEventListener("click", () => {
    kutuIndex--;
    kaydir();
  });

  kutuKontrolSag.addEventListener("click", () => {
    kutuIndex++;
    kaydir();
  });

  kutular.addEventListener("touchstart", (e) => {
    const ilkDokunma = e.touches[0];
    dokunmaX = ilkDokunma.clientX;
    baslangicX = dokunmaX;
    kutularinYeri = parseInt(kutular.style.transform.replace("translateX(", "").replace("px)", ""));
  });

  kutular.addEventListener("touchmove", (e) => {
    const sonDokunma = e.touches[0];
    const kaydirmaMesafesi = dokunmaX - sonDokunma.clientX;
    kutular.style.transform = `translateX(${kutularinYeri - kaydirmaMesafesi}px)`;
  });

  kutular.addEventListener("touchend", (e) => {
    const sonDokunma = e.changedTouches[0];
    const kaydirmaMesafesi = baslangicX - sonDokunma.clientX;

    if (kaydirmaMesafesi > kutuGenislik / 4) {
      kutuIndex++;
    } else if (kaydirmaMesafesi < -kutuGenislik / 4) {
      kutuIndex--;
    }

    kaydir();
  });

  function kaydir() {
    if (kutuIndex < 0) {
      kutuIndex = 0;
    } else if (kutuIndex > kutular.children.length - 1) {
      kutuIndex = kutular.children.length - 1;
    }

    kutular.style.transform = `translateX(-${kutuIndex * kutuGenislik}px)`;
  }

  kaydir();
});