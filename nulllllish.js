// Nullish Coalescing Operator (??)
// Deals with null and undefined values

// Program 1
let variable = undefined;
// If variable is null or undefined, use "default" as the result
let result1 = variable ?? "default";
console.log(result1); //   default

let variable2 = "hello world";
// If variable2 is not null or undefined, use its value
let result2 = variable2 ?? "default";
console.log(result2); //   hello world

// Null Coalescing Operator (||)
// Deals with falsy values (null, undefined, false, 0, NaN, or "")

let variable3 = null;
let variable4 = "hello world";
let variable5 = 5 < 2;

// If variable3 is falsy, use "default-a" as the result
let result3 = variable3 || "default-a";
// If variable4 is truthy, use its value
let result4 = variable4 || "default-b";
// If variable5 is truthy, use its value; otherwise, use "default-c"
let result5 = variable5 || "default-c";

console.log(result3); //   default-a
console.log(result4); //   hello world
console.log(result5); //   default-c

// Short Circuit Evaluation

// Using && (Logical AND)
let a = "sai" && "prasad";
let b = 6 < 7 && "7 is greater";
let c = 6 < 7 && 8 > 9;
let d = 6 == 6 && null;

console.log(a); //   prasad
console.log(b); //   7 is greater
console.log(c); //   false
console.log(d); //   null

// Using || (Logical OR)
let e = 8 > 9 || "hello";
let f = 8 < 9 || "hello";
let g = "text" || 8 < 5;

console.log(e); //   hello
console.log(f); //   true
console.log(g); //   text

// Default Parameter Value using Short Circuit
function greet(name) {
    // If name is falsy, use "guest" as the default value
    name = name || "guest";
    console.log("hello " + name);
}

greet("haha"); //   hello haha
greet(); //   hello guest


