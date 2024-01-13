//number as parameter and number as return tyoe 
function multi(x,y){
    return x * y

}
let a = multi(15,5)
console.log(a)

function add(x1,y1){
    return x1 + y1
}

let a1 = add((10+5),(12-9))
console.log(a1)

//string as parameter and string as return type
 function wish(word){
    return "tata" + word
 }
 let wishing = wish(" bye_bye")
 console.log(wishing)

 function emp(data){
    return data + "   warora  " + 9011212430
 }
 //eg
 let sai = emp("   saiprasad  ")
 console.log(sai)

 //boolean as parameter and return tyoe
 function CanDrive(age,licence){
    if(age >= 18 && licence){
        return true
    }
    else{
        return false
    }
 }
 let rider = CanDrive(25,true)
 console.log(rider)
//eg
 let chetan = CanDrive(2,false)
 console.log(chetan)

 let sameer = CanDrive(20,false)
 console.log(sameer)

 //array array as paramter and return type
let fruits=["mango","papaya","apple","kiwi"]

function addfruit(list,ele){
    list.push(ele)
    return list
}
let f = addfruit(fruits,"sugarcane")
console.log(f)
//eg

let number = [1, 2, 3, 4, 5];

function removefirstwo(arr) {
    return arr.slice(2, arr.length)
}

let N = removefirstwo(number)
console.log(N)

//-------------------

// let vehicalbrand=["tata","mahindra","audi","jaguar"]

// function  remove(list,ele){
//     list.pop(ele)
//     return list
// }
// let v = remove(vehicalbrand,"jaguar")
// console.log(v)

// //---------

// //object as para and return type
// let info =  {
//     firstName:"sai",
//     lastName:"wate"
// }

// function addLanguage(obj,lang){
//     obj.language = lang
//     return obj
// }
// let data1 = addLanguage(info, "hindi")
// console.log(data1)


// //=============
// //function as perameter and rturn type


// let sub = function(x,y){
//     return x - y
// }

// function minus(fn,x,y){

//     let m = fn(x,y)
//     return m
// }
// let s = minus(sub,8,2)
// console.log(s)

