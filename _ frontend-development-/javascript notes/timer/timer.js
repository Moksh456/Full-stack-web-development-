// Selectors
 const displayeleme = document.querySelector('.displayvalue');
 const btnstart = document.querySelector('#start');
    const btnend = document.querySelector('#stop');

let i = 0;
/*btnstart.addEventListener("click", (event)=>{
    // here on click we need to make use in built called setIterval
    // setInterval(){ , x} -> After every duration of X milisecond
    // please run this <callback_func> 

   timerid = setInterval(()=>{
        i++; 
        displayeleme.innerHTML = i;
    }, 1000)


})
btnend.addEventListener("click", ()=>{
//    clearInterval(<ID>) here <ID> refers to id we got as return value from 
//    setInterval API

    clearInterval(timerid); 
    i = 0;
})
*/


btnstart.addEventListener("click", (event)=>{
    // here on click we need to make use in built called setIterval
    // setInterval(){ , x} -> After every duration of X milisecond
    // please run this <callback_func> 

   timerid = setTimeout(()=>{
        i++;
        displayeleme.innerHTML = i;
    }, 1000)


})
btnend.addEventListener("click", ()=>{
//    clearInterval(<ID>) here <ID> refers to id we got as return value from 
//    setInterval API
clearTimeout(timerid); 
    i = 0;
})