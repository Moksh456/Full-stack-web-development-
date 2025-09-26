// console.log("Printig before alert");
// let result =alert("kindly be sincere and complele your assigments")
// console.log(result);
// console.log("pricntig after alert");

// console.log("Printig before alert.......");
// const result = prompt("Are you happy with your effots......")
// console.log(result);
// console.log("pricntig after aler........t");


//console.log("Printig before alert.......");
// const result = confirm("Are you practising daily ?")
// console.log(result);
// console.log("pricntig after aler........t");



// console.log(location.href);
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.origin);
// console.log(location.pathname);

console.log(location.search);
console.log(location.hash);

/*const result = confirm("do your want to navigate to dummy html page ?")

if(result){
    // navigate to dummy.html
  //  location.href = "http://127.0.0.1:5500/dummy.html" 1st way
// When ever we assign any value to location.href..internally location.assign()
// method is called..
  //  location.assign("http://127.0.0.1:5500/dummy.html") //2nd way

    location.replace("http://127.0.0.1:5500/dummy.html") //3rd way
}
*/


 const url = new URLSearchParams(location.search);
  console.log(url.get(name));
  