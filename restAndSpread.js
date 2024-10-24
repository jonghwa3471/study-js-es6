// Spread
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];

console.log(friends);
console.log(...friends);
console.log([...friends, ...family]);
console.log(friends.concat(family));

// Spread Applications
const lastName = prompt("last name");

const user = {
  username: "nico",
  age: 24,
  ...(lastName !== "" && { lastName }),
};

console.log(user);
