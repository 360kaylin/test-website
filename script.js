function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// Slider Logic
let currentSlide = 0;
const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");

function showSlide(index) {
  const width = slides[0].clientWidth + 20;
  slider.style.transform = `translateX(-${index * width}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Konami Code Easter Egg
let konamiCode = [38,38,40,40,37,39,37,39,66,65];
let inputSequence = [];

document.addEventListener('keydown', (e) => {
  inputSequence.push(e.keyCode);
  if (inputSequence.length > konamiCode.length) {
    inputSequence.shift();
  }
  if (inputSequence.toString() === konamiCode.toString()) {
    document.getElementById("easter-egg").style.display = "flex";
  }
});

function closeEgg() {
  document.getElementById("easter-egg").style.display = "none";
}
