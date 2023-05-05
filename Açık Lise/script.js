const kutular = document.querySelector(".sliding-box-container");
const kutuKontrolleri = document.querySelector(".box-control");
const kutuKontrolSol = document.querySelector(".box-control .prev-box");
const kutuKontrolSag = document.querySelector(".box-control .next-box");

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

  kutular.style.transform = `translateX(-${kutuIndex * (kutuGenislik + 10)}px)`;
}

kaydir();