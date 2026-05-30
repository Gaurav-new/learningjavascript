console.log("---- STEP 1: HOISTING (let) ----");

// console.log("Status before declaration: " + testStatus); ❌ Error
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);

/*
Output 
---- STEP 1: HOISTING (let) ----
Status after declaration: PASSED

*/