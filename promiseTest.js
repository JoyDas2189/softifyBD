// Without Promise. Also called as callback hell...
/* 
const madePayment = true;
const marks = 70;
const certified = true;

function enroll(callback) {
    console.log("Enrollment Process Ingoing...");

    setTimeout(function(){
        if(madePayment){
            callback();
        }
        else {
            console.log("You Have to complete your payment.")
        }
    }, 2000)
}

function progress(callback) {
    console.log("Course Progess Going On...");

    setTimeout(function() {
        if(marks >= 80) {
            callback()
        }
        else {
            console.log("Your Marks is Too Low");
        }
    }, 3000)
}

function certification (callback) {
    console.log("Certification Process Ongoing....");

    setTimeout(function(){
       if(certified) {
        console.log("Congratulation!!. Move forward to get a job");
        callback();
       } 
       else{
        console.log("You Didn't Got the Certificate.");
       }
    },2000)
}

function findingJob () {
    console.log("Job Finding Process Ongoing...");

    setTimeout(function(){
        console.log("You Got a Job");
    },3000)
}

enroll(function() {
    progress(function(){
        certification(findingJob);
    })
})
 */

// with Promise..
/* 
const madePayment = true;
const marks = 80;
const certified = true;
const properInterview = true;

//creating Promise..
function enroll () {
    console.log("Enrollment Process Ongoing...")
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function(){
            if(madePayment){
                resolve();
            }
            else {
                reject("You Have To Enroll For This Course.");
            }
        }, 3000)
    })
    return promise;
}
function progress () {
    console.log("Progress Process Ongoing...");

    const promise = new Promise (function (resolve, reject) {
        setTimeout(function () {
            if(marks >= 80) {
                resolve()
            }
            else {
                reject("You Mark Is Not Satisfactory.")
            }
        }, 3000)
    })
    return promise;
}

function certification () {
    console.log("Certification Process Ongoing...");

    const promise = new Promise (function (resolve, reject) {
        setTimeout(function () {
            if(certified) {
                resolve("Congratulations!! You Got a Job.");
            }
            else {
                reject("You Haven't got The Certificate Yet.")
            }
        }, 3000)
    })
    return promise;
}

function findingJob () {
    console.log("Finding Job Process Ongoing...");

    const promise = new Promise (function (resolve, reject) {
        setTimeout(function() {
            if(properInterview) {
                resolve("Congrats!! You Got A Job.");
            }else{
                reject("Better Luck Next Time.")
            }
        },3000 )
    }) 
    return promise;
}

// calling Promise..

enroll()
    .then(progress)
    .then(certification)
    .then(findingJob)
    .then(function(value) {
        console.log(value)
    })
    .catch(function(err){
        console.log(err);
    }) */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let isNoticed;
let isLiked;
let isOrdered;
let isCooking;
let isDelivered;

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function getInputs() {
    isNoticed = (await askQuestion('Is the waiter noticed? (true/false): ')).toLowerCase() === 'true';
    isLiked = (await askQuestion('Is the food liked? (true/false): ')).toLowerCase() === 'true';
    isOrdered = (await askQuestion('Is the food ordered? (true/false): ')).toLowerCase() === 'true';
    isCooking = (await askQuestion('Is the food cooking? (true/false): ')).toLowerCase() === 'true';
    isDelivered = (await askQuestion('Is the food delivered? (true/false): ')).toLowerCase() === 'true';
}

function callWaiter() {
    console.log("calling waiter...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isNoticed) {
                resolve();
            } else {
                reject("waiter didn't notice.");
            }
        }, 2000);
    });
}

function orderFood() {
    console.log("order placed...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isLiked) {
                resolve();
            } else {
                reject("didn't like food.");
            }
        }, 2000);
    });
}

function informChef() {
    console.log("informing chef...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isOrdered) {
                resolve();
            } else {
                reject("didn't order.");
            }
        }, 2000);
    });
}

function cookFood() {
    console.log("foods are cooking...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isCooking) {
                resolve();
            } else {
                reject("cooking stuff not available.");
            }
        }, 2000);
    });
}

function deliverFood() {
    console.log("delivering food...");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isDelivered) {
                resolve("food delivered.");
            } else {
                reject("take some more time.");
            }
        }, 2000);
    });
}

async function main() {
    await getInputs();
    rl.close();

    callWaiter()
        .then(orderFood)
        .then(informChef)
        .then(cookFood)
        .then(deliverFood)
        .then(function (res) {
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
}

main();
