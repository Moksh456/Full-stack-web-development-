// task is simple when the we want to change the theme of the page then we will also need to recover the previous theme 


let btn = document.querySelector("button");
let main = document.querySelector("#container");


function applyClass(){

    if(main.classList.value === "light"){
        localStorage.setItem("theme", "dark")
    }else{
        localStorage.setItem("theme", "light")
    }
   
}

btn.addEventListener("click", function(){
    
})

applyClass();