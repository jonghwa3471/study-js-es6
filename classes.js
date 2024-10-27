class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`Hi, I'm ${this.username}`);
  }
}

const sexyUser = new User("Nico");

console.log(sexyUser.username);
setTimeout(() => sexyUser.sayHello(), 2000);
