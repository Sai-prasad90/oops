// Array manipulation
let names = ["sai", "chetan", "amol", "priya", "shreya"];
let names2 = names;  // names2 is assigned a reference to the same array as names
names2[0] = "divya";  // Modifying names2 also affects names since they reference the same array
console.log(names);  // Output: ["divya", "chetan", "amol", "priya", "shreya"]
console.log(names2);  // Output: ["divya", "chetan", "amol", "priya", "shreya"]

// Program 1
// Spread operator
let numbers = [11, 22, 33, 44, 55, 66, 77];
function addThree(a, b, c) {
  console.log(a + b + c);
}
addThree(...numbers);  // Output: 66 (sum of the first three numbers)

// Program 2
let cities = ["pune", "mumbai", "banglore"];
let cities2 = [...cities];  // Creating a new array (cities2) with the same values as cities
cities2[0] = "kathmandu";  // Modifying cities2 does not affect cities
console.log(cities2);  // Output: ["kathmandu", "mumbai", "banglore"]
console.log(cities);  // Output: ["pune", "mumbai", "banglore"]

// Program 3
let a = [11, 22, 33];
let b = [44, 55, 66];
let c = a.concat(b);  // Concatenating arrays a and b
console.log(c);  // Output: [11, 22, 33, 44, 55, 66]
console.log(a);  // Output: [11, 22, 33]
console.log(b);  // Output: [44, 55, 66]
let d = [...a, 5, ...b];  // Using spread operator to concatenate arrays a and b
console.log(d);  // Output: [11, 22, 33, 5, 44, 55, 66]

// Program 4
let obj1 = { name: 'himansu', age: 25 };
let obj2 = { city: 'denver', country: 'USA' };
let obj3 = { ...obj1, ...obj2 };  // Merging objects using spread operator
console.log(obj3);  // Output: { name: 'himansu', age: 25, city: 'denver', country: 'USA' }

// Program 5
function addAll(...eles) {
  console.log(eles);  // Output: [11, 22, 33, 44, 55, 66, 77, 88, 8, 9, 0, 5, 7]
  return eles.reduce(function (acc, el, index, arr) {
    return acc + el;
  }, 0);
}
let q1 = addAll(11, 22, 33, 44, 55, 66, 77, 88, 8, 9, 0, 5, 7);
console.log(q1);  // Output: 445 (sum of all elements)

// Program 6
let numberD = [22, 33, 44, 55, 66];
let [a1, b1, c1, ...d1] = numberD;  // Destructuring array assignment
console.log(d1);  // Output: [55, 66]
console.log(a1);  // Output: 22

// Program 6 (corrected, changed variable names a1, b1, c1 to a1, a2, a3)
let numberE = [22, 33, 44, 55, 66];
let [a1, a2, a3, ...d2] = numberE;
console.log(d2);  // Output: [55, 66]
console.log(a1);  // Output: 22
console.log(a2);  // Output: 33
console.log(a3);  // Output: 44

// Program 7
let obj1a = { firstName: "sai", lastName: "wate", middleName: 'baba' };
let { firstName, ...restInfo } = obj1a;  // Destructuring object assignment
console.log(obj1a);  // Output: { firstName: 'sai', lastName: 'wate', middleName: 'baba' }
console.log(restInfo);  // Output: { lastName: 'wate', middleName: 'baba' }
