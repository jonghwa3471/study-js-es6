// For ... of
const friends = ["nico", "lynn", "flynn", "dal"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

const addHeart = (name, index, friends) =>
  console.log(`${index} ${name} ❤️ from ${friends}`);

friends.forEach(addHeart);

for (const friend of friends) {
  if (friend === "flynn") {
    break;
  } else {
    console.log(friend);
  }
}
