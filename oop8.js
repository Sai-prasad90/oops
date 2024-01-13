
// number as parameter and number as  return type 

function add(x,y){
    return x + y
}
let q1 = add(12,14)
console.log(q1)
console.log(typeof q1)

// string as parameter and string as return type 

function greet(word){
    return "good " + word
}
let q2  = greet("morning")
console.log(q2)

// boolean as parameter and boolean as return type 
function canDrive(age,vehicleAvail){
    if(age >= 18 && vehicleAvail ){
        return true
    }
    else {
        return false
    } 
}
let q3 = canDrive(18,true)
console.log(q3)

// array as parameter and array as return type 
let cities = ["pune","mumbai","banglore"]

function addCity(lst,ele){
    lst.push(ele)
    return lst
}
let q4 = addCity(cities,"wardha")
console.log(q4)

// obj as parameter and obj as return type 

let info =  {
    firstName:"chinmay",
    lastName:"deshpande"
}
// dot notation and bracket notation 
function addLanguage(obj,lang){
    obj.language = lang
    return obj
}
let q5 = addLanguage(info, "marathi")
console.log(q5)


// set as parameter and set as return type 




// map as parameter and map as return type 


// function as parameter and function as return 

let x  = 10 
console.log(x)

let add = function(x,y){
    return x + y
}

function addition(fn,x,y){

    // let x = 12
    // let y = 4
    // let fn = function(x,y){
    //return x + y
//}
    let q7 = fn(x,y)
    return q7
}
let q8 = addition(add,12,4)
console.log(q8)

// rough
//console.log(add)
// // calling the function 
// let q6 = add(23,4)
// console.log(q6)

// // printing the function 
// console.log(add)


// function as return type from another function
// 8, 8:30 pm,9:00pm





