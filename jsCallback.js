/* 
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(10, 5);
myDisplayer(result);
 */

/* 
function myDisplayer (some) {
    document.getElementById('demo').innerHTML=some;
}
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}
myCalculator(10, 10); 
*/

// Using Callback function
/* 
function displayer (some) {
    document.getElementById('demo').innerHTML = some;
}

function calculator (num1, num2, callback) {
    let mult = num1 * num2;
    callback(mult);
}

calculator(10, 7, displayer); */


// diplaying First name and last name 
/* 
function display (display) {
  document.getElementById('demo').innerHTML = display;
}

function fullnamegenerator (firstName, lastName, callback) {
  let fullName = firstName +" " +lastName;
  callback(fullName);
}

fullnamegenerator('Joy','Das', display); */

