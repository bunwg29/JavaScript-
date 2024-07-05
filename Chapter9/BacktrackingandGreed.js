const regex19 = /a*b/; // Matches zero or more "a" characters followed by "b"
const str15 = "aaab";

console.log(regex19.exec(str15)); // ["aaab", "b"] - Matches the entire string, the "b" at the end

const regex20 = /a+?b/; // Matches one or more "a" characters followed by "b" (non-greedy)
const str16 = "aaab";

console.log(regex20.exec(str16)); // ["ab", "b"] - Matches the shortest possible string