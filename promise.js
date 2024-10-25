const amISexy = new Promise((resolve, reject) => {
  reject("Yes you are!");
});

console.log(amISexy);

amISexy
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
