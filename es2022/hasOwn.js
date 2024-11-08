const user = {
  username: "nico",
  isAdmin: false,
};

console.log(user.hasOwnProperty("isAdmin"));
console.log(Object.hasOwn(user, "isAdmin"));
console.log("isAdmin" in user);
