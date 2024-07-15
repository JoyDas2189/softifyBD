// Function Declaration

// function myFunction(a, b) {
//     return a * b;
// }
// console.log(myFunction(10, 5));



// Function Expression

// const greet = function (name) {
//     return `Hello ${name}!`;
// }
// console.log(greet("Joy"));


// Arrow Function

// const fullName = (fname, lname) => {
//     return `${fname} ${lname}`;
// }
// console.log(fullName("Joy", "Das"));


// The arguments.length property returns the number of arguments received when the function was invoked

// function myFunction (a, b) {
//     return arguments.length;
// }
// console.log(myFunction(5,4));

// Function Call


/* const Person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  const person3 = {
    firstName:"Joy",
    lastName:"Das"
  }

 console.log(Person.fullName.call(person3,"Dhaka", "Bangladesh"));
 */

// function Apply..


// const Person = {
//     fullName: function(area, city, country) {
//       return this.firstName + " " + this.lastName + " " + area +" " + city + " " + country;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
//   const person3 = {
//     firstName:"Joy",
//     lastName:"Das"
//   }

//  console.log(Person.fullName.apply(person3,[ "Sutrapur","Dhaka", "Bangladesh"]));


// Function Clouser

// function temporary () {
//     let counter = 0;

//     return function () {
//         counter += 1;
//         return counter;
//     }

// }
// const add = temporary();
// console.log(add());
// console.log(add());
// console.log(add());


// Function Bind


// const Person = {
//     firstName: "joy",
//     lastName: "das",
//     fullname: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const Member = {
//     firstName: "Akagami",
//     lastName: "Shanks"
// }

// let fullName = Person.fullname.bind(Member);

// console.log(fullName());

// (function myFunc() {
//     console.log("Hello World!")
// })()


// const add = (function(){
//     let counter = 0;
//     return function() {
//         counter += 1;
//         return counter;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());


function myFunction () {
    let name = "Joy";

    function sayMyName() {
        console.log(name);
    }
    return sayMyName;
}

let myName = myFunction()

myName()
myName()
myName()
myName()


function outerFunc () {
    let counter = 0;

    return function  () {
        counter += 1;
        return counter;
    }
}

let myCounter = outerFunc()

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());