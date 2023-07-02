const colorInput = document.querySelector("#color");
const colorLabel = document.querySelector("label");

setInterval(() => {
  colorLabel.innerText = colorInput.value;
}, 1);
