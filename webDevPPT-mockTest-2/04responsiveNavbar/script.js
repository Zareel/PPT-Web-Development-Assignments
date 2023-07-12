const hamburger = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("fa-times");
  if (hamburger.classList.toggle("fa-bars")) {
    ul.style.left = "-200px";
    ul.style.color = "white";
  } else {
    ul.style.left = "10px";
    ul.style.color = "black";
  }
});
