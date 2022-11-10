function getPosts() {
  console.log("data is Loading");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .finally(() => {
      console.log("data Loaded");
    });
}

getPosts();
