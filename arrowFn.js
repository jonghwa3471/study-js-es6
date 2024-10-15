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
