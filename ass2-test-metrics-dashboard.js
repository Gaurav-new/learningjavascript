/*

Part 2: Test Metrics Dashboard

Create `test-metrics-dashboard.js` showing test execution metrics.

**Use these data types:**
- Total tests (number)
- Passed tests (number)
- Failed tests (number)
- Pass rate (number with decimal)
- Test suite name (string)
- All tests passed? (boolean)
*/

// Test Metrics Data
let testSuiteName = "Login Test Suite";  // String
let totalTests = 10;                     // Number
let passedTests = 8;                     // Number
let failedTests = 2;                     // Number
let passRate = 80.0;                     // Number (decimal)
let allTestsPassed = false;              // Boolean

// Print Dashboard
console.log("================================");
console.log("       TEST METRICS DASHBOARD");
console.log("=================================\n");

console.log("Test Suite Name: " + testSuiteName);
console.log("Total Tests: " + totalTests);
console.log("Passed Tests: " + passedTests);
console.log("Failed Tests: " + failedTests);
console.log("Pass Rate: " + passRate + "%");
console.log("All Tests Passed: " + allTestsPassed);

console.log("\n================================");
console.log("Dashboard generated successfully!");
console.log("===================================");