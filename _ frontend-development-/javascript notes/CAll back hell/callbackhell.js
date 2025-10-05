function intensiveCAlculation(a,b, callbackfn) {
    setTimeout(() => {
          const sum = a+b;
    console.log("Sum is: ", sum);
    console.log("yes it's done")
    return sum;
    }, 3000);
}

function conclude (){
    console.log("yes it's done");
    console.log("yes it's done");
}
intensiveCAlculation(50,60, conclude);

// problem : once intensiveCAlculation is finished print on console "yes it done"

// problem 2 : Assume intensivecalculation takes atleast 3 seconds to complete
// now print on console "yes it done" after it has finished execution

// now one way to achieve this by suing callbacks i.e intensivecalucaltiono
// funciton can accept 1 callbackfn and it can call thid func whenever it is done