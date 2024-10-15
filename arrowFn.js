const names = ["nico", "lynn", "flynn"];

function addFire(item, index) {
  console.log("we are on", index);
  return item + "🔥";
}

const fire = names.map(addFire);

// const fire = names.map((item) => item + "🔥");

console.log(fire);
