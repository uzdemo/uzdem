const kutular = document.querySelector(".sliding-box-container");
const kutuKontrolleri = document.querySelector(".box-control");
const kutuKontrolSol = document.querySelector(".box-control .prev-box");
const kutuKontrolSag = document.querySelector(".box-control .next-box");

let kutuIndex = 0;
let kutuGenislik = kutular.querySelector(".sliding-box").offsetWidth;
let dokunmaX;
let kaydirmaX;

const animasyonHizi = 500; // animasyon hızını burada ayarlayabilirsin, milisaniye cinsinden
const gercekciKaydirmaMesafesi = 0.9; // kaydırma mesafesinin gerçekçiliğini burada ayarlayabilirsin, 0 ile 1 arasında bir değer olmalı

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
});

kutular.addEventListener("touchmove", (e) => {
  const sonDokunma = e.touches[0];
  kaydirmaX = dokunmaX - sonDokunma.clientX;
});

kutular.addEventListener("touchend", () => {
  if (kaydirmaX > kutuGenislik * gercekciKaydirmaMesafesi) {
    kutuIndex++;
    kaydir();
  } else if (kaydirmaX < -kutuGenislik * gercekciKaydirmaMesafesi) {
    kutuIndex--;
    kaydir();
  }
});

function kaydir() {
  if (kutuIndex < 0) {
    kutuIndex = 0;
  } else if (kutuIndex > kutular.children.length - 1) {
    kutuIndex = kutular.children.length - 1;
  }

  kutular.style.transition = `transform ${animasyonHizi}ms ease-out`;
  kutular.style.transform = `translateX(-${kutuIndex * (kutuGenislik + 10)}px)`;
}

kutular.addEventListener("transitionend", () => {
  kutular.style.transition = "";
});

kaydir();