const regex13 = /a+/; // Matches one or more "a" characters
const str9 = "aaaa";

console.log(regex13.test(str9)); // true (matches all "a"s)

const regex14 = /b*/; // Matches zero or more "b" characters
const str10 = "abbc";

console.log(regex14.test(str10)); // true (matches the empty string between "a" and "b")

const regex15 = /c?/; // Matches zero or one "c" character
const str11 = "cc";

console.log(regex15.test(str11)); // true (matches the first "c")