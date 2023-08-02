const form = document.querySelector("#form");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");
const posts = document.querySelector("#posts");
const updateIcon = document.querySelector("#update");
const deleteIcon = document.querySelector("delete");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
  console.log("button clicked");
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Field cannot be empty";
    console.log("failure");
  } else {
    msg.innerHTML = "";
    console.log("success");
    acceptData();
  }
};

let data = {};

const acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
    <div class="flex justify-between">
    <p>${data.text}</p>
    <span class="flex gap-6 cursor-pointer">
      <i onclick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
    </span>
  </div>
    `;
  input.value = "";
};

const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

const editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
