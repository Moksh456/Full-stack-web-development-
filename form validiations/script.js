let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")


const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const emailans = emailRegex.test("")

console.log(emailans);
