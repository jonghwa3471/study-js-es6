// Array.of()

const friends = ["nico", "lynn", "dal", "mark"];

const arrayFriends = Array.of("nico", "lynn", "dal", "mark");

console.log(friends);
console.log(arrayFriends);

// Array.from()

const buttons = document.getElementsByClassName("btn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => console.log("I've been clicked"));
});

// More Array Methods

const friendsEmail = [
  "nico@gmail.com",
  "lynn@naver.com",
  "dal@yahoo.com",
  "flynn@gorea.com",
  "mark@hotmail.com",
];

const check = () => friendsEmail.findIndex((email) => email.includes("gorea"));
let target = check();

if (target !== -1) {
  /*   console.log(target);

  const username = friendsEmail[target].split("@")[0];
  const email = "korea.com";

  friendsEmail[target] = `${username}@${email}`;

  target = check(); */
  friendsEmail.fill("*".repeat(5), target, target + 1);
  console.log(friendsEmail);
}

console.log(target);
