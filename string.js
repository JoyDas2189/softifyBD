/* 
let answer1 = "this is answer1";
let answer2 = "this is answer2";
let answer3 = "this is answer3";


console.log(`${answer1}, ${answer2}, ${answer3}`);
 */

/* 
let text = `we are so called "VIKINGS" from north`;
console.log(text);
 */

// let x = "hello world";
// let y = new String("hello world");

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(x === y);


// JavaScript String can't be compared..
/* 
let x = new String("abd");
let y = new String("abd");

console.log(x == y); */

// String Methods


let text = "   hello world   ";

// console.log(text.length);
// console.log(text.charAt(4));
// console.log(text.charCodeAt(2));
// console.log(text.at(2));
// console.log(text[4]);
// console.log(text.slice(0, 5));
// console.log(text.slice(-5));
// console.log(text.slice(-10, -4));
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.trim());
console.log(text.trimStart().length);
console.log(text.trimEnd().length);
console.log(text.padEnd(4, "0"));