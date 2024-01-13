// //let with respect to assignment

// let a = 25*5
// console.log(a)
// a = 25*35
// console.log(a)  //it allows to update values

// let a1="sai"
// console.log(a1)
// a1 = "prasad"
// console.log(a1)
// a1 = 9011212430
// console.log(a1)



// //const with respcet to assignment
// const a2 = 5%2
// console.log(a2) //output obtained
// // a2 = 5*2        // cant update value for const
// // console.log(a2) //assignment to constant

// //var with respect to assignment
// var a3 = 2*5
// console.log(a3)
// a3 = "sai"      //it will update values
// console.log(a3) // it actually works likes let in js



// //==============================================

// // let is a blocked scope = which means it cant works outside {}

// // { 
// //     let a4 = 25
// //     console.log(a4) //printed
// // }
// //  console.log(a4) //error as it not in block scope

// //================================

// let a5= "ravi"   //global scope
// {
//     console.log(a5) //printed coz a5 is global scope
// }
// console.log(a5)  //printed as defined

// //===============================

// let b = 2*5
// {
//     let b = 2*7
//     console.log(b) //printed  as defined in block -14
// }
// console.log(b) //print as defined as global - 10


// //================================

let b1 = 100
{
    b1 = 25
    console.log(b1) //25 even if not defined in block but let allowd 
                    //update so it got updated

}
console.log(b1) //25 as global varible is updated.

// //===============================

let b2 =10
b2 = 100           //updated
console.log(b2)
{
    let b2 = 200
    b2 = 300        //updated
    console.log(b2)  // 300   

}
console.log(b2) //as goblal 100 coz let is inblock scope so cant update value from it.

// //=============================



students.forEach(function(el){

    if(el.skills.includes("pyhton") && el.skills.includes("html")){ 
        console.log(el.firstName)
    
    }
})
