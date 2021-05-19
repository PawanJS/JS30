"use strict";
const keys = document.querySelectorAll(".key");

// playing sound
const playSound = function (e) {
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
    const audio = new Audio(`sounds/${e.key}.wav`);
    audio.play();
  }
};

// adding transition
const addAnimation = function (key) {
  const keyClicked = document.querySelector(`.${key}`);
  keyClicked.classList.add("playing");
};

// removing transition
const removeAnimation = function (key) {
  if (key.propertyName !== "transform") return;
  this.classList.remove("playing");
};

// /listening to events
document.addEventListener("keydown", playSound);

for (let key of keys) key.addEventListener("transitionend", removeAnimation);
