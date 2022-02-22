/* 
fetch(apiURL)
  .then((response) => response.json())
  .then((json) => console.log(json));
 */
let userListing = (function () {
  let userList = [];
  let apiURL = "https://jsonplaceholder.typicode.com/users";
  let imageURL = "https://via.placeholder.com/150/1F83B3";

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
        console.log(json);
        json.forEach((item) => {
          let user = {
            name: item.name,
            companyName: item.company.name,
            email: item.email,
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
    userListItem.classList.add("col-xl-6");
    userListItem.classList.add("col-xxl-3");
    userListItem.classList.add("user-display");

    let name = user.name;
    let companyName = user.companyName;

    //set inner html
    userListItem.innerHTML = `
    <div class="d-flex">
    <img class="userLogo" src="assets/1F83B3.png"></img>
    <p class="userName">${name}</p>
    <p class="userCompany">(${companyName})</p>
    </div>
    `;

    //if no email on user object then apply class to change text color
    if (user.email === null) {
      console.log(`${name} is missing an email`);
      let userNameField = document.querySelector(".userName");
      userNameField.classList.add("no-email");
    }
    userContainer.appendChild(userListItem);
  };

  return {
    addUserToArray: addUserToArray,
    loadList: loadList,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

userListing.loadList();
