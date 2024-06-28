// Chapter 3: Functions

// Defining functions with function keyword
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  console.log(greet("Alice")); // Outputs: "Hello, Alice!"
  
  // Defining functions with arrow function syntax
  const square = (x) => x * x;
  
  console.log(square(5)); // Outputs: 25
  
  // Scope and local bindings
  function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    return age;
  }
  
  let birthYear = 1990;
  console.log(calculateAge(birthYear)); // Outputs: 33
  
  // Return values
  function multiply(a, b) {
    return a * b;
  }
  
  let product = multiply(3, 4);
  console.log(product); // Outputs: 12
  
  // Optional arguments
  function greetWithAge(name, age = 20) { // Default age is 20 if not provided
    return "Hello, " + name + "! You are " + age + " years old.";
  }
  
  console.log(greetWithAge("Bob")); // Outputs: "Hello, Bob! You are 20 years old."
  console.log(greetWithAge("Carol", 35)); // Outputs: "Hello, Carol! You are 35 years old."
  
  // Closure
  function makeCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    }
  }
  
  let counter = makeCounter();
  console.log(counter()); // Outputs: 1
  console.log(counter()); // Outputs: 2
  
  // Recursion
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // Outputs: 120