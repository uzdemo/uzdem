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