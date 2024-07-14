
let isNoticed = true;
let isLiked = true;
let isOrdered = true;
let isCooking = true;
let isDeliverd = false;

function callWaiter(callback) {
    console.log("calling waiter...");
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if(isNoticed) {
                // callback();
                resolve();
            }
            else{
                // console.log("waiter didn't notice.")
                reject("waiter didn't notice.")
            }
        },2000)
    })
    return promise;
    
}
function orderFood(callback) {
    console.log("order placed...");

    const promise = new Promise(function(resolve, reject) {

        setTimeout(function(){
            if(isLiked) {
                // callback()
                resolve();
            }
            else{
                // console.log("didn't like food.")
                reject("didn't like food.")
            }
        },2000)
    })
    return promise;
}
function informChef(callback) {
    console.log("informing chef...");

    const promise = new Promise(function(resolve, reject) {

        setTimeout(function(){
            if(isOrdered) {
                // callback()
                resolve();
            }
            else {
                // console.log("didn't ordered")
                reject("didn't ordered")
            }
        },2000)
    })
    return promise;
}
function cookFood(callback) {
    console.log("foods are cooking...");

    const promise = new Promise(function(resolve, reject) {

        setTimeout(function(){
            if(isCooking) {
                // callback();
                resolve();
            }
            else {
                // console.log("cooking stuff not available")
                reject("cooking stuff not available")
            }
        },2000)
    })
    return promise;
}
function deliverFood() {
    console.log("delivering food...");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(isDeliverd) {
                resolve("food delivered")
            }
            else{
                reject("take some more time")
            }
        },2000)
    })
    return promise;
}

// callWaiter(orderFood);
// orderFood(informChef);
// informChef(cookFood);
// cookFood(deliverFood);
// deliverFood();



// callWaiter(function() {
//     orderFood(function() {
//         informChef(function() {
//             cookFood(deliverFood) 
//         })
//     })
// })


callWaiter() 
    .then(orderFood)
    .then(informChef)
    .then(cookFood)
    .then(deliverFood)
    .then(function(res) {
        console.log(res)
    })
    .catch(function(err) {
        console.log(err);
    })