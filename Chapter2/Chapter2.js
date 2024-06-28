// Chapter 2: Program Structure

// Expressions: Produce values
let result = 2 + 3; // 2 + 3 is an expression, result is the value
console.log(result); // Outputs: 5

// Statements: Have side effects (change program state)
let message = "Hello!"; // Assigns a value to a variable, a statement
console.log(message); // Outputs "Hello!", also a statement

// Bindings: Names that hold onto values
let name = "Alice";
let age = 30;

// Scope: Where a binding is visible
function greet(name) { // name is scoped to this function
  let greeting = "Hello, " + name + "!";
  console.log(greeting); // Can access name and greeting within the function
}

greet("Bob"); // Outputs: "Hello, Bob!"

// Functions: Encapsulated code blocks
function square(x) {
  return x * x;
}

let number = 5;
let squared = square(number);
console.log(squared); // Outputs: 25

// Control Flow

// Conditional execution (if, else if, else)
let temperature = 25;

if (temperature < 10) {
  console.log("It's cold!");
} else if (temperature < 20) {
  console.log("It's cool.");
} else {
  console.log("It's warm.");
}

// Loops

// While loop
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}

// Do...while loop
let i = 10;
do {
  console.log("Do...while:", i);
  i--;
} while (i > 0);

// For loop
for (let j = 0; j < 3; j++) {
  console.log("For:", j);
}

// Breaking out of loops (break)
for (let k = 0; k < 10; k++) {
  if (k === 5) {
    break; // Exits the loop when k equals 5
  }
  console.log("Break:", k);
}

// Continuing to the next iteration (continue)
for (let l = 0; l < 10; l++) {
  if (l % 2 === 0) {
    continue; // Skips even numbers
  }
  console.log("Continue:", l);
}