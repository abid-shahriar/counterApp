// Selectors
const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");

// Variables
let count = 0;
// Event Listener
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget.classList;
    if (target.contains("increase")) {
      count++;
    } else if (target.contains("decrease")) {
      count--;
    } else if (target.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "limegreen";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "white";
    }
    counter.innerHTML = count;
  });
});
