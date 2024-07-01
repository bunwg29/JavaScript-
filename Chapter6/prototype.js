function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log("Generic animal sound.");
  }
  
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.speak = function() {
    console.log(`Woof! I'm a ${this.breed}.`);
  }
  
  const dog = new Dog("Buddy", "Golden Retriever");
  dog.speak(); // Woof! I'm a Golden Retriever.