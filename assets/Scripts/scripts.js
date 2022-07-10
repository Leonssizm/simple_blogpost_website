//Getting Posts for the posts-page
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    let output = "";
    data.forEach((post) => {
      output += `
        <div id="${post.id}" class="card card-body mb-3">
        <h3>ID: N${post.id}. ${post.title}</h3>
        <p>${post.body}</p>

        <div class="btn-wrapper d-flex justify-content-between mt-5 ">
            <a href="./show-post.html?postId=${post.id}" id="show-btn-N${post.id}" class="btn btn-primary">Show</a>
            <button onclick="removePost(${post.id})"  id='delete-btn-N${post.id}' class="btn btn-danger">Delete</button>
        </div>
        </div>
      `;
    });

    if (localStorage.getItem("id") !== null) {
      output += `<div id="${localStorage.getItem(
        "id"
      )}" class="card card-body mb-3">
    <h3>ID: N${localStorage.getItem("id")}. ${localStorage.getItem(
        "title"
      )}</h3>
    <p>${localStorage.getItem("body")}</p>
   
    <div class="btn-wrapper d-flex justify-content-between mt-5">
    <a href="./show-post.html?postId=${localStorage.getItem(
      "id"
    )}" id="show-btn-N${localStorage.getItem(
        "id"
      )}" class="btn btn-primary">Show</a>
    <button onclick="removePost(${localStorage.getItem(
      "id"
    )})"  id='delete-btn-N${localStorage.getItem(
        "id"
      )}' class="btn btn-danger">Delete</button>
</div>
    </div>
    `;
    }
    document.getElementById("card-body").innerHTML = output;
  });
//deleting posts
function removePost(id) {
  document.getElementById(id).remove();
}
