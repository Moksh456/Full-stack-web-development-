let h1 = document.querySelector("h1")
let i = 0

  setInterval(() => {
    i++;
    h1.textContent = i;
    console.log(i)
}, 1000);

time();