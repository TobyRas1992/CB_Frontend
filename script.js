/* 
fetch(apiURL)
  .then((response) => response.json())
  .then((json) => console.log(json));
 */
let userListing = (function () {
  let userList = [];
  let apiURL = "https://jsonplaceholder.typicode.com/users";

  let showLoadingMessage = () => {
    let loadingMessage = document.createElement("P");
    loadingMessage.innerText = "Loading. One moment!";
    document.body.appendChild(loadingMessage);
  };

  let hideLoadingMessage = () => {
    let elementToRemove = document.querySelector("P");
    elementToRemove.parentElement.removeChild(elementToRemove);
  };

  let loadList = () => {
    showLoadingMessage();
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        hideLoadingMessage();
        console.log(json);
      })
      .catch((e) => {
        hideLoadingMessage();
        console.error(e);
      });
  };
  return {
    loadList: loadList,
  };
})();

userListing.loadList();
