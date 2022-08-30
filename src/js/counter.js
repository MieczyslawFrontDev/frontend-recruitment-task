const resetElement = document.querySelector(".js-resetButton");

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
