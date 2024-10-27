const amISexy = new Promise((resolve, reject) => {
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
