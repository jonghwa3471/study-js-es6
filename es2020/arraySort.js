const array = ["a", "c", "b"];

console.log(array.sort());

const fruits = ["apple", "strawberry", "avocado"];

const sortFruitByLength = (fruitA, fruitB) => {
  return fruitA.length - fruitB.length;
};

console.log(fruits.sort(sortFruitByLength));

const people = [
  {
    name: "nico",
    age: 32,
  },
  {
    name: "lynn",
    age: 22,
  },
];

const orderPeopleByAge = (personA, personB) => {
  return personA.age - personB.age;
};

console.log(people.sort(orderPeopleByAge));
