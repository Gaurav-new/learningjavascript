/*
Exercise 1: Create Test Case Object

**Scenario:** Create a structured test case object.

**Requirements:**
1. Create an object called `testCase` with these properties:
   - id: "TC-001"
   - name: "Login with valid credentials"
   - priority: "High"
   - status: "Passed"
   - duration: 2.5
   - browser: "Chrome"

2. Print each property using dot notation
3. Add a new property `tester` with value "John Doe"
4. Modify the `status` to "Failed"
5. Print the complete object

**Example Output:**
```
Test Case Details
━━━━━━━━━━━━━━━━━━━━━━━━━

ID: TC-001
Name: Login with valid credentials
Priority: High
Status: Passed
Duration: 2.5s
Browser: Chrome

Adding tester...
Changing status...

Updated Test Case:
{
  id: 'TC-001',
  name: 'Login with valid credentials',
  priority: 'High',
  status: 'Failed',
  duration: 2.5,
  browser: 'Chrome',
  tester: 'John Doe'
}
*/

let testCase = {

     id: "TC-001",
     name: "Login with valid credentials",
     priority: "High",
     status: "Passed",
     duration: 2.5,
     browser: "Chrome",
};

console.log(testCase);

//testCase.id = "TC-001";
console.log("ID :" + testCase.id);
console.log("Name: " + testCase.name);
console.log("Priority: " + testCase.priority);
console.log("Status: " + testCase.status);
console.log("Duration: ", + testCase.duration + "s");
console.log("Browser: " + testCase.browser);


testCase.tester = "John Doe";
console.log("Adding tester to object");
console.log("Changing status of object");
testCase.status =" Failed";
console.log("Updated TestCase :");
console.log(testCase);


