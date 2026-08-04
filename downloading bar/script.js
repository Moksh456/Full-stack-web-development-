
let width = 0;
let bar = document.querySelector(".process");

let time = setInterval( function(){
    if (width <= 99) {
         width++;
         bar.style.width = `${width}%`
         document.querySelector(".precentage").textContent = `${width}%`
    }else{
        clearInterval(time)
    }
    console.log(width)
}, 100)

