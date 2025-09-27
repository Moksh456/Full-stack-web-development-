//function multiply(a,b){
 //   return a*b;
// }

// const result = multiply(2,3);
// console.log(result);



// DEsign a funciton that only multiply by 2 using bind

function multiply(a,b){
    return a*b
}

const multiply2 = multiply.bind(this,2);

const result = multiply2(4);
console.log(result)

// now above problem statement is solved using bind method but 
// we can also use combination of HOC which essentially works with the help
// of closures

/*
function multiply(A){
    return function(b){
        return A*b;
    }
}

const result1 = multiply(2)(8);
*/





// Write a function

// multiply(1)(2) -> 2 * 1 => 2
// multiple(1)(2)(3) -> 1 *2 *3 => 6
// multiple(1)(2)(3)(4) -> 1 * 3 * 4 * 2 => 24 

// sum(2)(3) -> 2 + 3;
// sum(2)(3)(4) 2 + 3 + 4