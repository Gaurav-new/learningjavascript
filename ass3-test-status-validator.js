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