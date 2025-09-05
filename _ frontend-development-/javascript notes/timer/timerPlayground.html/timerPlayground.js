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
    in snipet 1, we are calling clearTimeout, therefore Callback function inside settimeout will never get a chance to run.
    // snipet 2

    const id = setTimeout(() => {
    console.log("hello everyone...")
    }, 1000);

    console.log("hello world");

    in snipet 2, there is weired thing happening i.e even when we give time duration of settimeout as 0 still its callback is executed after line no 11. 

    Ideally it feels like code execution of callback function should be first and then,
    line no. 11 should be executed ---   BUT ITS NOT THE CASE.

     Why ? 
     all these weired things can be better explained with the 

*/

/*

let flag  = true;
let i = 0;

while (flag){
    i++;
    console.log(i);
}

setTimeout(() => {
    flag = false;
}, 1000)

warning:-  do not 
run this code for the any reason

*/