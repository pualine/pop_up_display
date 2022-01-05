/*******************************
 * Create Varibles
 ****************************/
const authorsList = document.getElementById("real-authors");
const urlRequest = "https://randomuser.me/api/?/results=25";

/***************************
Create Node (Elements)
 ******************************/
function createNode(el) {
  return document.createElement(el);
}

/**Add the element created to the parent node in html */
function addNode(parent, el) {
  return parent.appendChild(el);
}

/************************************
 * Fetch Api request
 ************************************/

fetch(urlRequest) //if the fetch request is successful
  .then((response) => response.json()) //if response request is successful
  .then(function (data) {
    // Create a variable to receive the result
    let authors = data.results; // if successful then process the data with the below function

    return authors.map(function (author) {
      let list = createNode("li"),
        image = createNode("img"),
        span = createNode("span");
      image.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;

      append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  //If error occurs
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });

/**********************
 * POPUP
 *********************/
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close__popup");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide___popup");
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide___popup");
    }, 500);
  });
}
