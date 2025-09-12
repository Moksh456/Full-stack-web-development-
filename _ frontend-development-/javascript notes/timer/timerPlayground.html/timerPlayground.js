 // snipet 1
// const id = setTimeout(()=>{
// console.log("hello everyone...")
// }, 1000)

// clearTimeout(id)

  
// snipet 2

/*const id = setTimeout(() => {
    console.log("hello everyone...")
}, 1000); 

console.log("hello world"); 

*/

/*  
 observation :
    in snipet 1, we are calling clearTimeout, therefore Callback function inside 
    settimeout will never get a chance to run.
    // snipet 2

    const id = setTimeout(() => {
    console.log("hello everyone...")
    }, 1000);

    console.log("hello world");

    in snipet 2, there is weired thing happening i.e even when we give time duration 
    of settimeout as 0 still its callback is executed after line no 11. 

    Ideally it feels like code execution of callback function should be first and then,
    line no. 11 should be executed ---   BUT ITS NOT THE CASE.

     Why ? why it is so weired?
     all these weired things can be better explained with the 

     IT IS BECAUSE OF EVENT LOOP.

     WEB API LIKE SETTIMEOUT, SETINTERVAL, ETC take callbacks and are executed whenever certain time is elapsed.
     but here we need to be mindfull of how js internally works i.e event loop in action of all the time.
     all these callbacks  (after given time is elaspsed)...sit inside callback queue and 
     wait for execution stack to be empty...
     Therefore there is conclusion that can be made -->
     Any synchronous piece of code will always be executed first since it directly goes into execution stack...but callbacks retalted to timers will sit inside callback 
     queue and wait for execution stack to be empty.
     Therefore in snipet 2, line no 11 is synchronous code and directly goes into execution stack
     and executed first...and only after that callback of settimeout is executed.
*/

/*

let flag  = true;
let i = 0;

while (flag){
}
 
setTimeout(() => {
    flag = false;
}, 1000) 

warning:-  do not 
run this code for the any reason

*/