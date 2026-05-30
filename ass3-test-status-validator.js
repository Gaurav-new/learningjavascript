/*
Exercise 3: Test Status Validator

**Scenario:** A test is considered successful if status is "PASSED" OR "SKIPPED", AND there are no errors.

**Requirements:**
1. Create two variables:
   - `status` with value `"PASSED"`
   - `errorCount` with value `0`
2. Write an if-else statement that:
   - Checks if (status is "PASSED" OR "SKIPPED") AND errorCount equals 0
   - If yes, print: `"✅ Test completed successfully"`
   - If no, print: `"❌ Test has issues"`

**Test Cases:**
- `status="PASSED"`, `errorCount=0` → Success
- `status="SKIPPED"`, `errorCount=0` → Success
- `status="PASSED"`, `errorCount=2` → Issues
- `status="FAILED"`, `errorCount=0` → Issues

**Example Output:**
```
Test Status: PASSED
Error Count: 0

Validation:
  Status is acceptable: true
  No errors: true

✅ Test completed successfully
```
*/




let status = "PASSED";
let errorCount = 0;

console.log("Test Status: " + status);
console.log("Error Count: " + errorCount + "\n");

// Validation checks
let isStatusValid = (status === "PASSED" || status === "SKIPPED");
let hasNoErrors = (errorCount === 0);

console.log("Validation:");
console.log("  Status is acceptable: " + isStatusValid);
console.log("  No errors: " + hasNoErrors + "\n");

// Final result
if ((status === "PASSED" || status === "SKIPPED") && errorCount === 0) {
    console.log("✅ Test completed successfully");
} else {
    console.log("❌ Test has issues");
}