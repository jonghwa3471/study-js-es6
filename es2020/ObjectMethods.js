const person = {
  name: "nico",
  age: 12,
};

console.log(Object.values(person));
// ["nico", 12]

console.log(Object.entries(person));
// [["name", "nico"], ["age", 12]]

console.log(
  Object.fromEntries([
    ["name", "nico"],
    ["age", 12],
  ])
);
// {name: "nico", age: 12}

console.log(Object.keys(person));
// ["name", "age"]
