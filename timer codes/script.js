let h1 = document.querySelector("h1")
let i = 0
document.querySelector("button").addEventListener("click", () => {
    clearInterval(timerid);
    i = 0
    h1.textContent = i;
}, );

function hacked(a) {
    let ans = a * 5;
  console.log(ans);
  
}
document.querySelector("button:nth-of-type(2)").addEventListener("click", () => {
    timerid = setInterval(() => {
        i++;
        h1.textContent = i;
    }, 1000)
});

hacked(5);

console.log("heloo mrs");