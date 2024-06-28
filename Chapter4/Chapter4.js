// Chapter 4: Data Structures: Objects and Arrays

// Objects: Unordered collections of key-value pairs
let person = {
    name: "Alice",
    age: 30,
    occupation: "Software Engineer"
  };
  
  // Accessing properties using dot notation
  console.log(person.name); // Outputs: "Alice"
  console.log(person.age); // Outputs: 30
  
  // Accessing properties using square brackets
  console.log(person["occupation"]); // Outputs: "Software Engineer"
  
  // Adding and modifying properties
  person.city = "New York"; // Adds a new property
  person.age = 31; // Modifies an existing property
  
  // Methods: Functions that are properties of objects
  let car = {
    make: "Toyota",
    model: "Camry",
    start: function() {
      console.log("The engine is starting.");
    },
    stop: function() {
      console.log("The engine is stopping.");
    }
  };
  
  car.start(); // Outputs: "The engine is starting."
  
  // Arrays: Ordered collections of values
  let colors = ["red", "green", "blue"];
  
  // Accessing elements by index
  console.log(colors[0]); // Outputs: "red"
  console.log(colors[2]); // Outputs: "blue"
  
  // Modifying elements
  colors[1] = "yellow"; // Changes the second element
  
  // Adding and removing elements
  colors.push("purple"); // Adds "purple" to the end
  colors.pop(); // Removes the last element
  
  // Array methods
  console.log(colors.length); // Outputs: 4 (number of elements)
  console.log(colors.join(", ")); // Outputs: "red, yellow, blue, purple"
  
  // JSON: A serialization format for objects and arrays
  let jsonData = JSON.stringify(person); // Converts object to JSON string
  console.log(jsonData); // Outputs: '{"name":"Alice","age":31,"occupation":"Software Engineer","city":"New York"}'
  
  let jsonObject = JSON.parse(jsonData); // Converts JSON string back to object
  console.log(jsonObject.name); // Outputs: "Alice"