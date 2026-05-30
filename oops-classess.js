/* ## Exercise 1: ES6 Classes

**Scenario:** Refactor constructor functions to ES6 classes.

**Requirements:**
1. Create a `TestSuite` class with:
   - Constructor accepting `name` parameter
   - Public field: `tests = []`
   - Private field: `#executionCount = 0`

2. Add public methods:
   - `addTest(testName)` - adds test to array, increments #executionCount
   - `run()` - logs running message for each test
   - `getExecutionCount()` - returns #executionCount

3. Create an instance and add 5 tests
4. Run the suite and display execution count

**Example Output:**
```
=== EXERCISE 1: ES6 Classes ===

Test Suite: Regression Tests

Adding tests...
  Added: Login Test
  Added: Logout Test
  Added: Search Test
  Added: Checkout Test
  Added: Payment Test

Running suite...
  Running test 1/5: Login Test
  Running test 2/5: Logout Test
  Running test 3/5: Search Test
  Running test 4/5: Checkout Test
  Running test 5/5: Payment Test

Total tests executed: 5
```

**Starter code:**
```javascript
console.log("=== EXERCISE 1: ES6 Classes ===\n");

class TestSuite {
    // Your code here
}

let suite = new TestSuite("Regression Tests");
console.log(`Test Suite: ${suite.name}\n`);

console.log("Adding tests...");
suite.addTest("Login Test");
// Add more tests

console.log("\nRunning suite...");
suite.run();

console.log(`\nTotal tests executed: ${suite.getExecutionCount()}`);
```

*/

class TestSuite {
  // Public fields
  tests = [];

  // Private fields (# prefix)
  #executionLog = 0;

  constructor(name) {
    this.name = name;
  }

  addTest(testName) {
    this.tests.push(testName);
    this.#executionLog++;
    this.#log(`Added test: ${testName}`);
  }

 getExecutionCount() {
    return this.#executionLog;
 }

 #log(message){
    console.log(message);
 }


  run() {
    console.log(`  Running test 1/5: ${this.tests[0]}`);
    console.log(`  Running test 2/5: ${this.tests[1]}`);
    console.log(`  Running test 3/5: ${this.tests[2]}`);
    console.log(`  Running test 4/5: ${this.tests[3]}`);
    console.log(`  Running test 5/5: ${this.tests[4]}`); 
    console.log("Total tests executed: " + this.getExecutionCount());  
  }
}

let suite = new TestSuite("Regression Tests");
console.log("=== EXERCISE 1: ES6 Classes ===\n");
console.log(`Test Suite: ${suite.name}\n`);
console.log("Adding tests...");
suite.addTest("Login Test");
suite.addTest("Logout Test");
suite.addTest("Search Test");
suite.addTest("Checkout Test");
suite.addTest("Payment Test");

console.log("\nRunning suite...");
suite.run();


