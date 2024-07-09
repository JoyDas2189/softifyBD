// let now = new Date();
// console.log(now);

// let specific = new Date('1999-10-27');
// console.log(specific);
// console.log(year);
/* 
function calculateAge(birthDateString) {
    let birthDate = new Date(birthDateString);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    // Adjust if the birthday has not occurred yet this year
    // if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    //     age--;
    // }

    return age;
}

let birthDateString = '1990-07-08';
let age = calculateAge(birthDateString);
console.log(age);
 */
/* 
let date = new Date()

date.setFullYear(2024);
date.setMonth(6); // July (zero-based, 0 = January)
date.setDate(15);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(500);

console.log(date); // Output: 2024-07-15T10:30:45.500Z
 */

/* 
let current = new Date()
current.getFullYear();
current.getMonth();
current.getDate();
current.getHours();
current.getMinutes();
current.getSeconds();
current.getMilliseconds();

console.log(current)
 */


// let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
/* 
let d = new Date();
let day = d.getDay();

console.log(day);

let t = new Date();
let time = t.getHours();
console.log(time)
 */


// let d = new Date()
// d.setFullYear(2023);
// d.setMonth(11);
// d.setDate(24);
// d.setHours(2);
// d.setMinutes(10);
// d.setSeconds(25);

// console.log(d);
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toISOString());
// console.log(d.toJSON());
// console.log(d.toLocaleString());
// console.log(d.toLocaleDateString());

// let myDate = new Date();
// console.log(myDate)
// // console.log(myDate.getMonth() + 1);
// console.log(myDate.toLocaleDateString('default', {
//     month: 'long',
//     weekday: 'long',
// }));


// let d = new Date()
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toUTCString());
// console.log(d.toISOString());
// console.log(d.toLocaleString());
// console.log(d.toLocaleDateString());

// console.log(d.toLocaleDateString('default', {
//     month:"long",
// }));


//Date Format...

// let mesc = Date.parse("1999-10-27T06:25:30Z");
// let newDate = new Date(mesc)
// console.log(newDate);


//Get Methods

/* 
let currDate = new Date();
console.log(currDate);
console.log(currDate.getTime());
console.log(currDate.getFullYear());
console.log(currDate.getMonth() + 1);
console.log(currDate.getDate());
console.log(currDate.getDay());
console.log(currDate.getHours());
console.log(currDate.getMinutes());
console.log(currDate.getSeconds());
console.log(currDate.toLocaleDateString('default', {
    year:'numeric',
    month:'long',
    day:'numeric',
    weekday:'long',
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
}));


let d = new Date();
let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


console.log(days[d.getDay()]);
 */

// Set Method

let currDate = new Date();

currDate.setFullYear(1999);
currDate.setMonth(9);
currDate.setDate(27);
currDate.setHours(22);
currDate.setMinutes(45);
currDate.setSeconds(24);
currDate.setMilliseconds(500);

// currDate.setDate(currDate.getDate() + 31);
console.log(currDate);