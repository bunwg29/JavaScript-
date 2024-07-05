const regex8 = /[a-z]/; // Matches any lowercase letter
const str4 = "This is a test.";

console.log(regex8.test(str4)); // true (matches "t")

const regex9 = /[A-Z]/; // Matches any uppercase letter
const str5 = "This is a test.";

console.log(regex9.test(str5)); // true (matches "T")