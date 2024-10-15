const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log(this);
  this.style.backgroundColor = "red";
});

const nico = {
  name: "Nico",
  age: 24,
  addYear: () => {
    this.age++;
  },
};

nico.addYear();
console.log(nico);

const names = ["nico", "lynn", "flynn"];

function addFire(item, index) {
  console.log("we are on", index);
  return item + "🔥";
}

const fire = names.map(addFire);

// const fire = names.map((item) => item + "🔥");

console.log(fire);

const emails = [
  "nco@no.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
  "nico@gmail.com",
];

const foundMail = emails.find((email) => email.includes("@gmail.com"));
const noGmail = emails.filter((email) => !email.includes("@gmail.com"));

const cleaned = [];
emails.forEach((email) => cleaned.push(email.split("@")[0]));

const cleandUseMap = emails.map((email) => email.split("@")[0]);

const objectEmail = emails.map((email, index) => ({
  username: email.split("@")[0],
  index,
}));

console.log(foundMail);
console.log(noGmail);
console.log(cleaned);
console.log(cleandUseMap);
console.log(objectEmail);
