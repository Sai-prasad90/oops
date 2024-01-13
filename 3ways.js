// class Animal {
//     constructor(nm, ty, ag) {
//         this.name = nm;
//         this.type = ty;
//         this.age = ag;
//     }

//     display() {
//         console.log(this.name + this.age);
//     }
//     // display() {
//     //     console.log("name: '" + this.name + "', type: '" + this.type + "', age: " + this.age);
//     // }
// }

// let dog = new Animal("Jack", "dog", 5);
// let chetan = new Animal("Chetan", "human", 25);

// // console.log(dog);
// // console.log(chetan);

// dog.display();
// chetan.display();



// //==================

// //setget as function

// class person{
//         setFirstName(fn){
//         this.firstName  = fn
//     }

//     getFirstName(){
//         return this.firstName
//     }

//     setLastName(ln){
//         this.lastName  = ln
//     }

//     getLastName(){
//         return this.lastName
//     }

//     setage(ag){
//         this.age = ag
//     }
//     getage(){
//         return this.age
//     }
// }

// let sai = new person()
// console.log(sai) //blank object

// sai.setFirstName("sai")
// sai.setLastName("wate")
// sai.setage(85)
// console.log(sai)  //person { firstName: 'sai', lastName: 'wate' age: 85}
// console.log(sai.getFirstName())  //sai
// console.log(sai.getLastName())  //wate
// console.log(sai.getage()) //85


//set get as keyword
class Person {

    set first_name(fn){
        this.firstName = fn
    }

    get first_name(){
        return this.firstName
    }

    set last_name(ln){
        this.lastName = ln
    }

    get last_name(){
        return this.lastName
    }
    display() {
        console.log("Name: " + this.first_name + "    01saiprasad@gmail.com")
    }

}
let sai  = new Person()

sai.first_name = "sai"
console.log(sai.first_name)  //sai
sai.last_name = "prasad"
console.log(sai.last_name) //prasad
console.log(sai)

sai.display() //Name: sai  mail

//====================

class bank {
    constructor(nm,ty,bal){
        this.name = nm
        this.type = ty
        this.bal = bal
        this.transaction = []
    }
    withdrawl(amt){
        if(this.bal > amt){
            this.bal = this.bal - amt 
            this.transaction.push(-amt)
            return this.bal
        }
        else {
            console.log('Insufficient fund')
        }
    }

    deposit(amt){
        this.bal = this.bal + amt
        this.transaction.push(amt)
        return this.bal
    }
    lastFive(){
        return this.transaction.slice(-5)
    }
}
let prasad = new bank("sai", "saving", 50000)
console.log(prasad.type)
prasad.deposit(2575000)
prasad.withdrawl(45000)
prasad.deposit(646456)
prasad.withdrawl(7500)
prasad.deposit(35251554)
prasad.withdrawl(165418)
prasad.deposit(12345)
prasad.withdrawl(6789)
console.log("Last five trasactions:" + prasad.lastFive())
console.log("Balance: " + prasad.bal)






