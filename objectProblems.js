// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.

// function myFunction(obj) {
//     return obj["country"];
// }
// console.log(myFunction({ continent: 'Asia', country: 'Japan' }));


// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Hint: you might want to use the square brackets property accessor

/* 
function myFunction(obj) {
    return obj['prop-2'];
}
console.log(myFunction({  'prop-2': 'two',  prop: 'test'})); 
*/


// Printing object using for in loop.
/* 
function myFunction(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    } 
}
myFunction({x:'a',y:null,z:'c'}); 
*/


// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

/* 
function myFunction(a, b) {
    for(let key in a) {
        if(key === b) {
            return true;
        }
    }
    return false;
}
console.log(myFunction({a:1,b:2,c:3},'f')); 
*/

// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

/* 
function myFunction(a, b) {
    // if(a[b]) {
    //     return true;
    // }
    // return false
    for(let key in a) {
        if(key === b) {
            if(a[b]){
                return true;
            }
        }
    }
    return false;
}
console.log(myFunction({x:'a',y:null,z:'c'},'y'));
 */


// Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.

/* 
function myFunction(a) {
    // return {key : a};

    let obj = {};
    obj.key = a;
    return obj;
}
console.log(myFunction('a'));
 */


// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

/* 
function myFunction(a, b) {
    // return {[a]: b};

    let obj = {};
    obj[a] = b;
    return obj;
}
console.log(myFunction('a','b')); 
*/


// Write a function that takes an object (a) as argument. Return an array with all object keys.

/* 
function myFunction(a) {
    // return Object.keys(a);

    let keys = [];
    let index = 0;

    for(let key in a) {
        keys[index] = key;
        index++;
    }
    return keys;
}
console.log(myFunction({a:1,b:2,c:3}));
 */


// Write a function that takes an object (a) as argument. Return the sum of all object values.
/* 
function myFunction(a) {
    let sum = 0;
    for(let vals in a) {
        sum += a[vals];
    }
    return sum;

}
console.log(myFunction({w:15,x:22,y:13}));
 */


// Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'

/* 
function myFunction(obj) {
    let newObj = {};

    for(let key in obj){
        if(key !== 'b'){
            newObj[key] = obj[key];
        }
    }
    return newObj;

}
console.log(myFunction({ a: 1, b: 7, c: 3 }));
 */


// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.


function myFunction(a, b) {
    let newObj = {};

    for(let key = 0; key < a.length; key++) {
        newObj[a[key]] = b[key];
    }
    return newObj;

}
console.log(myFunction(['a','b','c'],[1,2,3]));
