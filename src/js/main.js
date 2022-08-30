const buttonElement = document.querySelector(".js-button");
const iconElement = document.querySelector(".js-icon");
const darkBackgroundElement = document.querySelector(".js-dark");

const handleDarkBackround = () => {
  darkBackgroundElement.classList.toggle("js-visible");
};

const handlePopupVisibility = () => {
  const popupElement = document.querySelector(".js-popup");
  popupElement.classList.toggle("js-visible");
  handleDarkBackround();
};

buttonElement.addEventListener("click", handlePopupVisibility);
iconElement.addEventListener("click", handlePopupVisibility);
darkBackgroundElement.addEventListener("click", handlePopupVisibility);
