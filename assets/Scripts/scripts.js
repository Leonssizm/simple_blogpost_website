fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    let output = "";
    posts.forEach((post) => {
      output += createPostElement(post.id, post.title, post.body);
    });

    if (localStorage.getItem("id") !== null) {
      output += createPostElement(
        localStorage.getItem("id"),
        localStorage.getItem("title"),
        localStorage.getItem("body")
      );
    }
    document.getElementById("card-body").innerHTML = output;
  });

function removePost(id) {
  document.getElementById(id).remove();
}
function createPostElement(id, title, body) {
  return `
        <div id="${id}" class="card card-body mb-3">
        <h3>ID: N${id} ${title}</h3>
        <p>${body}</p>

        <div class="btn-wrapper d-flex justify-content-between mt-5 ">
            <a href="./post.html?postId=${id}"class="btn btn-primary">View</a>
            <button onclick="removePost(${id})" class="btn btn-danger">Delete</button>
        </div>
        </div>
      `;
}
