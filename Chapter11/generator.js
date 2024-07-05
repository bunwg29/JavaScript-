function* countToTen() {
    for (let i = 1; i <= 10; i++) {
      yield i; // Pause and return the value
    }
  }
  
  const counter = countToTen();
  
  console.log(counter.next().value); // Output: 1
  console.log(counter.next().value); // Output: 2
  console.log(counter.next().value); // Output: 3