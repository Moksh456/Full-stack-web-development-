/*function func(){
    console.log("hi")
    console.log("by")

}

func();*/

// problem statement 
// anyone who is calling func should have power via which we can stop  
// resume execution of func at my given point.

function* func(){
       console.log("hi")
      yield "hihg";
    console.log("by")
}

const result = func();
console.log(result.next().value);
