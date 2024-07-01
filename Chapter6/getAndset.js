class Temperature {
    constructor(celsius) {
      this._celsius = celsius;
    }
  
    get celsius() {
      return this._celsius;
    }
  
    set celsius(value) {
      if (value < -273.15) {
        throw new Error("Temperature cannot be below absolute zero.");
      }
      this._celsius = value;
    }
  
    get fahrenheit() {
      return this._celsius * 9/5 + 32;
    }
  }
  
  const temp = new Temperature(25);
  console.log(temp.celsius); // 25
  temp.celsius = 30; // Setting Celsius value
  console.log(temp.fahrenheit); // 86