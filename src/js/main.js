const buttonElement = document.querySelector(".js-button");

const handlePopupVisibility = () => {
  const popupElement = document.querySelector(".js-popup");
  popupElement.classList.toggle("js-visible");
};

buttonElement.addEventListener("click", handlePopupVisibility);
