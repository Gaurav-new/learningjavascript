/*
Exercise 3: Test Results Array

**Scenario:** Create an array of test result objects and calculate statistics.

**Requirements:**
1. Create an array called `testResults` with 5 test objects
2. Each test object should have:
   - name (test name)
   - result ("PASSED", "FAILED", or "SKIPPED")
   - duration (in seconds)

3. Loop through and print each test result

4. Calculate and print:
   - Total tests
   - Passed count
   - Failed count
   - Skipped count
   - Pass rate (percentage)
   - Total duration

**Example Output:**
```
Test Execution Report
━━━━━━━━━━━━━━━━━━━━━━━━━

Test Results:

✓ 1. Login Test
  Result: PASSED
  Duration: 2.5s

✗ 2. Logout Test
  Result: FAILED
  Duration: 1.8s

✓ 3. Search Test
  Result: PASSED
  Duration: 3.2s

⊘ 4. Checkout Test
  Result: SKIPPED
  Duration: 0.0s

✓ 5. Payment Test
  Result: PASSED
  Duration: 2.1s

Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━
  Total tests: 5
  Passed: 3 (60.0%)
  Failed: 1 (20.0%)
  Skipped: 1 (20.0%)

  Total duration: 9.6s
  Average duration: 1.9s

*/

let testResults = [
    {
        name : "Login Test",
        result : "PASSED",
        duration : 2.5,
    },

    {
        name : "Logout Test",
        result : "FAILED",
        duration : 1.8,
    },
    {
        name : "Search Test",
        result : "PASSED",
        duration : 3.2,
    },
    {
        name : "Checkout Test",
        result : "SKIPPED",
        duration : 0.0,
    },
    {
        name : "Payment Test",
        result : "PASSED",
        duration : 2.1,
    },

];
 console.log (testResults);

 console.log("Test Execution Report");

 let totalTests = 0;
 let passedCount = 0;
 let failedCount = 0;
 let skippedCount = 0;
 let totalDuration = 0;
 let passRate = 0;
 let averageDuration = 0;

 for (let i=0; i < testResults.length; i++)
 {
    if (testResults[i].name === "Login Test")
    {
    console.log("Name of the test :" + testResults[i].name);
    console.log("Result of the test :" + testResults[i].result);
    console.log("Duration of the test :" + testResults[i].duration + "s");
    }
    else if (testResults[i].name ==="Logout Test")
    {
    console.log("Name of the test :" + testResults[i].name);
    console.log("Result of the test :" + testResults[i].result);
    console.log("Duration of the test :" + testResults[i].duration + "s");
    }
    else if (testResults[i].name === "Search Test")
    {
    console.log("Name of the test :" + testResults[i].name);
    console.log("Result of the test :" + testResults[i].result);
    console.log("Duration of the test :" + testResults[i].duration + "s");
    }
    else if (testResults[i].name === "Checkout Test")
    {
    console.log("Name of the test :" + testResults[i].name);
    console.log("Result of the test :" + testResults[i].result);
    console.log("Duration of the test :" + testResults[i].duration + "s");
    }
    else if (testResults[i].name === "Payment Test")  
    {
    console.log("Name of the test :" + testResults[i].name);
    console.log("Result of the test :" + testResults[i].result);
    console.log("Duration of the test :" + testResults[i].duration + "s");
    }
    totalTests++;
    console.log("Total tests :" + totalTests);

    
 }

 if (testResults[i].result === "Passed")
    {
        passedCount++;
        console.log("Passcount :" + passedCount);

    }
    if (testResults[i].result === "Failed")
    {
        failedCount++;
        console.log("Failcount :" + failedCount);
    }
    if (testResults[i].result === "SKIPPED")
    {
        skippedCount++;
        console.log("Skipcount :" + skippedCount);
    }   
    
    console.log("================== Statustics : ================== \n");
    totalDuration = totalDuration + testResults[i].duration;
    console.log("Total duration :" + totalDuration + "s");

    passRate = ( passedCount/totalTests) *100;
    console.log("Pass Rate :" + passedCount + passRate +  "%");


    FailedRate = ( failedCount/totalTests) * 100;

    console.log("Failed Rate : " + failedCount + FailedRate + "%");


    averageDuration = totalDuration/totalTests;
    console.log("Average duration :" + averageDuration + "s");


   
    console.log();

