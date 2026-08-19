/*
        let addbtn = document.querySelector(".add-btn");

        let inputs = document.querySelector(".inputs");
        let cardsStack = document.querySelector(".card-stack")
        let form = document.querySelector("form")
        let usersss = JSON.parse(localStorage.getItem("users")) || [];
        let currentIndex = 0;

        function savedata(){
            localStorage.setItem("users", JSON.stringify(users));
        }

        // Load data from localStorage on page load
        window.addEventListener("load", function(){
            if (localStorage.getItem("users")) {
                users = JSON.parse(localStorage.getItem("users"));
                currentIndex = users.length - 1;
            }
        });


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
            savedata();
            form.reset();
        })
        } makingCards();


        function stack(){
            
            cardsStack.innerHTML = "";

                if (usersss.length === 0) {
                    cardsStack.innerHTML = `
                    <div class="card empty-card">
                        <div class="card-header">
                            <h2>No Contacts</h2>
                        </div>
                        <div class="card-body">
                            <h3 style="text-align:center;">
                                Add a contact first
                            </h3>
                        </div>
                    </div>
                `;
                return;
            }
            usersss.forEach((e) => {
                const card = document.createElement("div");
                card.className = "card";
                card.dataset.index = index;

                card.innerHTML = `
                    <div class="card-header">
                        <h2>Incoming Call</h2>
                    </div>
                    <div class="card-body">
                        <div class="profile-section">
                            <img
                                src="${e.inmageurl}"
                                alt="Caller"
                                class="profile-image"
                                onerror="this.src='https://via.placeholder.com/150'"
                            >
                            <h3 class="callerName">
                                ${e.name}
                            </h3>
                        </div>


                        <div class="info-section">
                            <div class="info-item">
                                <span class="label">
                                    Purpose:
                                </span>
                                <span class="value">
                                    ${e.purpose}
                                </span>
                            </div>

                            <div class="info-item">
                                <span class="label">
                                    Position:
                                </span>
                                <span class="value">
                                    ${e.position}
                                </span>
                            </div>
                        </div>

                        <div class="action-buttons">
                            <button class="btn btn-call">
                                ☎ Call
                            </button>
                            <button class="btn btn-message">
                                💬 Message
                            </button>
                        </div>

                        <button class="delete-btn">
                            Delete Contact
                        </button>
                    </div>
                `;
                console.log(e.name);
                
                cardsStack.appendChild(card);
            });

            return;

        }stack();

        function showcurrentcard(){

        }*/


const addBtn = document.querySelector(".add-btn");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");

const inputBox = document.querySelector(".inputs");
const cardStack = document.querySelector(".card-stack");
const form = document.querySelector("form");

let data = JSON.parse(localStorage.getItem("datas")) || [];
let currentIndex = 0;


// ================= SAVE DATA =================

function saveData() {
    localStorage.setItem("datas", JSON.stringify(data));
}

// ================= SHOW CARDS =================
function showCards() {
    cardStack.innerHTML = "";
    if (data.length === 0) {
        cardStack.innerHTML = `
            <div class="card empty-card">
                <div class="card-header">
                    <h2>No Contacts</h2>
                </div>
                <div class="card-body">
                    <h3 style="text-align:center;">
                        Add a contact first
                    </h3>
                </div>
            </div>
        `;
        return;
    }
    data.forEach((person, index, value) => {
        console.log(person)
        console.log(index)
        console.log(value)
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index
        
        card.innerHTML = `
            <div class="card-header">
                <h2>Incoming Call</h2>
            </div>
            <div class="card-body">
                <div class="profile-section">
                    <img
                        src="${person.imageurl}"
                        alt="Caller"
                        class="profile-image"
                        onerror="this.src='https://via.placeholder.com/150'"
                    >
                    <h3 class="callerName">
                        ${person.name}
                    </h3>
                </div>


                <div class="info-section">
                    <div class="info-item">
                        <span class="label">
                            Purpose:
                        </span>
                        <span class="value">
                            ${person.purpose}
                        </span>
                    </div>

                    <div class="info-item">
                        <span class="label">
                            Position:
                        </span>
                        <span class="value">
                            ${person.position}
                        </span>
                    </div>
                </div>

                <div class="action-buttons">
                    <button class="btn btn-call">
                        ☎ Call
                    </button>
                    <button class="btn btn-message">
                        💬 Message
                    </button>
                </div>

                <button class="delete-btn">
                    Delete Contact
                </button>
            </div>
        `;
        cardStack.appendChild(card);
    });
    showCurrentCard();
}


// ================= SHOW CURRENT CARD =================

function showCurrentCard() {

    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// ================= ADD BUTTON =================

addBtn.addEventListener("click", function () {

    inputBox.classList.toggle("hide");
    cardStack.classList.toggle("hide");

    if (inputBox.classList.contains("hide")) {

        addBtn.textContent = "+";

    } else {

        addBtn.textContent = "×";

    }

});


// ================= FORM SUBMIT =================

form.addEventListener("submit", function (e) {

    e.preventDefault();


    const name =
        form.querySelector(".name").value.trim();

    const purpose =
        form.querySelector(".purpose").value.trim();

    const position =
        form.querySelector(".position").value.trim();

    const imageurl =
        form.querySelector(".image-url").value.trim();


    if (
        name === "" ||
        purpose === "" ||
        position === "" ||
        imageurl === ""
    ) {

        alert("Please fill all fields!");

        return;
    }


    const person = {

        name: name,
        purpose: purpose,
        position: position,
        imageurl: imageurl

    };


    data.push(person);

    currentIndex = data.length - 1;

    saveData();

    form.reset();


    inputBox.classList.add("hide");
    cardStack.classList.remove("hide");
    addBtn.textContent = "+";


    showCards();

});


// ================= UP BUTTON =================

upBtn.addEventListener("click", function () {

    if (data.length === 0) {
        return;
    }


    currentIndex--;


    if (currentIndex < 0) {

        currentIndex = data.length - 1;

    }


    showCurrentCard();

});


// ================= DOWN BUTTON =================

downBtn.addEventListener("click", function () {

    if (data.length === 0) {
        return;
    }


    currentIndex++;


    if (currentIndex >= data.length) {
        currentIndex = 0;
    }
    showCurrentCard();

});


// ================= CARD BUTTONS =================

cardStack.addEventListener("click", function (e) {
 
    
    const card = e.target.closest(".card");
    
    if (!card) {
        return;
    }


    const index = Number(card.dataset.index);
    console.log(card);
    

    const person = data[index];


    // CALL

    if (e.target.classList.contains("btn-call")) {

        alert("Calling " + person.name + "...");

    }


    // MESSAGE

    if (e.target.classList.contains("btn-message")) {

        alert(
            "Opening message for " +
            person.name +
            "..."
        );

    }


    // DELETE

    if (e.target.classList.contains("delete-btn")) {

        const confirmDelete =
            confirm(
                "Delete " +
                person.name +
                "?"
            );


        if (!confirmDelete) {
            return;
        }


        data.splice(index, 1);


        if (currentIndex >= data.length) {

            currentIndex = data.length - 1;

        }


        if (currentIndex < 0) {

            currentIndex = 0;

        }


        saveData();

        showCards();

    }

});


// ================= THEMES =================

document
    .querySelector(".theme-blue")
    .addEventListener("click", function () {

        changeTheme(
            "#667eea",
            "#764ba2"
        );

    });


document
    .querySelector(".theme-green")
    .addEventListener("click", function () {

        changeTheme(
            "#11998e",
            "#38ef7d"
        );

    });

document
    .querySelector(".theme-red")
    .addEventListener("click", function () {

        changeTheme(
            "#ee0979",
            "#ff6a00"
        );

    });


document
    .querySelector(".theme-black")
    .addEventListener("click", function () {

        changeTheme(
            "#434343",
            "#000000"
        );

    });


function changeTheme(color1, color2) {

    document.documentElement.style.setProperty(
        "--accent",
        color1
    );

    document.documentElement.style.setProperty(
        "--accent2",
        color2
    );


    document.body.style.background =
        `linear-gradient(135deg, ${color1}, ${color2})`;

}


// ================= START =================

showCards();

console.log("hello");
