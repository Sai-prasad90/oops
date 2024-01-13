//function declaration

function mult(a,b){
    console.log(a*b) //144
    // return a*b  //undfined
}
let a1 = mult(12,12)
console.log(a1) //144

//========================
// /function expression
let mod = function(a,b){
    return a % b
}
let a11 = mod(12,5)
console.log(a11)     //2

//========================
//arrow function

let add =(a,b) => a + b
let a12 = add((12-4),(5-6))
console.log(a12)  //7

