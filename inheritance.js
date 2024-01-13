class Student {
    constructor(name, subject, rollNumber) {
        this.name = name 
        this.subject = subject 
        this.rollNumber = rollNumber 
    }

    displayName() {
        console.log("Student Name: " + this.name + ", Subject: " + this.subject + ", Roll Number: " + this.rollNumber) 
    }
}

class Teacher extends Student {
    salary = 500000 

}

let sai = new Student("Saiprasad", "Javascript", 2511) 


console.log("Name: " + sai.name) 
console.log("Subject: " + sai.subject) 
console.log("Roll Number: " + sai.rollNumber) 

let chinmay = new Teacher("Chinmay sir", "Web Dev") 


console.log("Name: " + chinmay.name) 
console.log("Subject: " + chinmay.subject) 
// console.log("Roll Number: " + chinmay.rollNumber) 
console.log("Salary: " + chinmay.salary) 


// chinmay.displayName() 



//================================================

class father{
    constructor(fname,lname,prop){
        this.firstname = fname
        this.lastname=lname
        this.property=prop
    }
    displayFName(){
        console.log(this.firstname + this.lastname + this.property)
    } 
}
class son extends father{
    constructor(fname,lname,prop,sname){
        super(fname,lname,prop)
        this.son = sname
    }
    displaySName(){
        console.log(this.son+this.lastname+this.firstname+this.prop)

    }

}

let saiprasad = new son(" saiprasd","  baba","  wate","  50 lac")


console.log(saiprasad.firstName)
console.log(saiprasad.lastname)
console.log(saiprasad.son)
console.log(saiprasad.property)

saiprasad.displayFName()
saiprasad.displaySName()


//===================
//multilevel

class Animal {
    constructor(name) {
        this.name = name 
    }

    eat() {
        console.log(this.name ) 
    }
}

class doggy extends Animal {
    constructor(name, type) {
        super(name) 
        this.type = type 
    }

    Sound() {
        console.log(this.name) 
    }
}

class Dog extends doggy {
    constructor(name, breed) {
        super(name) 
        this.breed = breed 
    }

    bark() {
        console.log(this.name + this.breed +"  bho bho") 
    }
}


let bruno = new Dog("Bruno", " German Shephard") 


console.log(bruno.name)   
console.log(bruno.type)    
console.log(bruno.breed)  

bruno.eat()              
bruno.Sound()          
bruno.bark()      

//=============================
class GrandFather {

    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayGName() {
        console.log(this.firstName + this.lastName)
    }

}

class Father extends GrandFather {
    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.fname = ffn
    }

    displayFName() {
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn, ln, ffn, ssn) {
        super(fn, ln, ffn)
        this.sname = ssn
    }
    displaySName() {
        console.log(this.sname + this.lastName)
    }

}

let abhi = new Son("   harivanshrai"," bacchan","  amitabh","  abhishke")

abhi.firstName
abhi.lastName
abhi.fname
abhi.sname

abhi.displayFName()
abhi.displayGName()
abhi.displaySName()


//=========================
class Mother {  
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayMName(){
        console.log(this.firstName + this.lastName)
    }

}

class Daughter1 extends Mother {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }

    displaySName(){
        console.log(this.sname + this.lastName)
    }

}

class Daughter2 extends Mother {
    
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }

    displayDName(){
        console.log(this.dname + this.lastName)
    }
}

let shreya = new Daughter1(" Rekha"," Tol"," Shreya")
let priya   = new Daughter2(" Rekha"," Tol"," priya")


shreya.firstName
shreya.lastName
shreya.sname

shreya.displayMName()
shreya.displaySName()


priya.firstName
priya.lastName
priya.dname

priya.displayMName()
priya.displayDName()

//=============================
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayEmployeeName() {
        console.log(this.firstName  + this.lastName);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName);
        this.department = department;
    }

    displayDepartment() {
        console.log(this.firstName +  this.lastName +  this.department );
    }
}

class Developer extends Employee {
    constructor(firstName, lastName, programmingLanguage) {
        super(firstName, lastName);
        this.programmingLanguage = programmingLanguage;
    }

    displayProgrammingLanguage() {
        console.log(this.firstName + this.lastName + this.programmingLanguage );
    }
}

let Sai = new Manager("Sai", "Prasad", "Javascript");
let Chetan = new Developer("Chetan", "aag", "pytthon");


Sai.firstName;
Sai.lastName;
Sai.department;

Chetan.firstName;
Chetan.lastName;
Chetan.programmingLanguage;

// Calling methods
Sai.displayEmployeeName();
Sai.displayDepartment();

Chetan.displayEmployeeName();
Chetan.displayProgrammingLanguage();
