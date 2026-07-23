/* let a = document.querySelector("input");   

a.addEventListener("input", function(eve){
    if (eve.data !== null) {
        console.log(eve.data)
    }     
})*/

/*let h1 = document.querySelector("h1");

let doc = document.querySelector("select");
  
doc.addEventListener("change", function(eve){
    console.log(eve.target.value);

    h1.innerText = `You have selected ${eve.target.value} device`;
})*/

/* let h1 = document.querySelector("h1")

window.addEventListener("keyup", function(eve){
   if(eve.key === " "){
    h1.innerText = "space"
   }else{
     h1.innerText = eve.key;
   }
}) */

/*  let btn = document.querySelector("button");
  let input = document.querySelector("input")

  btn.addEventListener("click", function(){
   input.click();
  })

  input.addEventListener("change", function(eve){
   console.log(`'${eve.target.files[0].name}' was selected successfully`);
   btn.innerText = eve.target?.files[0].name + "  SELECTED";
  })*/

/* let input = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", function (Eve) {
    Eve.preventDefault();
    CardMaker();
});

function CardMaker(nothing) {

    let card = document.createElement("div");
    card.className = "card";

    let profile = document.createElement("div");
    profile.className = "profile";

    let img = document.createElement("img");
    img.src = input[3].value;

    let h3 = document.createElement("h3");
    h3.className = "h3";

    let h5 = document.createElement("h5");
    h5.className = "h5";

    let p = document.createElement("p");
    p.className = "p";

    h3.innerText = input[0].value;
    h5.innerText = input[1].value;
    p.innerText = input[2].value;

    profile.appendChild(img);

    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    document.querySelector(".main").appendChild(card);

    form.reset();
}

// to make the card its imp part of the project

/*
<div class="card">
    <div class="profile">
        <img src="moksh.jpg" alt="">
    </div>
    <h3>moksh sharma</h3>
    <h5>creative coder</h5>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consectetur sit sed laboriosam repellat autem labore quod quos veritatis neque, itaque id magnam.</p>
</div>*/



/* document.querySelector(".abc").addEventListener("mouseover" ,  function(eve){
    document.querySelector(".abc").style.backgroundColor = "yellow";
});



document.querySelector(".abc").addEventListener("mouseout" ,  function(eve){
    document.querySelector(".abc").style.backgroundColor = "red";
});

let abc =  document.querySelector(".abc");

this.addEventListener("mousemove", function(eve){
    console.log(eve.clientX , eve.clientY);
    console.log();

     let  width = abc.clientWidth / 2 
     let height =  abc.clientHeight / 2

    abc.style.top = eve.clientY - width + "px" ;
    abc.style.left = eve.clientX - height + "px"
})
*/


let a = document.querySelector(".a")
let b = document.querySelector(".b")
let c = document.querySelector(".c")
let btn = document.querySelector("button")


// phele capture face chalta h fir bubling face chlta h 