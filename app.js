let btnOne = document.querySelector(".first-btn");
let btnTwo = document.querySelector(".share-btn");
let shareScreen = document.querySelector(".share-popup");

btnOne.addEventListener("click", () => {
  shareScreen.classList.toggle("active");
});
btnTwo.addEventListener("click", () => {
  shareScreen.classList.remove("active");
});
