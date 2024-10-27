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
  setTimeout(resolve, 5000, "first");
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "second");
});
const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "third");
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
