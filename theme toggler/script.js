// task is simple when the we want to change the theme of the page then we will also need to recover the previous theme 


let btn = document.querySelector("button");
let main = document.querySelector("#container");


function applyClass(){

    if(main.classList.value === "light"){
        main.classList.remove(localStorage.getItem("theme"))
        localStorage.setItem("theme", "dark")
        main.classList.add(localStorage.getItem("theme"))

    }else{
        main.classList.remove(localStorage.getItem("theme"))
        localStorage.setItem("theme", "light")
        main.classList.add(localStorage.getItem("theme"))
    }

}

btn.addEventListener("click", function(){

    if(main.classList.value === ""){
        main.classList.add(localStorage.getItem("theme"))
    }else{
        applyClass();
    }

})


function checkthetheme(){
        if(main.classList.value === ""){
        main.classList.add(localStorage.getItem("theme"))
    }else{
        applyClass();
    }
}

checkthetheme();