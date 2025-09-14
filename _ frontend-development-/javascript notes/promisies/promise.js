/*
const res = new Promise((resolve, reject) => {;
// nimic async flow via settimeout API

    setTimeout(() => {
       resolve("Promise resolved");
    }, 4000);
});

console.log(res);

*/

// How to create Promise by ourself?
    
const callback = (resolve, reject) =>{
    reject("Promise resolved");
    // here some heavylifting task might be going on 
    // like getting data form somewhere 
    // like heavy I/D
    // like doing a for loop over millions of elements... that will take sometime
    // in order to mimic that time...lets implement settimeout 

    setTimeout(() => {
        resolve("Promise resolved");
    }, 4000);
}

// above callback will be called imediately.
// Note: provided execution stack is empty.
// Initially promise state is  PENDING  and promise data undefined
 
// here resolve and reject are functions that should be called inside this 
// callback function whenever we want to change state of promise form pending to 
// fullfilled or pending to reject

// While changing state of promise to FULLFILLED i.e calling resolve function 
// whenever data we supply to resolve function will be set inside promise data.

let res = new Promise(callback);


console.log(res); 

// How do we know when promise state of promise changes ?
// problem Statement: After Promise is fullfilled/resolved...I want to 
// console.log("Its done")

