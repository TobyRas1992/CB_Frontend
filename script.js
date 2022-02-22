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

  let getAll = () => {
    return userList;
  };

  let addUserToArray = (user) => {
    if (typeof user === "object" && "name" in user) {
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
          console.log(user);
        });
        console.log(json);
        console.log(userList);
      })
      .catch((e) => {
        hideLoadingMessage();
        console.error(e);
      });
  };

  let addListItem = (user) => {
    //finish code here
  };
  return {
    addUserToArray: addUserToArray,
    loadList: loadList,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

userListing.loadList().then(() => {
  userListing.getAll().forEach((user) => {
    userListing.addListItem(user);
  });
});
