const regex10 = /\d/; // Matches any digit
const str6 = "12345";

console.log(regex10.test(str6)); // true (matches "1")

const regex11 = /\w/; // Matches any word character (letters, digits, underscore)
const str7 = "Hello_world123";

console.log(regex11.test(str7)); // true (matches "H")

const regex12 = /\s/; // Matches any whitespace character
const str8 = "Hello world!";

console.log(regex12.test(str8)); // true (matches space)