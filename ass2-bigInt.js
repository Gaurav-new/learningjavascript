/*### Part 4: BigInt — Large Number Precision

Create `bigint-demo.js` to explore the limit of regular `Number` and how `BigInt` fixes it.

**Requirements:**
1. Store `Number.MAX_SAFE_INTEGER` and print it
2. Add `1`, `2`, and `3` to it — observe where the result stops changing
3. Repeat using BigInt equivalent (`9007199254740991n`)
4. Print `typeof` a BigInt value
5. Demonstrate that mixing BigInt and Number throws an error (use try/catch)

**Test Cases:**
```javascript
// What does this print?
let max = Number.MAX_SAFE_INTEGER;
console.log(max + 1);  // ?
console.log(max + 2);  // ?
console.log(max + 3);  // ?

// Fix with BigInt
let bigMax = 9007199254740991n;
console.log(bigMax + 1n);  // ?
console.log(bigMax + 2n);  // ?
console.log(bigMax + 3n);  // ?
```

---
*/

console.log("========================================");
console.log("        BIGINT DEMO");
console.log("========================================\n");

// Step 1: Number.MAX_SAFE_INTEGER
let max = Number.MAX_SAFE_INTEGER;
console.log("Max Safe Integer (Number): " + max + "\n");

// Step 2: Adding values
console.log("Using Number:");
console.log("max + 1 = " + (max + 1));
console.log("max + 2 = " + (max + 2));
console.log("max + 3 = " + (max + 3));  // Notice issue here

// Step 3: Using BigInt
let bigMax = 9007199254740991n;
console.log("\nUsing BigInt:");
console.log("bigMax + 1n = " + (bigMax + 1n));
console.log("bigMax + 2n = " + (bigMax + 2n));
console.log("bigMax + 3n = " + (bigMax + 3n));

// Step 4: typeof BigInt
console.log("\nType of bigMax: " + typeof bigMax);

// Step 5: Mixing BigInt and Number 
console.log("\nMixing BigInt and Number:");

try {
    let result = bigMax + 1;
    console.log(result);
} catch (error) {
    console.log("Error: Cannot mix BigInt and Number");
}

console.log("\n========================================");
console.log("Demo Complete!");
console.log("========================================");