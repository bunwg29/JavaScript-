const regex16 = /(hello) world/; // Groups "hello" and captures it
const str12 = "Hello world!";

console.log(regex16.exec(str12)); // ["Hello world!", "Hello"]

const regex17 = /(\d+)/; // Groups one or more digits
const str13 = "12345";

console.log(regex17.exec(str13)); // ["12345", "12345"]