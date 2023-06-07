/* Slayt Kodları */

// Önceki ve sonraki düğmelerini seçme
const previousButton = document.getElementById('oncekiBtn');
const nextButton = document.getElementById('sonrakiBtn');

// Slayt alanını seçme
const slidingArea = document.querySelector('.kayan-alan');

// Geçerli slaytın indeksi ve slayt geçiş aralığını tanımlama
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

// Slayt genişliği ve toplam slayt sayısını belirleme
const slideWidth = slidingArea.querySelector('img').offsetWidth + 10; // 5 piksel sağ kenar boşluğu + 5 piksel sol kenar boşluğu
const totalSlides = slidingArea.querySelectorAll('img').length;

// Önceki düğmeye tıklama olayı
previousButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  slidingArea.scrollLeft -= slideWidth;
  slideInterval = setInterval(nextSlide, 5000);
});

// Sonraki düğmeye tıklama olayı
nextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  slidingArea.scrollLeft += slideWidth;
  slideInterval = setInterval(nextSlide, 5000);
});

// Bir sonraki slayta geçiş fonksiyonu
function nextSlide() {
  slidingArea.scrollLeft += slideWidth;

  if (currentSlide >= totalSlides - 1) {
    // Eğer son slayta ulaşıldıysa, geçerli slaytı sıfırla ve slayt alanını başa döndür
    currentSlide = 0;
    slidingArea.scrollLeft = 0;
  } else {
    // Aksi halde geçerli slaytın indeksini bir artır
    currentSlide++;
  }
}

/* Satır Kaydırma Kodları */

// Kayan satırları seçme
const kayanSatirlar = document.querySelectorAll(".yeni-eklenen-satir");

kayanSatirlar.forEach((satir) => {
  // Satırdaki kutu alanını, kontrol düğmelerini ve sola ve sağa kaydırma düğmelerini seçme
  const kutular = satir.querySelector(".kayan-satir-alani");
  const kutuKontrolleri = satir.querySelector(".satir-kontrolleri");
  const kutuKontrolSol = satir.querySelector(".onceki");
  const kutuKontrolSag = satir.querySelector(".sonraki");

  let kutuIndex = 0;
  let kutuGenislik = kutular.querySelector(".kutu").offsetWidth;

  // Sol kaydırma düğmesine tıklama olayı
  kutuKontrolSol.addEventListener("click", () => {
    kutuIndex--;
    kaydir();
  });

  // Sağ kaydırma düğmesine tıklama olayı
  kutuKontrolSag.addEventListener("click", () => {
    kutuIndex++;
    kaydir();
  });

  // Kutuları yatay olarak kaydırma fonksiyonu
  function kaydir() {
    if (kutuIndex < 0) {
      // İndeks sınırlarını kontrol etme ve negatif değerleri sıfıra eşitleme
      kutuIndex = 0;
    } else if (kutuIndex > kutular.children.length - 1) {
      // İndeks sınırlarını kontrol etme ve fazla değerleri son kutu indeksiyle sınırlama
      kutuIndex = kutular.children.length - 1;
    }

    // Kutuları yatay olarak kaydırma
    kutular.style.transform = `translateX(-${kutuIndex * (kutuGenislik + 10)}px)`;
  }

  kaydir();
});