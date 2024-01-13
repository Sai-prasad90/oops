var firstName = "sai"
var lastName = "prasad"

// Program 1
let info = {
    firtsName: "shreya",
    lastName: "tol",
    display: function () {
        console.log(this.firtsName + this.lastName); // Output: shreyatol
        function display2() {
            console.log(this.firstName + this.lastName); // Output: undefinedundefined
        }
        display2();
    }
}
info.display();

// Program 2
let info2 = {
    firstName: "sai",
    lastName: "prasad",
    display: function () {
        console.log(this.firstName + this.lastName); // Output: saiprasad
        let display2 = () => {
            console.log(this.firstName + this.lastName); // Output: saiprasad
        }
        display2();
    }
}
info2.display();

// Program 3
let info3 = {
    firstName: "sai",
    lastName: "prasad",
    display: () => {
    //     console.log(this.firstName + this.lastName);
        let display2 = () => {
            console.log(this.firstName + this.lastName);
        }
        display2();
    }
}
info3.display();

// Program 4
function additionA(x, y) {
    return x + y;
}
let r1 = additionA(12, 4);
console.log(r1); // Output: 16

// Program 5
let addition2 = function (x, y) {
    return x + y;
}
let q1 = addition2(12, 3);
console.log(q1); // Output: 15

// Program 6
let addition3 = (x, y) => x + y;
let q2 = addition3(12, 3);
console.log(q2); // Output: 15

// Program 7
function greet(name) {
    return name + "India";
}
let q4 = greet("Good morning");
console.log(q4); // Output: Good morningIndia

let greetFunc = function (name) {
    return "Good morning " + name;
}
let q5 = greetFunc("sai");
console.log(q5); // Output: Good morning sai

let greetArrow = name => "hello " + name;
let q6 = greetArrow("World");
console.log(q6); // Output: hello World
