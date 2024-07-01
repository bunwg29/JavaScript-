class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log("Generic animal sound.");
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`Woof! I'm a ${this.breed}.`);
    }
  }
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  myDog.speak(); // Woof! I'm a Golden Retriever.