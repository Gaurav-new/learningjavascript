/* Create a new file called `test-environment-config.js` and create variables for a test environment configuration.

**Requirements:**
- Use `const` for values that never change
- Use `let` for values that might change
- Create at least 6 variables
- Print them in a formatted way

**Variables to create:**
1. Application URL (constant)
2. Application name (constant)
3. Environment name (QA, Staging, Production)
4. Current tester name
5. Test execution date
6. Is automation enabled? (we'll use text for now)

**Example Output:**
```
==========================================
     TEST ENVIRONMENT CONFIGURATION
==========================================
App Name: MyShop E-commerce
App URL: https://qa.myshop.com
Environment: QA
Tester: Priya Sharma
Date: 2024-01-16
Automation Enabled: Yes
========================================== */
let testSuiteName = "Test Environment Configuration";
const APP_NAME = " MyShop E-Commerce";
const APP_URL = " https://qa.myshop.com";
let environment = "QA";
let tester = "Gaurav Pawar";
let date = "2024-01-16";
isAutomationEnabled = true;



console.log("==========================================");
console.log("        " + testSuiteName.toUpperCase());
console.log("==========================================\n");

console.log("App Name : " + APP_NAME);
console.log("App URL : " + APP_URL);
console.log("Environment : " + environment);
console.log("Tester : " + tester);
console.log("Date : " + date);
console.log("Is Automation Enabled : " + isAutomationEnabled);


