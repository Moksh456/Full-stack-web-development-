const frutis = [ "banana", "apple", "orange", "kiwi", "mango" ];
//a1[3] = "Mango";
//console.log(a1[3]);
const a1 = [7, " banana", true, "M", "orang"];
//a1[3] = "Mango";
let num = [1,2,3,4,5,6,7,8,9]
/*let num = [1,2,3,4,5,6,7,8,9];

//console.log(a1.length); // Get the length of the array
/*console.log(a1.pop());
console.log(a1.length);*/

//console.log(a1.push("Baljeet")); // Add an element to the end of the array
//console.log(a1[6]); 

//console.log(a1.shift()); // Remove the first element of the array
//console.log(a1.length);
//console.log(a1.shift("shantra"));
//a1.toString
/*ƒ toString() { [native code] }
typeof a1[0]
'number'
a1.toString
ƒ toString() { [native code] }
typeof a1[0]
'number'
a1.join
ƒ join() { [native code] }
a1.join(" and ")
'7 and  banana and true and M and orang'
a1.po
undefined
a1.pop();
'orang'
a1.push
ƒ push() { [native code] }
a1.push(5);
5
a1.shift();
7
delete a1[2]
true
num.concat(frutis);
(14) [1, 2, 3, 4, 5, 6, 7, 8, 9, 'banana', 'apple', 'orange', 'kiwi', 'mango']
let b = num.concat(frutis);
undefined
b
(14) [1, 2, 3, 4, 5, 6, 7, 8, 9, 'banana', 'apple', 'orange', 'kiwi', 'mango']
num.splice(3,6, 255,266,288)
(6) [4, 5, 6, 7, 8, 9]
num
(6) [1, 2, 3, 255, 266, 288]
num.slice(num.slice(2, 3)

num.slice(2, 3)
[3]
num
(6) [1, 2, 3, 255, 266, 288]*/


//console.log(num.reverse());

/*function createtable(){
    const entername = name.element.value;
    const enteremail = email.element.value;
    const tableRow = document.createElement("tr");
    const tableColoum = document.createElement("td")
    const tableColoum2 = document.createElement("td");
    tableRow.appendChild(tableColoum);
    tableRow.appendChild(tableColoum2);
    tableelement.appendChild(tableRow);
     
}*/

  //sumbmitelement.addEventListener("click", createtable);
 
// addlisttener take 2 arguments - event_name and function to be called ehenever this event get fixed.
// previsouly we were calling create table functon from html with the help of onclick attribute  now we want to have seperetions of concerns and don't want to write js inside html unstill required .
// so we went with a approach of calling addEventListener method on Target element
// here second argument of add llistner can be called as callback function since we are not calling it directly in js is internally calling it. 

// document.querySelector("button").addEventListener("click", function() {
//    const entername = name.element.value;
//  const enteremail = email.element.value;
//const tableRow = document.createElement("tr");
//    const tableColoum = document.createElement("td")
//    const tableColoum2 = document.createElement("td");
//    tableRow.appendChild(tableColoum);
//    tableRow.appendChild(tableColoum2);
//    tableelement.appendChild(tableRow);
//})    

document.querySelector(".box1").addEventListener("click", function(){
console.log("Box 1 clicked");true
})
document.querySelector(".box2").addEventListener("click", function(){
    console.log("Box 2 clicked");true
})
document.querySelector(".parent").addEventListener("click", function(){
    console.log("Parent clicked"); true
})
 
document.querySelector(".grandparent").addEventListener("click", function(event){
    console.log("Grandparent clicked");
  true   
});
