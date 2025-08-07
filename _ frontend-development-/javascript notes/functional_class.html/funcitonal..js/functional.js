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


const p1 = new person("sharad", 28);

