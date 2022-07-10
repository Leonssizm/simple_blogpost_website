//Getting Posts for the posts-page
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    let output = "<h2></h2>";
    data.forEach((post) => {
      output += `
        <div id="${post.id}" class="card card-body mb-3">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        
        <div class="btn-wrapper d-flex justify-content-between mt-5 ">
            <a href="./show-post.html" id="show-btn" class="btn btn-primary">Show</a>
            <button onclick="removePost(${post.id})"  id='delete-btn' class="btn btn-danger">Delete</button>
        </div>
        </div>
        `;
    });
    document.getElementById("card-body").innerHTML = output;
  });
//deleting posts (UNDER CONSTRUCTION)
function removePost() {
  document.getElementById("delete-btn").parentNode.parentNode.remove();
}
