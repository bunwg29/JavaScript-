class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
  const john = new Person("John", 30);
  john.greet(); // Hello, my name is John.