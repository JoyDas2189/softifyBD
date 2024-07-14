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


// function calculateBirthday(day) {
//     let birthDay = new Date(day);
//     let today = new Date();

//     let age = today.getFullYear() - birthDay.getFullYear();
//     let months = today.getMonth() - birthDay.getMonth();
//     let days = today.getDate() - birthDay.getDate();

//     // Adjust age if birthday hasn't occurred yet this year
//     if (months < 0 || (months === 0 && days < 0)) {
//       age--;
//     }

//     // Calculate next birthday
//     let nextBirthday = new Date(today.getFullYear(), birthDay.getMonth(), birthDay.getDate());
//     if (today > nextBirthday) {
//       nextBirthday.setFullYear(today.getFullYear() + 1);
//     }

//     let remainingTime = nextBirthday - today;
//     let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

//     // Calculate remaining months
//     let remainingMonths = nextBirthday.getMonth() - today.getMonth();

//     if (remainingDays > new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()) {
//         remainingMonths++;
//         remainingDays -= new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
//       }

//     return {
//       age,
//       remainingMonths,
//       remainingDays
//     };
//   }

//   let day = '1999-10-27';
//   let birthDayOutput = calculateBirthday(day);
//   console.log(`${birthDayOutput.age} years old. ${birthDayOutput.remainingMonths} months, ${birthDayOutput.remainingDays} days until next birthday.`);

// function calculateBirthday(day) {
//   let birthDay = new Date(day);
//   let today = new Date();

//   let age = today.getFullYear() - birthDay.getFullYear();
//   let months = today.getMonth() - birthDay.getMonth();
//   let days = today.getDate() - birthDay.getDate();

//   // Adjust the age if the birthday hasn't occurred yet this year
//   if (months < 0 || (months === 0 && days < 0)) {
//       age--;
//   }

//   let nextBirthdayYear = today.getFullYear();
//   if (months > 0 && days > 0) {
//       nextBirthdayYear++;
//   }

//   let nextBirthday = new Date(nextBirthdayYear, birthDay.getMonth(), birthDay.getDate());
//   let remainingTime = nextBirthday - today;
//   let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

//   let remainingMonths = Math.floor(remainingDays / 30); 
//   remainingDays %= 30;

//   return {
//       age,
//       remainingMonths,
//       remainingDays
//   };
// }

// let day = '1999-10-27';
// let birthDayOutput = calculateBirthday(day);
// console.log(`${birthDayOutput.age} years old. ${birthDayOutput.remainingMonths} months, ${birthDayOutput.remainingDays} days until next birthday.`);

// function calculateBirthday(day) {
//     let birthDay = new Date(day);
//     let today = new Date();

//     let age = today.getFullYear() - birthDay.getFullYear();
//     let months = today.getMonth() - birthDay.getMonth();
//     let days = today.getDate() - birthDay.getDate();

//     // Adjust the age if the birthday hasn't occurred yet this year
//     if (months < 0 || (months === 0 && days < 0)) {
//         age--;
//     }

//     let nextBirthdayYear = today.getFullYear();
//     if (months > 0 || (months === 0 && days > 0)) {
//         nextBirthdayYear++;
//     }

//     let nextBirthday = new Date(nextBirthdayYear, birthDay.getMonth(), birthDay.getDate());
//     let remainingTime = nextBirthday - today;
//     let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

//     let remainingMonths = Math.floor(remainingDays / 30);  // Rough estimation of months
//     remainingDays %= 30;

//     return {
//         age,
//         remainingMonths,
//         remainingDays
//     };
// }

// let day = '1999-11-27';
// let birthDayOutput = calculateBirthday(day);
// console.log(`${birthDayOutput.age} years old. ${birthDayOutput.remainingMonths} months, ${birthDayOutput.remainingDays} days until next birthday.`);


// function calculateBirthday() {
//     let day = prompt("Enter your birthdate (YYYY-MM-DD):");
//     if (!day) return; // Exit if no input

//     let birthDay = new Date(day);
//     let today = new Date();

//     let age = today.getFullYear() - birthDay.getFullYear();
//     let months = today.getMonth() - birthDay.getMonth();
//     let days = today.getDate() - birthDay.getDate();

//     if (months < 0 || (months === 0 && days < 0)) {
//         age--;
//     }

//     let nextBirthdayYear = today.getFullYear();
//     if (months > 0 || (months === 0 && days > 0)) {
//         nextBirthdayYear++;
//     }

//     let nextBirthday = new Date(nextBirthdayYear, birthDay.getMonth(), birthDay.getDate());
//     let remainingTime = nextBirthday - today;
//     let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//     let remainingMonths = Math.floor(remainingDays / 30);
//     remainingDays %= 30;

//     if (remainingDays > new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()) {
//         remainingMonths++;
//         remainingDays -= new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
//     }

//     console.log(`${age} years old. ${remainingMonths} months, ${remainingDays} days until next birthday.`);
// }
