
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


// 2.

// function ageCalculate (birthDateInput) {
//     let birthDate = new Date(birthDateInput);
//     let today = new Date();

//     let age = today.getFullYear() - birthDate.getFullYear();
//     let months = today.getMonth() - birthDate.getMonth();
//     let days = today.getDate() - birthDate.getDate()

//     if(months < 0 && days < 0) {
//         age--;
//     }

//     return age;
// }
// console.log(`${ageCalculate('1999-10-27')} years old.`); 



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


// let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// let d = new Date();
// let day = days[d.getDay()];


// console.log(days);

// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
// let month = months[d.getMonth()];
// console.log(month)

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let myDate = new Date();
let day = days[myDate.getDay()];

console.log(day);