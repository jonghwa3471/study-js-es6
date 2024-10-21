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
