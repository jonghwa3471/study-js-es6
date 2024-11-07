// OR Operator
let name = prompt("what is your name?");

/* if (!name) {
  name = "anonymous";
} */

name ||= "anonymous";

console.log(`Hello, ${name}`);

// AND Operator
const user = {
  name: "nico",
  password: 123,
};

/* if (user.password) {
  user.password = "[secret]";
} */

user.password &&= "[secret]";

console.log(user);
