"use strict";
// playing sound
const playSound = function (key) {
  const audio = new Audio(`sounds/${key}.wav`);
  audio.play();
};

// add animation to the button
const addAnimation = function (key) {
  const btnClicked = document.querySelector(`.${key}`);
  btnClicked.classList.add("playing");
  setTimeout(function () {
    btnClicked.classList.remove("playing");
  }, 100);
};

// /listening to keyboard events
document.addEventListener("keydown", function (e) {
  if (
    e.key === "a" ||
    e.key === "s" ||
    e.key === "d" ||
    e.key === "f" ||
    e.key === "g" ||
    e.key === "h" ||
    e.key === "j" ||
    e.key === "k" ||
    e.key === "l"
  ) {
    playSound(e.key);
    addAnimation(e.key);
  }
});
