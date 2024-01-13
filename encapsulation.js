// Program 1

// Encapsulation 
// Lexical scope

function addition() {
    // a and b are defined in the outermost scope
    let a = 10;
    let b = 5;

    // s and t are not defined here, so this will result in an error
    // Uncomment the next line when s and t are meant to be accessed in the outer scope
    // console.log(s + t);

    console.log(a + b); // 15

    function additionB() {
        // s and t are defined in the outer scope of this function
        let s = 8;
        let t = 3;

        console.log(a + b + s + t); // 26

        // a1 and b1 are not defined here, so this will result in an error
        // Uncomment the next line when a1 and b1 are meant to be accessed in the outer scope
        // console.log(a1 + b1);

        function additionC() {
            let a1 = 10;
            let b1 = 5;

            // Output: 41 (a + b + s + t + a1 + b1)
            console.log(a + b + s + t + a1 + b1); // 41
        }

        additionC();
    }

    additionB();
}

addition();


// Program 2
function additionD(x, y) {
    console.log(x + y); // 15

    // console.log("hello");

    return x + y;
}

// Calling the function with arguments 12 and 3
let q2 = additionD(12, 3);
console.log(q2); // 15

// Program 3

// Number as a parameter and number as a return type
function addA(x, y) {
    return x + y;
}
let q3 = addA(12, 4);
console.log(q3);

// String as a parameter and string as a return
function greet(word) {
    return "hello " + word;
}
let q4 = greet("sai");
console.log(q4);

// Boolean as a parameter and boolean as a return type
function cabDrive(age, haveVehicle) {
    if (age >= 18 && haveVehicle) {
        return true;
    }
}
let q5 = cabDrive(21, true);
console.log(q5);

// Array as a parameter and array as a return type
let cities = ["pune", "thane", "bangalore"];
function addCity(arr) {
    arr.push("chandrapur");
    return arr;
}
let q6 = addCity(cities);
console.log(q6);

// Object as a parameter and object as a return type
let info = {
    firstName: "saiprasad",
    lastName: "wate",
    age: 34,
};

function addCountry(obj) {
    obj.country = "india";
    obj['country2'] = "honolulu";
    return obj;
}
let q7 = addCountry(info);
console.log(q7);

// Function as a return
function addN() {
    return function () {
        console.log("saksham");
    };
}
let q8 = addN();
console.log(q8);

// Uncomment jar q8 define as a function and invoke it
// let q8 = function() {
//     console.log("hello");
// };
// q8();
