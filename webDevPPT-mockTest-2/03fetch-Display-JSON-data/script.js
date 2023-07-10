const users = document.querySelector("#users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    //console.log(data);
    //console.log(data[0].name);
    // let username = data[0].username;
    // console.log(username);
    return (users.innerHTML = data.map((user) => {
      return `
    <div class="w-70 h-auto border border-[2px] border-black px-4 py-2">
    <h1>Name: ${user.name}</h1>
    <h2>User Name: ${user.username}</h2>
    <p>Mobile no: ${user.phone}</p>
    <p>Website: ${user.website}</p>
  </div>
    `;
    }));
  })
  .catch((error) => {
    console.log(error);
  });
