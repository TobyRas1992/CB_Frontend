let userList = [];
let apiURL = "https://jsonplaceholder.typicode.com/users";

/* let getUsers = () => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((json) => console.log(json));
}; */

fetch(apiURL)
  .then((response) => response.json())
  .then((json) => console.log(json));
