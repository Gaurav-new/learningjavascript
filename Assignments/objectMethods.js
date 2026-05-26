/*

Exercise 4: Object Methods and 'this' Keyword

**Scenario:** Create objects with methods to simulate a test runner.

**Requirements:**
1. Create an object called `testRunner` with:
   - name: "Login Suite"
   - totalTests: 5
   - passedTests: 0
   - failedTests: 0

2. Add these methods to the object:
   - `start()` - prints "Running test suite: [name]"
   - `pass()` - increments passedTests and prints the count
   - `fail()` - increments failedTests and prints the count
   - `getReport()` - prints a summary with pass rate

3. Call the methods to:
   - Start the suite
   - Mark 3 tests as passed
   - Mark 1 test as failed
   - Generate the report

4. Create a second object `testCase` with methods:
   - `start()` - sets status to "RUNNING" and records start time
   - `pass()` - sets status to "PASSED" and calculates duration
   - `fail(reason)` - sets status to "FAILED" with reason
   - Properties: name, status, duration, startTime

**Example Output:**
```
Test Runner with Methods
━━━━━━━━━━━━━━━━━━━━━━━━━

Running test suite: Login Suite

✓ Test passed! Total passed: 1
✓ Test passed! Total passed: 2
✓ Test passed! Total passed: 3
✗ Test failed! Total failed: 1

Test Suite Report:
  Name: Login Suite
  Total tests: 5
  Passed: 3 (60.0%)
  Failed: 1 (20.0%)
  Not yet run: 1

━━━━━━━━━━━━━━━━━━━━━━━━━

Test Case with Methods:

✓ Started: Login Test
  Status: RUNNING

✓ Login Test PASSED
  Duration: 0.05s
```

**Hints:**
- Use `this.propertyName` inside methods to access object properties
- For duration calculation: `Date.now()` gives current time in milliseconds
- Use `function() { }` syntax for methods, not arrow functions (for 'this' to work)

*/

let testRunner = {
     name: "Login Suite",
     totalTests: 5,
     passedTests: 0,
     failedTests: 0,

  start: function () 
  {
    console.log("Running test suite :" + this.name);
  },

  pass ()
  {
    this.passedTests++;
    console.log(" ✓ Test passed! Total passed: " + this.passedTests);
  },
   
  fail ()
  {
    this.failedTests++;
    console.log(" ✗ Test failed! Total failed: " + this.failedTests);
  },
  getReport()
  {
    console.log(" Passed Rate " +this.passedTests);
  }

  
};

testRunner.start();
testRunner.pass();
testRunner.pass();
testRunner.pass();
testRunner.fail();
testRunner.getReport();

let testCase = {
    name : "Login Test",
    status : "Walking",
    duration :0,
    starttime : null,

    start(){
        this.status = "Running";
        this.starttime = Date.now();
        console.log("✓ Started: " + this.name);
        console.log("Status: " + this.status);
    },

    passed() {
        this.status = "Passed";
        this.duration = (Date.now() - this.starttime) / 1000; // Convert to seconds
        console.log("✓ " + this.name + " PASSED");
        console.log("Duration: " + this.duration + "s");

    }

};


testCase.start();
testCase.passed();