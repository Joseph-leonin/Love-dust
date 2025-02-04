"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! LABYUUUU :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.5;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  
  const messages = [
    "No",
    "Are you sure?",
    "Are you really sure?",
    "Super duper gazillion googleplex times infinity sure?",
    "Hear me out my love",
    "I'll buy you mofusand",
    "I'll cook curry for you:(",
    "promise i'll add a lot of potatoes and carrots",
    "You're breaking my heart:(((",
    "I'm gonna cry...",
    "pretty please",
    "please my love huhu"
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}