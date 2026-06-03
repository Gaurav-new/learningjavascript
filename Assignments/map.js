/*
Exercise 3: Build a Test Results Map

As your test suite runs, you need to record each test's result and later look up, update, and summarise.

1. Create a Map called `testResults` using the constructor with pairs and pre-populate it:
   - `"Login Test"` → `"PASSED"`, `"Logout Test"` → `"FAILED"`, `"Search Test"` → `"PASSED"`

2. Add a fourth entry `"Cart Test"` → `"PASSED"` using `set()`.

3. Print the result for `"Logout Test"` using `get()`.

4. Update `"Logout Test"` to `"PASSED"` (a rerun succeeded). Print the updated value.

5. Check whether `"Payment Test"` exists using `has()` and print the result.

6. Delete `"Cart Test"`, capture the return value, and print it. Then try to delete `"Ghost Test"` and print that return value too.

7. Print the final Map size, then iterate over all entries and print each test name and result.

Expected output:
```
Logout Test result: FAILED
After rerun: PASSED
Has 'Payment Test': false
delete('Cart Test') returned: true
delete('Ghost Test') returned: false
Final size: 3
Login Test → PASSED
Logout Test → PASSED
Search Test → PASSED


*/

let testResults = new Map([
    ["Login Test", "PASSED"],
    ["Logout Test", "FAILED"],
    ["Search Test", "PASSED"]
]);

testResults.set("Cart Test","PASSED");
console.log(testResults);
console.log("Logout Test result: " + testResults.get("Logout Test"));

//update logout test result to passed
console.log("Before rerun:" + testResults.get("Logout Test"));
testResults.set("Logout Test", "PASSED");
console.log("After rerun: " + testResults.get("Logout Test"));
console.log("Has Payment Test: " + testResults.has("Payment Test"));
console.log("delete cart test: "+ testResults.delete("Cart Test"));
console.log("delete ghost test: "+ testResults.delete("Ghost Test"));
console.log("Final size: " + testResults.size);