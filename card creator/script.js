

let input = document.querySelector("form");


input.addEventListener("submit", function(Eve){
    Eve.preventDefault();
    console.log(input[0].value);  
let h2 = document.createElement("h2")
let h5 = document.createElement("h5")
let p = document.createElement("p")
let profilepic = document.createElement("div")
let img = document.createElement("img");
    profilepic.appendChild(img);
    img.setAttribute("src", input[3].value);

    let card = document.createElement("div");
    card.className = "card";  

    card.appendChild(profilepic);
    card.appendChild(h2);
    card.appendChild(h5);
    card.appendChild(p);
    

    document.querySelector(".doc").appendChild(card);

    h2.innerText = input[0].value;
    h5.innerText = input[1].value;
    p.innerText = input[2].value;

    input.reset();
})
