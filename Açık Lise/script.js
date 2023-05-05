const kutular = document.querySelector(".sliding-box-container");
const kutuKontrolleri = document.querySelector(".box-control");
const kutuKontrolSol = document.querySelector(".box-control .prev-box");
const kutuKontrolSag = document.querySelector(".box-control .next-box");

let kutuIndex = 0;
let kutuGenislik = kutular.querySelector(".sliding-box").offsetWidth;

kutuKontrolSol.addEventListener("click", () => {
  kutuIndex = Math.max(0, kutuIndex - 1);
  kaydir();
});

kutuKontrolSag.addEventListener("click", () => {
  kutuIndex = Math.min(kutuIndex + 1, kutular.children.length - 1);
  kaydir();
});

kutular.addEventListener("touchstart", (e) => {
  const ilkDokunma = e.touches[0];
  let x = ilkDokunma.clientX;
  let y = ilkDokunma.clientY;
  let kaydirmayaBasladi = false;

  kutular.addEventListener("touchmove", (e) => {
    const dokunma = e.touches[0];
    let jarakX = x - dokunma.clientX;
    let jarakY = y - dokunma.clientY;

    if (Math.abs(jarakX) > Math.abs(jarakY)) {
      e.preventDefault();

      if (!kaydirmayaBasladi) {
        kaydirmayaBasladi = true;
        if (jarakX > 5) {
          kutuIndex = Math.min(kutuIndex + 1, kutular.children.length - 1);
        } else if (jarakX < -5) {
          kutuIndex = Math.max(0, kutuIndex - 1);
        }
      }

      kaydir();
    } else {
      kaydirmayaBasladi = false;
      y = dokunma.clientY;
    }
  });

  kutular.addEventListener("touchend", (e) => {
    kaydirmayaBasladi = false;
  });
});

function kaydir() {
  kutular.style.transform = `translateX(-${kutuIndex * (kutuGenislik + 10)}px)`;
}

kaydir();