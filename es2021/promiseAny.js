const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "quick");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, "slow");
});

Promise.all([p1, p2]).then(console.log).catch(console.log);
Promise.any([p1, p2]).then(console.log).catch(console.log);
