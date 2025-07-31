/*
var age = 28;

function printdetails(){
    var title = "sharad"

    print();
    function print(){
     debugger
        console.log(`hello my name is ${title} and my age is ${age}`)
    }
}
printdetails();*/
//quetion :
/* here title and age both the variables are not defined under print function 
 then also we are able to access it How ? 
 it is because of scope chain 
 it appear toprototype chai stuided earlier 
 though prototype chain was applicable to objects and it's propeties similarly
  scope chain is applicable is variables 
 */

  /*  
  lexical Env = variables accessed local + it lexical parent
    
  */

  var age = 28;

function printdetails(){
    var title = "sharad"

    print();
    function print(){
        console.log(`hello my name is ${title} and my age is ${age}`)
    }
    return print
}
const func = printdetails(); 
func(); 

// so the above function output is the = `hello my name is undefined and my age is 28
// since execution context of printdetails got destroyed and print function is not able to access the title variable.
// if execution context got destroyed then all the variables that got memory allocation 
// will also destroyed.....accroding to our theory.
// but here comes most power full feature of javascript which seprate it from 
// other programming language..it is known as closures
// this magic is happening because retirn we return funciton we not only funciton but intenally we are returning 2 things 
// one is funciton code definition (basically source code) + it is lexical enviorment.

// lexical env = VARIABLES(LOCAL) + VARIABLES of its lexical parent.
 
// i.e  returned  function is able to access these variables even after it is removed from the exectution stack.

// CLOSURE =  FUNCTION + it's lexical env

// so the above code is a closure


/*var age = 28;

function printdetails(){
    var title = "sharad"

    print();
    function print(){
        console.log(`hello my name is ${title} and my age is ${age}`)
    }
    return print
}
const func = printdetails();
func();*/

// in the above code, closure is formed on print() i.e event if printdetails 
// get removed from the execution stack,..WHILE print() method will be able to infer 
// age property..how? because it can recall.memorise it by referencing it 
// that means age variables is still present in the memory at the same memory location 
// one moren conslusion can be derived -> if any closure is formed them 
// thode variables can not be garbge collected i.e these variables can not be 
// removed form the memory.
