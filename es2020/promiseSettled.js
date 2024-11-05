const p = Promise.all([
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch(),
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch(),
])
  .then((response) => console.log("success!", response))
  .catch((error) => console.log("my error:", error));

const p1 = Promise.allSettled([
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch(),
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch(),
])
  .then((response) => console.log("success!", response))
  .catch((error) => console.log("my error:", error));
