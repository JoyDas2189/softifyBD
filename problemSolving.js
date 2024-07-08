// 1.
/* 
function test(parameterValue) {
    console.log('Hello World!\n' + parameterValue);
}

test("Welcome to 10 Days of JavaScript!");
 */

// 2. 

/* 
function performOperation (secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    // const intParsed = parseInt(firstInteger);
    // const fltFarsed = parseFloat(firstDecimal);

    const intSum = firstInteger + parseInt(secondInteger);
    const fltSum = firstDecimal + parseFloat(secondDecimal);
    const strConcat = firstString.concat(secondString);

    console.log(intSum + "\n" + fltSum + "\n" + strConcat);
}

performOperation(12, 4.32, 'is the best place to learn and practice coding!');
 */

// 3.
/* 
 function getArea(length, width) {
    let area;
    area = length * width;
    
    return area;
}
console.log(getArea(3, 4.5));

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width);
    
    return perimeter;
}
console.log(getPerimeter(3, 4.5)); 
*/

// 4.
/* 
function factorial (a) {
    let fact = 1;
    for(let i = 1; i <= a; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(4)); 
*/

// 5.

/* 
function main() {
    const PI = Math.PI;
    let r = parseFloat(readLine());
    let area = PI * Math.pow(r,2);
    console.log(area);
    
    var perimeter = 2 * PI * r;
    console.log(perimeter);
}
 */

//6.

/* 
function getGrade(score) {
    let grade;

    if(score > 25 && score <=30) {
        return "A";
    }else if(score > 20 && score <= 25) {
        return "B";
    }
    else if(score > 15 && score <= 20){
        return "C";
    }
    else if(score > 10 && score <= 15) {
        return "D";
    }
    else if(score > 5 && score <= 10) {
        return "e"
    }
    else return "F";
    

    
    return grade;
}

console.log(getGrade(11));
 */

// 7.

/* 
function getLetter(s) {
    let letter;
    switch(s.charAt(0)){
        case('a' || 'e' || 'i' || 'o' || 'u'):
        letter = "A";
        break;

        case('b' || 'c' || 'f' || 'g'):
        letter = "B";
        break;

        case('h' || 'k' || 'j' || 'l' || 'm'):
        letter = "C";
        break;

        default:
        letter = "D";
        break;
    }
    
    return letter;
}


console.log(getLetter('adfgt'));

 */

// 8. 

// function getSecondLargest(nums) {
//     for(let i = 0; i < nums.lenght; i++){
//         for(let j = 0; j < nums.lenght-1; j++) {
//             if(nums[j] > nums[j+1]) {
//                 let temp = nums[j];
//                 nums[j] = nums[j+1];
//                 nums[j+1] = temp;
//             }
//         }
//     }
//     return nums;

// }
// let values = [3, 1, 5, 2, 6]
// console.log(getSecondLargest(values));


/* 
function getSecondLargest(nums) {
    const sorted = nums.sort((a,b) => a - b );
    const uniqueSorted = [...new Set(sorted)];
    return uniqueSorted[uniqueSorted.length - 2];
} 
console.log(getSecondLargest([2,3,6,6,5])); 
 */



const uniqueGenerator = (arr) => {
    let uniqueArray = [];
    let uniqueArrayIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray[uniqueArrayIndex] = arr[i];
            uniqueArrayIndex++;
        }
    }
    for(let j = 0; j < uniqueArray.length; j++) {
        for(let k = 0; k < uniqueArray.length-1; k++) {
            if(uniqueArray[k] > uniqueArray[k+1]) {
                let temp = uniqueArray[k];
                uniqueArray[k] = uniqueArray[k+1];
                uniqueArray[k+1] = temp;
            }
        }
    }
    

    return uniqueArray;
}

let value = [2,3,6,6,5];
console.log(uniqueGenerator(value));
 