// Chapter 5: Higher-Order Functions

// Abstraction: Functions that abstract over actions
function log(message) {
    console.log(message);
  }
  
  // Higher-order functions: Functions that take functions as arguments or return functions as values
  function applyTwice(func, value) {
    return func(func(value));
  }
  
  // Function creation: Functions that create new functions
  function makeAdder(amount) {
    return function(number) {
      return number + amount;
    };
  }
  
  // Function transformation: Functions that modify other functions
  function double(number) {
    return number * 2;
  }
  
  function triple(number) {
    return number * 3;
  }
  
  function transform(func, multiplier) {
    return function(number) {
      return func(number) * multiplier;
    };
  }
  
  // Array methods
  let numbers = [1, 2, 3, 4, 5];
  
  // forEach: Iterates over each element of an array
  numbers.forEach(function(number) {
    console.log(number * 2);
  });
  
  // filter: Creates a new array with elements that satisfy a condition
  let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
  });
  console.log(evenNumbers); // Outputs: [2, 4]
  
  // map: Creates a new array by applying a function to each element
  let doubledNumbers = numbers.map(function(number) {
    return number * 2;
  });
  console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]
  
  // reduce: Reduces an array to a single value
  let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0); // Initial value is 0
  console.log(sum); // Outputs: 15
  
  // some: Checks if at least one element satisfies a condition
  let hasEven = numbers.some(function(number) {
    return number % 2 === 0;
  });
  console.log(hasEven); // Outputs: true
  
  // find index: Returns the index of the first element that satisfies a condition
  let index = numbers.findIndex(function(number) {
    return number === 3;
  });
  console.log(index); // Outputs: 2
  
  // Composability
  let tripledAndDoubled = transform(triple, 2); // Triple then double
  console.log(tripledAndDoubled(5)); // Outputs: 30