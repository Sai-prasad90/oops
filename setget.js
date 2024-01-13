// program 1

class Person {

    firstName = "sai"
    lastName = "wate"
    age = 26
    rollNo = 632

}

// let chetan = new Person()
let sai = new Person()

console.log(sai); //  Person { firstName: 'sai', lastName: 'wate', age: 26, rollNo: 632 }
console.log(sai); //  Person { firstName: 'sai', lastName: 'wate', age: 26, rollNo: 632 }

sai.firstName = "chetan"
sai.lastName = "aag"
sai.age = 25
sai.rollNo = 420
console.log(sai); //  Person { firstName: 'chetan', lastName: 'aag', age: 25, rollNo: 420 }

// program 2 
class PersonE {
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }
}
let ram = new PersonE("ram","singh",24,65)
let shyam = new PersonE("shyam","singh",45,48)


let students = [ram,shyam]
students.forEach(function(el){
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
    console.log(el.rollNo)
})
// ram singh 24 65 shyam singh  45 48

// program 3 
class PersonF {
    setFirstName(fn){
        this.firstName = fn
    }
    getFirstName(){
        console.log(this.firstName)
    }
    
    setLastName(ln){
        this.lastName = ln
    }
    getLastName(){
        console.log(this.lastName)
    }
}

let sai3 = new PersonF()
sai3.setFirstName("sai")
sai3.setLastName("wate")

console.log(sai3); // PersonF { firstName: 'sai', lastName: 'wate' }

sai3.getFirstName(); //  sai
sai3.getLastName(); //  wate
