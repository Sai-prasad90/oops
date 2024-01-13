// ES6 class with constructor
class PersonD {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = ag;
        this.rollNo = rn;
    }
}

// Create an instance of PersonD using the new keyword
let saai = new PersonD("sai", "wate", 25, 6656);
console.log(saai);

// Object.create
// Create an empty object sai using Object.create
let sai = Object.create({});
console.log(sai);

// Add properties to sai
sai.firstName = "sai";
sai.lastName = "wate";
sai.rollNo = 543;
sai.age = 55;
console.log(sai);

// Object literal
// Define objects shreya and chetya using object literals
let shreya = {
    firstName: "shreya",
    lastName: "shreya",
    display: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

let chetya = {
    firstName: "chetya",
    lastName: "aag",
    display: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

// Call the display method on shreya and chetya objects
shreya.display();
chetya.display();

// Function constructor
// Define a constructor function PersonK with parameters for first name (fn) and last name (ln)
function PersonK(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
}

// Create instances of PersonK using the new keyword
let robert = new PersonK("robert", "albert");
let amol = new PersonK("amoK", "nimbalkar");
console.log(robert);
console.log(amol);

// Add a display method to the prototype of PersonK
PersonK.prototype.display = function () {
    console.log(this.firstName + " " + this.lastName);
};

// Call the display method on the instances
amol.display();
robert.display();

// Prototype inheritance
// Every object has one __proto__ pointing to its parent's prototype
console.log(amol.__proto__ === PersonK.prototype);
console.log(robert.__proto__ === PersonK.prototype);

// Add a hello method to the prototype of Array
Array.prototype.hello = function () {
    console.log("Minskole");
};

// Create an array and log it to the console
let names = ["sai", "chetya", "asmit"];
console.log(names);

// Call the hello method on the array
names.hello();

// Check if the __proto__ of names points to Array.prototype
console.log(names.__proto__ === Array.prototype);
