const buttonElement = document.querySelector(".js-button");
const iconElement = document.querySelector(".js-icon");
const resetElement = document.querySelector(".js-resetButton");

const handlePopupVisibility = () => {
  const popupElement = document.querySelector(".js-popup");
  popupElement.classList.toggle("js-visible");
};

buttonElement.addEventListener("click", handlePopupVisibility);
iconElement.addEventListener("click", handlePopupVisibility);

let count = 1;

const handleCounter = () => {
  const counterElement = document.querySelector(".js-counter");

  counterElement.innerText = count++ + " times";
  if (count > 6) {
    resetElement.classList.add("js-visible");
  } else {
    resetElement.classList.remove("js-visible");
  }
};

buttonElement.addEventListener("click", handleCounter);

const handleCountReset = () => {
  count = 0;
  handleCounter();
};

resetElement.addEventListener("click", handleCountReset);
