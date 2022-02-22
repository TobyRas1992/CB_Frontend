/* 
fetch(apiURL)
  .then((response) => response.json())
  .then((json) => console.log(json));
 */
let userListing = (function () {
  let userList = [];
  let apiURL = "https://jsonplaceholder.typicode.com/users";

  let hideContent = () => {
    let heading = document.querySelector(".page-heading");
    heading.classList.add("visually-hidden");
  };

  let showContent = () => {
    let heading = document.querySelector(".page-heading");
    heading.classList.remove("visually-hidden");
  };

  let showLoadingMessage = () => {
    hideContent();
    let loadingMessage = document.createElement("P");
    loadingMessage.innerText = "Loading. One moment!";
    document.body.appendChild(loadingMessage);
  };

  let hideLoadingMessage = () => {
    showContent();
    let elementToRemove = document.querySelector("P");
    elementToRemove.parentElement.removeChild(elementToRemove);
  };

  let getAll = () => {
    return userList;
  };

  let addUserToArray = (user) => {
    if (typeof user === "object" && "name" in user && "companyName" in user) {
      userList.push(user);
    } else {
      console.log("User is not correcrt");
    }
  };
  // gets users from API
  let loadList = () => {
    showLoadingMessage();
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        hideLoadingMessage();
        json.forEach((item) => {
          let user = {
            name: item.name,
            companyName: item.company.name,
          };
          addUserToArray(user);
        });
        userList.forEach((user) => addListItem(user));
      })
      .catch((e) => {
        hideLoadingMessage();
        console.error(e);
      });
  };

  //code for each user
  let addListItem = (user) => {
    let userContainer = document.querySelector("#userList-container");
    let userListItem = document.createElement("div");
    userListItem.classList.add("col-3");
    let name = user.name;
    let companyName = user.companyName;
    userListItem.innerText = name;
    userContainer.appendChild(userListItem);
  };

  return {
    addUserToArray: addUserToArray,
    loadList: loadList,
    getAll: getAll,
    addListItem: addListItem,
  };
})();
/* 
userListing.loadList().then(() => {
  userListing.getAll().forEach((user) => {
    userListing.addListItem(user);
  });
});
 */

userListing.loadList();
