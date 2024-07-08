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


let d = new Date()
// d.setFullYear(2023);
// d.setMonth(11);
// d.setDate(24);
// d.setHours(2);
// d.setMinutes(10);
// d.setSeconds(25);
d.getMonth(6);

console.log(d);