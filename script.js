// ===============================
// KLEM – Fondo premium con inercia
// ===============================

let currentX = 50;
let currentY = 50;
let targetX = 50;
let targetY = 50;
const pos = { x: 50, y: 50 };
const target = { x: 50, y: 50 };

const isMobile = window.innerWidth < 768;
const ease = isMobile ? 0.025 : 0.06;



// Movimiento del mouse
document.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth) * 100;
  targetY = (e.clientY / window.innerHeight) * 100;

  const hue = Math.round((targetX + targetY) * 1.4);

  document.documentElement.style.setProperty(
    "--klem-glow",
    isMobile
      ? `hsla(${hue + 250}, 70%, 85%, 0.25)`
      : `hsla(${hue + 260}, 85%, 80%, 0.45)`
  );
});

// Animación con inercia
function animate() {
  currentX += (targetX - currentX) * ease;
  currentY += (targetY - currentY) * ease;

  document.documentElement.style.setProperty("--x", `${currentX}%`);
  document.documentElement.style.setProperty("--y", `${currentY}%`);

  requestAnimationFrame(animate);
}

animate();

// Al salir → vuelve suave al centro
document.addEventListener("mouseleave", () => {
  targetX = 50;
  targetY = 50;

  document.documentElement.style.setProperty(
    "--klem-glow",
    "rgba(199, 184, 255, 0.35)"
  );
});

window.addEventListener("scroll", () => {
  const scroll =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);

  let glow;

  if (scroll < 0.33) {
    glow = "rgba(212, 147, 250, 0.35)"; // lila suave
  } else if (scroll < 0.66) {
    glow = "rgba(199, 184, 255, 0.35)"; // lavender
  } else {
    glow = "rgba(230, 212, 196, 0.35)"; // nude editorial
  }

  document.documentElement.style.setProperty("--klem-glow", glow);
});


document.addEventListener("mousemove", (e) => {
  target.x = (e.clientX / window.innerWidth) * 100;
  target.y = (e.clientY / window.innerHeight) * 100;
});

function animate() {
  pos.x += (target.x - pos.x) * ease;
  pos.y += (target.y - pos.y) * ease;

  document.documentElement.style.setProperty("--x", `${pos.x}%`);
  document.documentElement.style.setProperty("--y", `${pos.y}%`);

  requestAnimationFrame(animate);
}

animate();
window.addEventListener("scroll", () => {
  const scroll =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);

  const hueLila = 260 + scroll * 25;
  const hueYellow = 48 - scroll * 10;

  document.documentElement.style.setProperty(
    "--galaxy-lila",
    `hsla(${hueLila}, 95%, 70%, 0.75)`
  );

  document.documentElement.style.setProperty(
    "--galaxy-yellow",
    `hsla(${hueYellow}, 100%, 70%, 0.65)`
  );
});