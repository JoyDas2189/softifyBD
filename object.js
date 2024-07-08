/*
let Person = {
    name: "Joy Das",
    age: 24,
    gender:"male"
}

Person.nationality = "Bangladeshi";
delete Person.gender;
console.log(Person.name);
console.log(Person['age']);
console.log(Person['nationality']);
*/


// Nested Object

/*
let person = {
    name: "Joy Das",
    age: 24,
    gender:"male",
    interest: {
        first: "gaming",
        second: "coding",
        wish: "problem-solving"
    }
}

console.log(person.interest.wish);

*/


/* 
let Person = {
    name: "Joy Das",
    age: 24,
    gender:"male",
}
Person.information = function() {
   return `Name is ${this.name}, age is ${this.age} and gender is ${this.gender}`;
}
console.log(Person.information());
 */

//Printing object using for in loop
/* 
const person = {
    name: 'Joy',
    age: 24,
    gender: 'male'
};

for (let key in person) {
        console.log(`${key} : ${person[key]}`);
} */




//Constructor

/* 
function Person (name, age, eye) {
    this.name = name;
    this.age = age;
    this.eye = eye;
}

let mybrother = new Person ("zoro", 50, "black");
let myInfo = new Person ("Joy", 24, "black");

console.log(mybrother.name, mybrother.age, mybrother.eye);
console.log(myInfo.name, myInfo.age, myInfo.eye); */

/* 
function vowelsAndConsonants(s) 
{
    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < s.length; i++)
        {
            if (vowels.indexOf(s[i]) > -1)
                {
                    console.log(s[i]);
                }
        }
    
    for (var j = 0; j < s.length; j++)
        {
            if (vowels.indexOf(s[j]) < 0)
                {
                    console.log(s[j]);
                }
        }
    
} 
console.log(vowelsAndConsonants())
 */

