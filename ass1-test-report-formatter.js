let testSuiteName = "Login Test Suite";

// Test Case Names
let test1 = "Login with valid credentials";
let test2 = "Login with invalid password";
let test3 = "Login with empty username field";
let test4 = "Login with special characters in username";
let test5 = "Remember me checkbox functionality";

// Test Case Status
let status1 = "PASSED";
let status2 = "FAILED";
let status3 = "FAILED";
let status4 = "PASSED";
let status5 = "PASSED";

// Summary Count
let totalTests = 5;
let passed = 3;
let failed = 2;

// Print Report
console.log("==========================================");
console.log("        " + testSuiteName.toUpperCase());
console.log("==========================================\n");

console.log("Test 1: " + test1);
console.log("Status: " + status1 + "\n");

console.log("Test 2: " + test2);
console.log("Status: " + status2 + "\n");

console.log("Test 3: " + test3);
console.log("Status: " + status3 + "\n");

console.log("Test 4: " + test4);
console.log("Status: " + status4 + "\n");

console.log("Test 5: " + test5);
console.log("Status: " + status5 + "\n");

console.log("==========================================");
console.log("        TEST SUMMARY");
console.log("==========================================");
console.log("Total Tests: " + totalTests);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
console.log("==========================================");