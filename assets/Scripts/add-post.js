//sending a post request

/*
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  */
//from local storage

function addPost() {
  //get the values from the add post form
  let titleValue = document.getElementById("title").value;
  let bodyValue = document.getElementById("body").value;

  //adding the retrieved values to the local storage
  let storagedValueOfTitle = localStorage.setItem("title", titleValue);
  let storagedValueOfBody = localStorage.setItem("body", bodyValue);

  //getting the values from the local storage and creating an HTML element.

  let valueOfTitleInStorage = localStorage.getItem("title");
  let valueOfBodyInStorage = localStorage.getItem("body");

  //Creating New Post from the values

  let headerOfNewPost = (document.getElementById("new-post-header").innerHTML =
    valueOfTitleInStorage);
  let bodyOfNewPost = (document.getElementById("new-post-paragraph").innerHTML =
    valueOfBodyInStorage);
}
