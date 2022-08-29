const buttonElement = document.querySelector(".js-button");
const iconElement = document.querySelector(".js-icon");

const handlePopupVisibility = () => {
  const popupElement = document.querySelector(".js-popup");
  popupElement.classList.toggle("js-visible");
};

buttonElement.addEventListener("click", handlePopupVisibility);
iconElement.addEventListener("click", handlePopupVisibility);
