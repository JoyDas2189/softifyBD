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
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let myDate = new Date();
// let currentDayIndex = myDate.getDay();

// let previousTwoDays = [];
// let nextThreeDays = [];

// // Calculate previous two days
// for (let i = 2; i > 0; i--) {
//     let prevIndex = (currentDayIndex - i + 7) % 7;
//     previousTwoDays.push(days[prevIndex]);
// }

// // Calculate next three days
// for (let i = 1; i <= 3; i++) {
//     let nextIndex = (currentDayIndex + i) % 7;
//     nextThreeDays.push(days[nextIndex]);
// }

// let day = days[currentDayIndex];

// console.log(`${previousTwoDays}, ${day}, ${nextThreeDays}`)
/* 
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let myDate = new Date();
let current = myDate.getMonth(); // 0-based index for months

let previous = [];
let previousIndex = 0;
let next = [];
let nextIndex = 0;

// Calculate previous two months
for (let i = 2; i > 0; i--) {
  let prevMonthIndex = (current - i + 12) % 12;
  // previous.push(months[prevMonthIndex]);
  previous = months[prevMonthIndex];
  prevMonthIndex++;
}

// Calculate next three months
for (let i = 1; i <= 3; i++) {
  let nextMonthIndex = (current + i) % 12;
//   next.push(months[nextMonthIndex]);
next = months[nextMonthIndex];
nextMonthIndex++;
}

let currentMonth = months[current];

console.log(`${previous}, ${currentMonth}, ${next}`);
 */

function calculateAgeAndNextBirthday(birthdate) {
  let birthDate = new Date(birthdate);
  let today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0 && days < 0) {
    age--;
  }
  let nextBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  let remainingTime = nextBirthday - today;
  let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let remainingMonths = nextBirthday.getMonth() - today.getMonth();
  if (remainingMonths < 0) {
    remainingMonths += 12;
  }
  if (today.getDate() > birthDate.getDate()) {
    remainingMonths--;
  }

  return {
    age: age,
    remainingDays: remainingDays,
    remainingMonths: remainingMonths,
  };
}

let birthdate = "1990-07-20";
let result = calculateAgeAndNextBirthday(birthdate);
console.log(
  `Age: ${result.age}, Remaining days: ${result.remainingDays}, Remaining months: ${result.remainingMonths}`
);
