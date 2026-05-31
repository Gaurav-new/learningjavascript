let a = "PASSED";
let b = new String("PASSED");

let c = 42;
let d = new Number(42);

let e = true;
let f = new Boolean(true);

console.log(typeof a);  // string
console.log(typeof b); // object
console.log(typeof c); // number
console.log(typeof d); // object
console.log(typeof e); // boolean
console.log(typeof f); // object

console.log("Expected type of each value: \n");
console.log(typeof a); // string primitive
console.log(typeof b); // object wrapper object
console.log(typeof c); // number primitive
console.log(typeof d); // object wrapper object
console.log(typeof e); // boolean primitive
console.log(typeof f); // object wrapper object