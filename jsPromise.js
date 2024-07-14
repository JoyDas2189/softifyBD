

// Creating Promise and resolve it immidiately

// const promise = new Promise(function(resolve) {
//     setTimeout(function(){
//         resolve('resolved');
//     },1000)
// })
// promise
//     .then(function(res){
//         console.log(res);
//     })


// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Resolved');
//     },2000)
// })

// promise
//     .then(function(res) {
//         console.log(res)
//     },function(err) {
//         console.log(err);
//     })

// promise 
//     .catch(function(err) {
//         console.log(err)
//     });
// promise
//     .finally(function() {
//         console.log("finally");
//     })


// function samplePromise () {
//     const promise = new Promise(function(resolve) {
//         setTimeout(function(){
//             resolve("Hello World")
//         },2000);
//     })
//     return promise;
// }
// samplePromise()
//     .then(function(res) {
//         console.log(res);
//     })

// function fetchDate () {
//     const promise = new Promise(function(resolve) {
//         setTimeout(function(){
//             resolve({
//                 name: "joy",
//                 age: 24
//             })
//         },1000)
//     })
//     return promise;
// }

// fetchDate() 
//     .then(function(res) {
//         console.log(res);
//     })

// function fetchUserAndPosts() {
//     const promise = new Promise(function(resolve) {
//         setTimeout(function(){
//             const info = {
//                 name: "Joy",
//                 id: 1 
//             }
//             resolve(info)
//         },2000)
//     }).then(function() {
//         return new Promise(function(resolve) {
//             setTimeout(function(){
//                 const post = ['post 1', 'post 2'];
//                 resolve(post)
//             },2000)
//         })
//     })
//     return promise;
// }

// fetchUserAndPosts() 
//     .then(function(res) {
//         console.log(res)
//     })


// function errorHandlingPromise() {
//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             reject("Something went wrong");
//         }, 2000)
//     })
//     return promise;
// }
// errorHandlingPromise()
//     .then(function(res) {
//         console.log(res);
//     })
//     .catch(function(err){
//         console.log(err)
//     })


