// //Types of setting "this" keyword manually

// //   1. bind
// //   2. call
// //   3. apply

// let emp = {
//     EmpName   : "shreya",
//     EmpField : "Interior",
//     displayName:function(){
//         console.log(this.EmpName + this.EmpField )
//     }

// }

// // let emp2 = {
// //     EmpName : "chetan",
// //     EmpField : "Consultant"
// // }

// let emp3 = {
//     EmpName : "Gauri",
//     EmpField : "Mentor"
// }

// let emp4 = {
//     EmpName : "shubh",
//     EmpField : "HR"
// }

// console.log(emp.EmpName)
// console.log(emp.EmpField)
// emp.displayName()


// let fn = info.displayName
// let fn = function(){
//     console.log(this.firstName + this.lastName)
// }
// fn()



// n = fn.bind(info2)
// // let fn = function(){
// //     console.log(info2.firstName + info2.lastName)
// // }
// fn()

// let fn = function(){
//     console.log(info3.firstName + info3.lastName)
// }
// fn = fn.bind(info3)
// fn()

//================================================
//Caaaaallllll method........


let animal1 = { name : "Lion", NamedFor: "King " };
let animal2 = { name: "Elephant", NamedFor: "Vegetarian" };
let animal3 = { name : "Dog", NamedFor: "Loyal" };
let animal4 = { name : "cat", NamedFor: "cute" };

let Sound = function(fn) {
    console.log(this.name);
    console.log(this.NamedFor)
    console.log(fn);
}

Sound.call(animal1, "Roar");
Sound.call(animal2, "trumpet");
Sound.call(animal3, "bhoo bhoo");
Sound.call(animal4, "mew meow");


//=================================================

/// apppplyyyyyyyyyy method

let fruit1 = {name: "Apple", color: "Red"}
let fruit2 = {name: "Coconut", color: "white"}
let fruit3 = {name: "mango", color: "Purple"}
let fruit4 = {name: "Pineapplei", color: "Orange"}

let displayFruit = function(a,b,c) {
    console.log(this.name);
    console.log(this.color);

    console.log(a);
    console.log(b);
    console.log(c);
}

displayFruit.apply(fruit1, ["Kashmir","150rs","1 kg"]);
displayFruit.apply(fruit2, ["Kerala","40rs", "1 Piece"]);
displayFruit.apply(fruit3, ["Konkan", "600rs", "1 kg"]);
displayFruit.apply(fruit4, ["Nagaland", "80rs", "1 piece"]);
