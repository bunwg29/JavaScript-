const PRIVATE_KEY = Symbol("private");

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this[PRIVATE_KEY] = "secret";
  }
}

const user = new User("Alice", 25);
console.log(user.name); // Alice
console.log(user[PRIVATE_KEY]); // undefined (cannot access directly)