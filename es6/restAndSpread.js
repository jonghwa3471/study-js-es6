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

// Rest Parameters
const bestFriendMaker = (firstOne, ...rest) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(`the rest are ${rest}`);
  console.log(rest);
};

bestFriendMaker("nico", "lynn", "dall", "japan guy");

// Rest + Spread + Destructure Magic
const user2 = {
  name: "nico",
  age: 24,
  password: 12345,
};

const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user2);

console.log(cleanUser);

// Set Default
const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });

console.log(setCountry(user2));

// Rename
const rename = ({ name: NAME, ...rest }) => ({ NAME, ...rest });
console.log(rename(user2));
