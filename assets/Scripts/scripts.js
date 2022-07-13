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
    document.getElementById("card-template").innerHTML = output;
  });

function removePost(id) {
  document.getElementById(id).remove();
}

function createPostElement(id, title, body) {
  let template = document.getElementById("card-template");
  let clonedCard = template.content.cloneNode(true);
  let cardsContainer = document.getElementById("card-container");

  clonedCard.getElementById("CARD_ID").id = id;
  clonedCard.querySelector("span").innerHTML = "ID: " + id;
  clonedCard.querySelector("h3").innerHTML = title;
  clonedCard.querySelector("p").innerHTML = body;
  clonedCard.querySelector("a").href = "./post.html?postId=" + id;
  clonedCard.querySelector("button").onclick = () => {
    removePost(id);
  };

  cardsContainer.appendChild(clonedCard);
}
