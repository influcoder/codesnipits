const countdownElement = document.getElementById("countdown");
const newYearText = document.getElementById("newYearText");
let timeLeft = 10;

const interval = setInterval(() => {
  timeLeft -= 1;
  countdownElement.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(interval);
    countdownElement.style.display = "none";
    document.getElementById("loader").style.display = "none";
    newYearText.style.display = "block";
    createFireworks();
  }
}, 1000);

function getRandomColor() {
  const colors = ["#FF5733", "33FF57", "3357FF", "FF33F6", "F3FF33", "33FFF3"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createFireworks() {
  setInterval(() => {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.background = `radial-gradient(circle, ${getRandomColor()}, transparent)`;
    document.body.appendChild(firework);

    const x = Math.random() * window.innerWidth;
    const y = newYearText.getBoundingClientRect().top - Math.random() * 300;
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;

    for (let i = 0; i < 120; i++) {
      const spark = document.createElement("div");
      spark.className = "spark";
      spark.style.background = getRandomColor();
      spark.style.setProperty("--dx", Math.random() * 2 - 1);
      spark.style.setProperty("--dy", Math.random() * 2 - 1);
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      document.body.appendChild(spark);

      setTimeout(() => spark.remove(), 1500);
    }
    setTimeout(() => firework.remove(), 1500);
  }, 300);
}
