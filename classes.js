class User {
  constructor(name, lastname, email, password) {
    this.username = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
  sayHello = () => {
    console.log(`Hi, I'm ${this.username}`);
  };
  getProfile = () => {
    console.log(`${this.username} ${this.email} ${this.password}`);
  };
  updatePassword = (newPassword, currentPassword) => {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("You've got wrong password");
    }
  };
}

const sexyUser = new User("Nicolas", "Serrano", "nico@com", "1234");

class Admin extends User {
  constructor(superAdmin) {
    this.superAdmin = superAdmin;
  }
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const sexyAdmin = new Admin("Nicolas", "Serrano", "nico@com", "1234", true);

sexyAdmin.deleteWebsite();
console.log(sexyAdmin.email);
