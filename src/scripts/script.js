// Toogle mobile burger nav
const headerBurger = document.getElementById("burger");
const headerMenu = document.getElementById("header-nav");

headerBurger.addEventListener("click", function (e) {
  e.target.classList.toggle("burger-lines-active");
  headerMenu.classList.toggle("navigation-active");
});

// Reverse timer
const targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 2);

const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const currentTime = new Date();

  const remainingTime = targetTime - currentTime;

  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "Time's up!";
    return;
  }

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerText = `${hours}:${minutes}:${seconds}`;
}

// Input phone mask
const phoneInput = document.getElementById("phone-input");

phoneInput.addEventListener("input", function () {
  let value = phoneInput.value.replace(/\D/g, "");

  if (!value.startsWith("380")) {
    value = "380" + value;
  }

  let formattedValue =
    "+" +
    value.substr(0, 2) +
    "(" +
    value.substr(2, 3) +
    ")" +
    value.substr(5, 3) +
    "-" +
    value.substr(8, 2) +
    "-" +
    value.substr(10, 2);

  phoneInput.value = formattedValue;
});

// Get todays date for order
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `Order date: ${day}.${month}.${year}`;
}

const today = new Date();

document.getElementById("order-date").innerText = formatDate(today);
