/*Part 3: Test Flow Simulation

Create a new file called `test-execution-flow.js` and simulate a test execution flow where variable values change.

**Requirements:**
- Create a variable for test status
- Show how it changes during test execution
- Create variables for test details (test name, step number, etc.)
- Print the flow as it progresses

**Example Output:**
```
==========================================
      TEST EXECUTION FLOW
==========================================
Test Name: Login Functionality Test
Tester: Priya

Step 1: Opening browser
Status: IN PROGRESS

Step 2: Navigating to login page
Status: IN PROGRESS

Step 3: Entering credentials
Username: testuser@example.com
Status: IN PROGRESS

Step 4: Clicking login button
Status: IN PROGRESS

Step 5: Verifying dashboard
Status: COMPLETED

==========================================
Final Status: PASSED
Test Duration: 2.5 seconds
==========================================
```

**Hints:**
- Start with: `let testStatus = "IN PROGRESS";`
- Update status as you go: `testStatus = "COMPLETED";`
- Use `const` for testName (doesn't change)
- Use `let` for stepNumber (changes)*/


console.log("==========================================");
console.log("      TEST EXECUTION FLOW");
console.log("==========================================");

// Test Details
const testName = "Login Functionality Test";
const tester = "Priya";

let testStatus = "IN PROGRESS";
let stepNumber;

// Print Test Info
console.log("Test Name: " + testName);
console.log("Tester: " + tester + "\n");

// Step 1
stepNumber = 1;
console.log("Step " + stepNumber + ": Opening browser");
console.log("Status: " + testStatus + "\n");

// Step 2
stepNumber = 2;
console.log("Step " + stepNumber + ": Navigating to login page");
console.log("Status: " + testStatus + "\n");

// Step 3
stepNumber = 3;
let username = "testuser@example.com";
console.log("Step " + stepNumber + ": Entering credentials");
console.log("Username: " + username);
console.log("Status: " + testStatus + "\n");

// Step 4
stepNumber = 4;
console.log("Step " + stepNumber + ": Clicking login button");
console.log("Status: " + testStatus + "\n");

// Step 5
stepNumber = 5;
testStatus = "COMPLETED";
console.log("Step " + stepNumber + ": Verifying dashboard");
console.log("Status: " + testStatus + "\n");

// Final Result
testStatus = "PASSED";
let testDuration = "2.5 seconds";

console.log("==========================================");
console.log("Final Status: " + testStatus);
console.log("Test Duration: " + testDuration);
console.log("==========================================");