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