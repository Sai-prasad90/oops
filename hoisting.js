//Hoisting....


// program1 
// var x = 10
// console.log(x) //10

// program 2

// console.log(x) //10
// var x = 100
// console.log(x) //100

// execution steps 
// var x 
// console.log(x) //undefined
// x = 100
// console.log(x) //100

// console.log(x) // Cannot access 'x' before initialization
// let x = 10 
// console.log(x) //10

// program 3

// sayHello()
// function sayHello(){
//     console.log("hello")  //hello
// }

// sayHello2()
// var sayHello2 = function(){
//     console.log("hello") //its not function
//}
// program 4
// var myFunction = "bye"                           //function has priority 
// function myFunction(){
//     console.log("hello")
// }
// console.log(typeof myFunction)  //string //expected function

// not sure but corrected
var myFunction1 = "bye"           //chaanges name to function1                 //function has priority 
function myFunction(){
    console.log("hello")
}
console.log(typeof myFunction)  // function



// program 5 
// console.log(a)     //undefined
// console.log(b)     // Cannot access 'b' before initialization

// var a = 10;
// let b = 2;


// program 6 
// function outer(){
//     //var inner;
//     console.log(inner) // undefined
//     if(true){
//         var inner = "inner variable 🤣"  //emoji will get printed haha..
//     }
//     console.log(inner) // "inner variable"
// } 
// outer()