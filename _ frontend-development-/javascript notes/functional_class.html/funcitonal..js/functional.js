/*Parent class called PERSON which needs to be initilized with certain propeties like name and age.

    there is child class called employee (which is a PERSON to!) and it needs to be
    initilized with properties like name, age, and employmenttype.
*/

function person(name, age){
    this.name = name;
    this.age = age;
}
 
// here person.Prototype.consturctor again points hack to person 
// does that mean -> person.prototype.constructor  === person will be true?
// person.prototype =.constructor is set automatiocally to person.


const p1 = new person("sharad", 28);

//new object is created and prototype of this newly created object is set to person.prototype
// this keyword is pointed to newly created object.

// to access prototype of p1 -> object.getPrototypeOf(p1) can used 



