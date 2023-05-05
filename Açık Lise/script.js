const kutular = document.querySelector(".sliding-box-container");
const kutuKontrolleri = document.querySelector(".box-control");
const kutuKontrolSol = document.querySelector(".box-control .prev-box");
const kutuKontrolSag = document.querySelector(".box-control .next-box");

let kutuIndex = 0;
let kutuGenislik = kutular.querySelector(".sliding-box").offsetWidth;

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
  let x = ilkDokunma.clientX;

  kutular.addEventListener("touchmove", (e) => {
    const dokunma = e.touches[0];
    let jarak = x - dokunma.clientX;

    if (jarak > 5) {
      kutuIndex++;
      kaydir();
      x = dokunma.clientX;
    } else if (jarak < -5) {
      kutuIndex--;
      kaydir();
      x = dokunma.clientX;
    }
  });
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