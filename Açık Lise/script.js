const kutular = document.querySelector(".sliding-box-container");
const kutuKontrolleri = document.querySelector(".box-control");
const kutuKontrolSol = document.querySelector(".box-control .prev-box");
const kutuKontrolSag = document.querySelector(".box-control .next-box");

let kutuIndex = 0;
let kutuGenislik = kutular.querySelector(".sliding-box").offsetWidth;
let dokunmaX;
let kaydirmaX;
let dokunmaAktif = false;

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
  dokunmaAktif = true;
});

kutular.addEventListener("touchmove", (e) => {
  if (!dokunmaAktif) return;
  const sonDokunma = e.touches[0];
  kaydirmaX = dokunmaX - sonDokunma.clientX;
  kutular.style.transform = `translateX(${-kutuIndex * kutuGenislik - kaydirmaX}px)`;
});

kutular.addEventListener("touchend", () => {
  if (kaydirmaX > 5) {
    kutuIndex++;
  } else if (kaydirmaX < -5) {
    kutuIndex--;
  }
  dokunmaAktif = false;
  kaydir();
});

function kaydir() {
  if (kutuIndex < 0) {
    kutuIndex = 0;
  } else if (kutuIndex > kutular.children.length - 1) {
    kutuIndex = kutular.children.length - 1;
  }
  kutular.style.transition = "transform 0.3s ease-out";
  kutular.style.transform = `translateX(${-kutuIndex * kutuGenislik}px)`;
}

kutular.addEventListener("transitionend", () => {
  kutular.style.transition = "";
});

kaydir();