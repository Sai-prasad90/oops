// program 1
// Object literal 
// let chinmay = {
//     firstName:"chinmay",
//     lastName :"deshpande",
//     age:12,
//     rollNo:23,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// chinmay.displayName()
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34,
//     rollNo:57,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// amol.displayName()

// console.log(amol.firstName)
// console.log(amol['firstName'])

// amol.firstName = "amol R"
// amol['firstName'] = "amol R2"


// amol.city = "pune"
// amol['language']= "hindi"

// delete amol.city 
// delete amol['language']


// program 2
// class Person {
//     firstName 
//     lastName 
//     age 
//     roll 

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol2 = new Person()
// let chinmay2 = new Person()
// console.log(amol2)
// console.log(chinmay2)

// amol2.firstName = "amol2"
// amol2.lastName = "rao2"
// amol2.age = 55
// amol2.roll = 88
// amol2.city = "pune"
// console.log(amol2)

// chinmay2.firstName = "chinmay2"
// chinmay2.lastName = "deshpande2"
// chinmay2.age = 56
// chinmay2.roll = 56


// amol2.displayName()
// chinmay2.displayName()


// program 2
// constructor 


// program 3

class Person3 {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln 
    }
    setAge(ag){
        this.age = ag 
    }
    setRollNo(rn){
        this.rollNo = rn
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay4 = new Person3()
console.log(chinmay4)
chinmay4.setFirstName("chinmay4")
chinmay4.setLastName("deshpande4")
chinmay4.setAge(45)
chinmay4.setRollNo(33)
chinmay4.displayName()



























