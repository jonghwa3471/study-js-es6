/* const amISexy = new Promise((resolve, reject) => {
  resolve(2);
});

const timesTwo = (number) => number * 2;

amISexy
  .then((number) => timesTwo(number))
  .then((number) => timesTwo(number))
  .then((number) => timesTwo(number))
  .then((number) => timesTwo(number))
  .then((number) => timesTwo(number))
  .then(() => {
    throw Error("Something is wrong");
  })
  .then((lastNumber) => console.log(lastNumber))
  .catch((error) => console.log(error));
 */

// Promise.all
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 10000, "first");
})
  .then((value) => console.log(value))
  .finally(() => console.log("I'm done"));

// Real world Promises
const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.log(`Error: ${error}`));
};

// async/await, try/catch
const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    console.log("we are done!");
  }
};

getMoviesAsync();
