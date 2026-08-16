let addbuttn = document.querySelector(".add-btn");
let input = document.querySelector(".inputs");
let card = document.querySelector(".card");
let form = document.querySelector("form");
let data = JSON.parse(localStorage.getItem("datas")) || []

function saveitem(){
    localStorage.setItem("datas", JSON.stringify(data));
    console.log(data)
}




function makecard() {


    addbuttn.addEventListener("click", function (e) {
     
        console.log("clicked");
        console.log(input.classList);
         if(addbuttn.innerHTML === "+"){
            addbuttn.innerHTML = "x"
             input.classList.remove("hide");
             card.classList.add("hide");
         }else{
            addbuttn.innerHTML = "+"
            card.classList.remove("hide")
            input.classList.add("hide")
         }
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
    data.forEach(function  (ele) {
        console.log(data[0])
       console.log(ele.name)
        document.querySelector(".cards-stack").innerHTML = `  <div class="card">
                    <div class="card-header">
                        <h2>Incoming Call</h2>
                    </div>

                    <div class="card-body">
                        <!-- Profile Section -->
                        <div class="profile-section">
                            <img src="${ele.imageurl}" alt="Caller" class="profile-image">
                            <h3 class="callerName">${ele.name}</h3>
                        </div>

                        <!-- Info Section -->
                        <div class="info-section">
                            <div class="info-item">
                                <span class="label">Purpose:</span>
                                <span class="value">${ele.puropse}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Position:</span>
                                <span class="value">${ele.position}</span>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="action-buttons">
                            <button class="btn btn-call">☎ Call</button>
                            <button class="btn btn-message">💬 Message</button>
                        </div>
                    </div>
                </div>`;
       
    });

   

}


makecard();


/*
data =  "";
localStorage.clear();
  name: form[0].value,
            puropse: form[1].value,
            position: form[2].value,
            imageurl: form[3].value

*/

function cleardata(){
    data =  "";
localStorage.clear();
}