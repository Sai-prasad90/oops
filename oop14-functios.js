// // // function 

// // // function declaration 

// function addition(x,y){
//     return x+ y
// }

// let r1 = addition(12,1)
// console.log(r1)

// // // function expression 

// let additionB = function(x,y){
//     return x + y
// }
// let r2 = additionB(12,4)
// console.log(r2)

// // arrow function 
// let additionC = (x,y) =>{
//     return x + y
// }
// let r3 = additionC(12,4)
// console.log(r3)

// let additionE = (x,y) => x + y
// let r4 = additionE(12,4)


// // program 4

let info = {
    firstName:"sai",
    lastName:"wate",
    display:function(){
        console.log(this)
        console.log(this.firstName + this.lastName) 
    }
    
}

console.log(info.firstName) 
console.log(info.lastName) 
info.display()


// // program 3


var firstName = "sai"
var lastName = "prasad"

let info3 = {
    firstName:"sai",
    lastName:"prasad",
    display:function(){
        console.log(this.firstName + this.lastName)
        console.log(this)// info3

        let display2 = function(){
            // this ------> window
            console.log(this.firstName + this.lastName)
        }
        display2()
    }
}
info3.display()

// // program 4

// let info4 = {
//         firstName:"sai",
//         lastName:"wate",
//         display:function(){
//             console.log(this.firstName + this.lastName)
//             console.log(this)// info4
    
//             let display2 = () =>{
//                 // this ------> info4
//                 console.log(this.firstName + this.lastName)
//             }
//             display2()
//         }
//     }
// info4.display()



// let info5 = {
//         firstName:"sai",
//         lastName:"wate",
//         display:()=>{
//             console.log(this.firstName + this.lastName)
//             console.log(this) // window

//             let display2 = () =>{
//                 console.log(this.firstName + this.lastName) // window
//             }
//             display2()
//         }
//     }
// info5.display()











