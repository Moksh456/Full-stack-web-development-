let addbtn = document.querySelector(".add-btn");

let inputs = document.querySelector(".inputs");
let cardsStack = document.querySelector(".card-stack")
let form = document.querySelector("form")
let users = [];
let currentIndex = 0;

function savedata(){

}


    addbtn.addEventListener("click", function (){
    if (addbtn.innerHTML === "+") {
        addbtn.innerHTML = "x"
        inputs.classList.remove("hide")
        cardsStack.classList.add("hide");
    } else {
        addbtn.innerHTML = "+"
        inputs.classList.add("hide")
        cardsStack.classList.remove("hide");
    }
})


function makingCards(){

// sotre value of inputs

form.addEventListener("submit", function(e){
    event.preventDefault();
    
    let person = {
        name: form.querySelector(".name").value,
        position: form.querySelector(".position").value,
        purpose: form.querySelector(".purpose").value,
        inmageurl: form.querySelector(".image-url").value
    }

    users.push(person);
    currentIndex = users.length - 1;

    form.reset();
})


}

makingCards();