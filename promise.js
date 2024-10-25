const amISexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Yes, you are!");
});

console.log(amISexy);

setInterval(console.log, 1000, amISexy);
