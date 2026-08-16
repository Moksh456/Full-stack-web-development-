let addbuttn = document.querySelector(".add-btn");
let input = document.querySelector(".inputs");
let card = document.querySelector(".card");
let form = document.querySelector("form");
    let data = [JSON.parse(localStorage.getItem("datas")) || []]

function saveitem(){
    localStorage.setItem("datas", JSON.stringify(data));
    console.log(data)
}



function makecard() {


    addbuttn.addEventListener("click", function (e) {
        input.classList.toggle("hide");
        console.log("clicked");
        console.log(input.classList);
        card.classList.toggle("hide");

    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("clicked");
        console.log(form);
        let dets = {
            name: form[0].value,
            puropse: form[1].value,
            position: form[2].value,
            imageurl: form[3].value
        }

        data.push(dets)
        console.log(data)
        saveitem();
        form.reset();
         

    })


    // card function
    

}


makecard();