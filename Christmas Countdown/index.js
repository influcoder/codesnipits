function updateCountdown() {
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25); //December 25

  if (now > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const diff = christmas - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Fireworks {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.particles = [];
    this.colors = ["#FF5733", "#FFBD33", "#75FF33", "#33FFF0", "#DA33FF"];
    this.createParticles();
  }

  createParticles() {
    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50;
      const speed = Math.random() * 3 + 2;

      this.particles.push({
        x: this.x,
        y: this.y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        radius: Math.random() * 3 + 1,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        alpha: 1,
      });
    }
  }

  draw() {
    this.particles.forEach((particle) => {
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(particle.x + particle.dx * 2, particle.y + particle.dy * 2);
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  update() {
    this.particles.forEach((particle) => {
      particle.x += particle.dx;
      particle.y += particle.dy;
      particle.alpha -= 0.01;
    });
    this.particles = this.particles.filter((p) => p.alpha > 0);
  }
}

const fireworks = [];
setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  fireworks.push(new Fireworks(x, y));
}, 500);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((firework, index) => {
    firework.draw();
    firework.update();
    if (firework.particles.length === 0) {
      fireworks.splice(index, 1);
    }
  });
  requestAnimationFrame(animate);
}
animate();

// Thank You
// Happy Merry Christmas
// And
// Happy New Year
