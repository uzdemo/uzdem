/* Slayt Kodları */

// Önceki ve sonraki düğmelerini seçme
const previousButton = document.getElementById('oncekiBtn');
const nextButton = document.getElementById('sonrakiBtn');

// Slayt alanını seçme
const slidingArea = document.querySelector('.slayt-alani');

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