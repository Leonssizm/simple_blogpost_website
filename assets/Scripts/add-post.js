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
    .then((data) => {
      localStorage.setItem("title", data.title);
      localStorage.setItem("body", data.body);
      localStorage.setItem("id", data.id);
      window.location.href = "/posts-page.html";
    });
}
