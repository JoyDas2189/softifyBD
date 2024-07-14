// Function Declaration

function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(10, 5));



// Function Expression

const greet = function (name) {
    return `Hello ${name}!`;
}
console.log(greet("Joy"));


// Arrow Function

const fullName = (fname, lname) => {
    return `${fname} ${lname}`;
}
console.log(fullName("Joy", "Das"));


// The arguments.length property returns the number of arguments received when the function was invoked

function myFunction (a, b) {
    return arguments.length;
}
console.log(myFunction(5,4));

