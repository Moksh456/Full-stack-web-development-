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

/*const callback = (resolve, reject) => {

    // here some heavylifting task might be going on 
    // like getting data form somewhere 
    // like heavy I/D
    // like doing a for loop over millions of elements... that will take sometime
    // in order to mimic that time...lets implement settimeout 

    setTimeout(() => {
        resolve({
            name: "sharad", 
            age: 24
        });
    }, 4000);
}
*/
// above callback will be called imediately.
// Note: provided execution stack is empty.
// Initially promise state is  PENDING  and promise data undefined

// here resolve and reject are functions that should be called inside this 
// callback function whenever we want to change state of promise form pending to 
// fullfilled or pending to reject

// While changing state of promise to FULLFILLED i.e calling resolve function 
// whenever data we supply to resolve function will be set inside promise data.

// let res = new Promise(callback);


/*
console.log(res);

res.then((data) => {
    console.log("Its done");
    console.log(data);  
}).catch(err => {
    console.log("CAtch Fire")
    console.log(err)
}).finally(()=>{
    console.log("Finally callback function function fired ")
});
*/
// How do we know when promise state of promise changes ?
// problem Statement: After Promise is fullfilled/resolved...I want to
// console.log("Its done")

// ________________________________________________________________________________

// CAll API https://jsonplaceholder.typicode.com/

 // Get Api Call
 /* 
 const result = fetch("https://jsonplaceholder.typicode.com/todos/1");
 
result.then((Response)=>{
 const jsonobj =  Response.json();
 jsonobj.then(jsonREsult => {
    console.log(jsonREsult);
 })
});
*/

 /*const result = fetch("https://jsonplaceholder.typicode.com/todos/1",{
 //   headers: {
   //     "X-dummy_value": "sharad"
 //},
    method: "POSt",
    body: JSON.stringify({
        name: "sharad",
    })
});


 result.then(value => value.json()).then(json => {
    console.log(json);
 });
*/


 const requwst = new XMLHttpRequest();

 requwst.open("GET","https://jsonplaceholder.typicode.com/todos")

    requwst.send();
    
 //requwst.addEventListener("load",()=>{
   // console.log("i ran!!!!!!")
 //});