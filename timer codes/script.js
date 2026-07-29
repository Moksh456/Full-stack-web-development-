let h1 = document.querySelector("h1")
let i = 0

document.querySelector("button").addEventListener("click", () => {
    clearInterval(timerid);
    i = 0;
    h1.textContent = i;
});

document.querySelector("button:nth-of-type(2)").addEventListener("click", () => {
    timerid = setInterval(() => {
        i++;
        h1.textContent = i;
    }, 1000)
});