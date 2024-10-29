const superBig = {
  [Symbol("nico")]: {
    handsome: "true",
  },
  [Symbol("nico")]: {
    age: 12,
  },
  hello: "hello",
};

Object.getOwnPropertySymbols(superBig).forEach((symbol) =>
  console.log(superBig[symbol])
);
