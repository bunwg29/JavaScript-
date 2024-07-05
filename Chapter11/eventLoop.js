console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 2000); // Delayed by 2 seconds

console.log('End');

// Output:
// Start
// End
// (After 2 seconds)
// Timeout callback