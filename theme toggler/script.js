// task is simple when the we want to change the theme of the page then we will also need to recover the previous theme 


let btn = document.querySelector("button");
let main = document.querySelector("#container");


function applyClass(){

   
}

btn.addEventListener("click", function(){
    
    main.classList.remove("light")
    main.classList.add("dark")

})

