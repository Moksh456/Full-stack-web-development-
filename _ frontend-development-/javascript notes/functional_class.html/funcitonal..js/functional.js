/*Parent class called PERSON which needs to be initilized with certain propeties like name and age.

    there is child class called employee (which is a PERSON to!) and it needs to be
    initilized with properties like name, age, and employmenttype.
*/

function person(name, age){
    this.name = name;
    this.age = age;
    
}

person.prototype.canwalk = function(){
        console.log(`${this.name} can walk`);
    }

function employee(name, age, employmentType){
    // calling parent class constructor
     person.call(this, name,age);
    this.employmentType = employmentType;
}

employee.prototype = Object.create(person.prototype)
 // here employee.protye.constructor is lost because we are assign 
 // employee.prototype to something ELSE EXPLICTY.

 // Now we can reset constructor employee propety Exlicity
 employee.prototype.constructor = employee;

const e1 = new employee("sharad", 28, "contract");



// here person.Prototype.consturctor again points hack to person 
// does that mean -> person.prototype.constructor  === person will be true?
// person.prototype =.constructor is set automatiocally to person.


//const p1 = new person("sharad", 28);

//new object is created and prototype of this newly created object is set to person.prototype
// this keyword is pointed to newly created object.
// to access prototype of p1 -> object.getPrototypeOf(p1) can used 

// ES6 - classes

// let us solve above with different sysntax 
// In js class keyword exist it is possible to write in object oriented manaer
// but it is just sugar internally it gets converted to function constructor 
// syntax onplay.

console.log("HELLO JANE MARY");
/*
// ES6 class syntax
class person12 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    canwalk(){
        console.log(`${this.name} is waled properly`)
    }
}

class employee extends person{
    constructor(name,age,employmentType){
        super(name,age);
        this.employmentType = employmentType;
    }     
}

const s1 = new person("sharad", 28);*/