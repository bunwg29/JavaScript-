const str1 = "Hello world!";
const regex5 = /hello/i;

console.log(regex5.test(str1)); // true (case-insensitive match)

const str2 = "This is a test.";
const regex6 = /test/;

console.log(regex6.test(str2)); // true (match found)

const str3 = "This is a test.";
const regex7 = /fail/;

console.log(regex7.test(str3)); // false (no match)