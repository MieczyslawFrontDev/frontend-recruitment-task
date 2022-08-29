const buttonElement = document.querySelector(".js-button");
const iconElement = document.querySelector(".js-icon");
const resetElement = document.querySelector(".js-resetButton");
const darkBackgroundElement = document.querySelector(".js-dark");

const handleBackroundVisibility = () => {
  darkBackgroundElement.classList.toggle("js-visible");
};

const handlePopupVisibility = () => {
  const popupElement = document.querySelector(".js-popup");
  popupElement.classList.toggle("js-visible");
  handleBackroundVisibility();
};

buttonElement.addEventListener("click", handlePopupVisibility);
iconElement.addEventListener("click", handlePopupVisibility);
darkBackgroundElement.addEventListener("click", handlePopupVisibility);

const handleCounter = () => {
  const counterElement = document.querySelector(".js-counter");
  let count = localStorage.getItem("count");

  counterElement.innerText = count++ + " times";
  if (count > 6) {
    resetElement.classList.add("js-visible");
  } else {
    resetElement.classList.remove("js-visible");
  }
  localStorage.setItem("count", count);
};

buttonElement.addEventListener("click", handleCounter);

const handleCountReset = (count) => {
  count = localStorage.clear("count");
  handleCounter();
};

resetElement.addEventListener("click", handleCountReset);
