let testResult = "Failed";

switch(testResult)
{
    case "Test Passed" : "Test Passed";
    console.log("✓ Test passed successfully");
    break;

    case "Failed" : 
    console.log("✗ Test failed - check logs");
    break;

    case "Skipped": 
    console.log("⊘ Test skipped");
    break;

    case "Pending": 
    console.log("⏳ Test pending - awaiting results");
    break;

    default: "Unknown";
    console.log("❓ Unknown test result");

}
console.log("This line will be executed after switch encounters break.");