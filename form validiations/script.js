let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")


const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailans = emailRegex.test(email.value)
    let passans = usernameRegex.test(password.value)

    document.querySelector(".emailerr").style.display = "none";
    document.querySelector(".emailerr").textContent = ""
    document.querySelector(".passserr").textContent = ""
    document.querySelector(".passserr").style.display = "none";


    if (!emailans) {
        document.querySelector(".emailerr").textContent = "your email is not valid"
        document.querySelector(".emailerr").style.display = "initial";
        document.querySelector(".emailerr").style.color = "red"
        document.querySelector("#email").style.border = "2px solid #ff0000"
    } else {
        document.querySelector(".emailerr").style.display = "none";
        document.querySelector("#email").style.border = "2px solid #000000"
    }


    if (!passans) {
        document.querySelector(".passserr").textContent = "your pass is not valid"
        document.querySelector(".passserr").style.display = "initial";
        document.querySelector(".passserr").style.color = "red"
        document.querySelector("#password").style.border = "2px solid #ff0000"
    } else {
        document.querySelector(".passserr").style.display = "none";
        document.querySelector("#password").style.border = "2px solid #000000"
    }

    if (emailans && passans === true) {
        document.querySelector("#result").textContent = "subimited"
        document.querySelector("#result").style.color = "green";

    } else {
        document.querySelector("#result").textContent = "enter valid details"
        document.querySelector("#result").style.color = "red";
    }
});
