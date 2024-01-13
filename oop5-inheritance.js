class Stud {
    constructor(nm,cy,gen){
        this.name=nm
        this.city=cy
        this.gender=gen
    }
    displayName(){
        console.log(this.name+this.city)
    }
}
class Teacher extends Stud {
    number = 89987665
    displayNumber(){

        console.log(this.number)
    }
}

let chetan = new Teacher("Chetan","pune","male")
console.log(chetan.name)
console.log(chetan.city)
console.log(chetan.gender)
console.log(chetan.number)
chetan.displayName()
chetan.displayNumber()


//=================================//
class Emp{
    constructor(fn,ln,cy){
        this.firstname = fn
        this.lastname = ln
        this.city = cy
      
    }
    displayName(){
        console.log(this.firstname+this.lastname+this.city)
    }
}

class HR extends Emp{
    constructor(fn,ln,cy,num){
        super(fn,ln,cy)
        this.number = num
    }
    displayNumber(){
        console.log(this.number)
    }
}
let robert = new HR(" robert"," ramesh"," delhi",  98644658185)
// console.log(robert.firstname)
// console.log(robert.lastname)
// console.log(robert.city)
// console.log(robert.number)
robert.displayName()
robert.displayNumber()

//==========================//
class Anna {
    constructor(fn, ln, ht) {
        this.firstName = fn;
        this.lastName = ln;
        this.hometown = ht;
    }

    displayAnna() {
        console.log(this.firstName + this.lastName + this.hometown);
    }
}

class Baba extends Anna {
    constructor(fn, ln, ffn) {
        super(fn, ln,); 
    }

    displayBaba() {
        console.log(this.fname + this.lastName);
    }
}

class Me extends Baba {
    constructor(fn, ln, ffn, ssn) {
        super(fn, ln, ffn);
        this.sname = ssn;
    }

    displayMe() {
        console.log(this.sname + this.lastName);
    }
}

let sai = new Me("anna", "wate", "baba", "sai");

console.log(sai.firstName);
console.log(sai.lastName);
console.log(sai.fname);
console.log(sai.hometown); 

sai.displayAnna();
sai.displayBaba();
sai.displayMe();

// ===================

class Grandfather{
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}
class Father extends Grandfather  {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFName(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

let sai = new Son("anna","wate","baba","me")

console.log(sai.firstName)
console.log(sai.lastName)
console.log(sai.sname)
console.log(sai.fname)

sai.displayFName()
sai.displayGName()
sai.displaySName()