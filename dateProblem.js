// 1.

/* let myDate = new Date();

let prevDays = new Date()
let prev2Days = new Date()
let nextDate = new Date()
let next2Date = new Date()
let next3Date = new Date()


prev2Days.setMonth(prev2Days.getMonth() -2);
let prev2DaysFormat = prev2Days.toLocaleString('default', {
    month:"long"
});
prevDays.setMonth(prevDays.getMonth() -1);
let prevDaysFormat = prevDays.toLocaleString('default', {
    month:"long"
});
let myDateFormat = myDate.toLocaleString('default', {
    month: "long"
});

nextDate.setMonth(nextDate.getMonth() + 1);
let newDateFormat = nextDate.toLocaleString('default', {
    month: "long"
})
next2Date.setMonth(next2Date.getMonth() + 2);
let newDate2Format = next2Date.toLocaleString('default', {
    month: "long"
})
next3Date.setMonth(next3Date.getMonth() + 3);
let newDate3Format = next3Date.toLocaleString('default', {
    month: "long"
})


console.log(prev2DaysFormat +" " +  prevDaysFormat +" "+ myDateFormat + " " + newDateFormat + " " + newDate2Format + " " + newDate3Format);
  */

// let months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let myDate = new Date();
// let current = myDate.getMonth();

// let previous = [];
// let previousIndex = 0;
// let next = [];
// let nextIndex = 0;

// let currentMonth = months[current];

// for (let i = 2; i > 0; i--) {
//   let prevMonthIndex = (current - i);
//   previous[previousIndex] = months[prevMonthIndex];
//   previousIndex++;
// }

// for (let i = 1; i <= 3; i++) {
//   let nextMonthIndex = (current + i);
//   next[nextIndex] = months[nextMonthIndex];
//   nextIndex++;
// }

// console.log(`${previous}, ${currentMonth}, ${next}`);

// 2.

// 
// 3.

// let myDate = new Date();
// let today = myDate.getDay();

// let firstDay = new Date();
// firstDay.setDate(myDate.getDate() - today);

// let lastDay = new Date();
// lastDay.setDate(myDate.getDate() + (6 - today));

// let firstDayFormat = firstDay.toLocaleString('default', {
//     weekday: "long"
// });
// let lastDayFormat = lastDay.toLocaleString('default', {
//     weekday:"long"
// });

// console.log(firstDayFormat);
// console.log(lastDayFormat);

// 4.

/* 
const lastElementLenght = (str) => {
    let lenght = 0;
    let word = false; 
    for(let i = str.length-1; i >= 0; i--) {
        if(str[i] !== ' ') {
            word = true;
            lenght++;
        }
        else break;
    }
    return lenght;
}
console.log(lastElementLenght("Hello World"));
 */

// let myDate = new Date()
// let today = myDate.toLocaleString('default', {
//     weekday:"long"
// });

// let yesterDay = new Date();
// yesterDay.setDate(yesterDay.getDate() - 1);
// let yesterDayFormat = yesterDay.toLocaleString('default', {
//     weekday: "long"
// })

// console.log(today);
// console.log(yesterDayFormat);


// / function calculateBirthday(day) {
//     let birthDay = new Date(day);
//     let today = new Date();

//     let age = today.getFullYear() - birthDay.getFullYear();
//     let months = today.getMonth() - birthDay.getMonth();
//     let days = today.getDate() - birthDay.getDate();

//     if (months < 0 && days < 0) {
//       age--;
//     }
//     let nextBirthday = new Date(
//       today.getFullYear(),
//       birthDay.getMonth(),
//       birthDay.getDate()
//     );

//     let remainingTime = nextBirthday - today;
//     let remainingMonths = nextBirthday.getMonth() - today.getMonth();
//     let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

//     return {
//       age,remainingMonths, remainingDays
//     };
//   }

//   let day = ('1999-10-27');
//   let birthDayOutput = calculateBirthday(day);
//   console.log(`${birthDayOutput.age} years old. ${birthDayOutput.remainingMonths} months, ${birthDayOutput.remainingDays} days ultil next birthday.`);


// function calculateBirthday() {
//   let birthDay = new Date(day);
//   let today = new Date();

//   let age = today.getFullYear() - birthDay.getFullYear();
//   let months = today.getMonth() - birthDay.getMonth();
//   let days = today.getDate() - birthDay.getDate();

//   if (months < 0 && days < 0) {
//     age--;
//   }
//   let nextBirthday = new Date(
//     today.getFullYear(),
//     birthDay.getMonth(),
//     birthDay.getDate()
//   );

//   let remainingTime = nextBirthday - today;
//   let remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//   let remainingMonths = Math.floor(remainingDays / 30);
//   remainingDays = remainingDays % 30;

//   return {
//     age, remainingMonths, remainingDays
//   };
// }
// let day = prompt("Enter your dob");
// let birthDayOutput = calculateBirthday(day);
// console.log(`${birthDayOutput.age} years old. ${birthDayOutput.remainingMonths} months, ${birthDayOutput.remainingDays} days ultill next birthday.`);

function areaConverter (lenght, width) {
  let r = prompt("enter the value of r");

  let area = lenght * width;
  return area;
}
areaConverter(r);