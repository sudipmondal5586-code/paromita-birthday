// Typewriter Effect
const text = "Hey Paromita…";
let index = 0;
const speed = 100;

const typewriter = document.getElementById("typewriter");
const subtext = document.getElementById("subtext");
const intro = document.getElementById("intro");
const card = document.getElementById("card");
const finalScreen = document.getElementById("final");

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(type, speed);
  } else {
    setTimeout(() => {
      subtext.classList.remove("hidden");
    }, 500);

    setTimeout(() => {
      intro.classList.add("hidden");
      card.classList.remove("hidden");
      card.classList.add("active");
    }, 2000);
  }
}

type();

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 5,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateConfetti() {
  confettiPieces.forEach(p => {
    p.y += p.d * 0.3;
    if (p.y > canvas.height) p.y = -10;
  });
}

function animateConfetti() {
  drawConfetti();
  updateConfetti();
  requestAnimationFrame(animateConfetti);
}

// Button Click
document.getElementById("surpriseBtn").addEventListener("click", () => {
  card.classList.add("hidden");
  finalScreen.classList.remove("hidden");
  finalScreen.classList.add("active");

  createConfetti();
  animateConfetti();
});
