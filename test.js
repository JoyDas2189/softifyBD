

// const stringReverse = (s) => {
//   // let splitted = s.split("").reverse().join("");
//   // return splitted;

//   let reversed = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     reversed += s[i];
//   }
//   return reversed;
// };

// console.log(stringReverse("1234"));


// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let myDate = new Date();
// let currentDayIndex = myDate.getDay();

// let previousTwoDays = [
//     days[(currentDayIndex - 2 + 7) % 7],
//     days[(currentDayIndex - 1 + 7) % 7]
// ];

// let nextThreeDays = [
//     days[(currentDayIndex + 1) % 7],
//     days[(currentDayIndex + 2) % 7],
//     days[(currentDayIndex + 3) % 7]
// ];

// let day = days[currentDayIndex];

// console.log("Today is: " + day);
// console.log("Previous two days: " + previousTwoDays.join(", "));
// console.log("Next three days: " + nextThreeDays.join(", "));
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let myDate = new Date();
let currentDayIndex = myDate.getDay();

let previousTwoDays = [];
let nextThreeDays = [];

// Calculate previous two days
for (let i = 2; i > 0; i--) {
    let prevIndex = (currentDayIndex - i + 7) % 7;
    previousTwoDays.push(days[prevIndex]);
}

// Calculate next three days
for (let i = 1; i <= 3; i++) {
    let nextIndex = (currentDayIndex + i) % 7;
    nextThreeDays.push(days[nextIndex]);
}

let day = days[currentDayIndex];

console.log("Today is: " + day);
console.log("Previous two days: " + previousTwoDays.join(", "));
console.log("Next three days: " + nextThreeDays.join(", "));
