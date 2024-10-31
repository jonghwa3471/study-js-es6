const userObj = {
  username: "nico",
  age: 12,
  password: 1234,
};

const userFilter = {
  get: (target, prop, receiver) => {
    return prop === "password" ? `${"*".repeat(5)}` : prop;
  },
  set: (target, prop, value) => {
    console.log("Somebody wrote something");
  },
};

const filteredUser = new Proxy(userObj, userFilter);
