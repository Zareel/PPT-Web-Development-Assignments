const input = document.querySelector("#input");
const output = document.querySelector("#output");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  output.innerHTML = input.value;
});
