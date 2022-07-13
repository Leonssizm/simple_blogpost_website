function addPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
      id: 101,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((posts) => {
      localStorage.setItem("title", posts.title);
      localStorage.setItem("body", posts.body);
      localStorage.setItem("id", posts.id);
      window.location.href = "./posts.html";
    });
}
