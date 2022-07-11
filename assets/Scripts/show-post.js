let params = new URLSearchParams(document.location.search);
let postId = params.get("postId");

if (postId == "101") {
  document.getElementById("post-title").innerHTML =
    localStorage.getItem("title");
  document.getElementById("post-body").innerHTML = localStorage.getItem("body");
} else {
  fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("post-title").innerHTML = data.title;
      document.getElementById("post-body").innerHTML = data.body;
    });
}
