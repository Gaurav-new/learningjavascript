/*
Part 5: Symbol — Unique Identifiers

Create `symbol-demo.js` to explore Symbol uniqueness.

**Requirements:**
1. Create two Symbols with the same description `"testId"`
2. Compare them with `===` — print the result
3. Print `typeof` each Symbol
4. Print `.description` of each Symbol
5. **Bonus:** Use two Symbols as keys on the same object and verify they don't overwrite each other

**Test Cases:**
```javascript
let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

console.log(sym1 === sym2);       // What do you expect?
console.log(typeof sym1);         // What type is it?
console.log(sym1.description);    // What prints here?
```

---
*/

console.log("========================================");
console.log("        SYMBOL DEMO");
console.log("========================================\n");

// Step 1: Create two Symbols with same description
let sym1 = Symbol("testId");
let sym2 = Symbol("testId");

// Step 2: Compare Symbols
console.log("sym1 === sym2: " + (sym1 === sym2)); // false

// Step 3: typeof Symbol
console.log("Type of sym1: " + typeof sym1); // symbol
console.log("Type of sym2: " + typeof sym2); // symbol

// Step 4: description
console.log("sym1 description: " + sym1.description); // testID
console.log("sym2 description: " + sym2.description); // testID

// Step 5 (Bonus): Using Symbols as object keys
let user = {};

user[sym1] = "User ID 1";
user[sym2] = "User ID 2";

console.log("\nUsing Symbols as object keys:");
console.log("Value for sym1: " + user[sym1]); // User ID 1
console.log("Value for sym2: " + user[sym2]); // User ID 2

console.log("\n=============");
console.log("Demo Complete!");
console.log("==============");