class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log(`Starting the ${this.model}...`);
    }
  
    accelerate() {
      console.log(`The ${this.model} is accelerating.`);
    }
  }
  
  const myCar = new Car("Tesla Model S", 2023);
  myCar.start();
  myCar.accelerate();