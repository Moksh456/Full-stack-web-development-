let a = document.querySelector("input");

a.addEventListener("input", function(eve){
    if (eve.data !== null) {
        console.log(eve.data)
    }
})