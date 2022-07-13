let params = new URLSearchParams(document.location.search);
let postId = params.get("postId");

if (postId == "101") {
  setPost(localStorage.getItem("title"), localStorage.getItem("body"));
} else {
  fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
    .then((response) => response.json())
    .then((posts) => {
      setPost(posts.title, posts.body);
    });
}

function setPost(title, body) {
  document.getElementById("post-title").innerHTML = title;
  document.getElementById("post-body").innerHTML = body;
}
