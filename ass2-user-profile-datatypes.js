/* Part 1: Test User Profile with Mixed Types

Create `user-profile-datatypes.js` with a complete user profile using all data types.

**Requirements:**
```javascript
let firstName = "John";              // String
let lastName = "Doe";                // String
let userId = 1001;                   // Number
let age = 28;                        // Number
let email = "john.doe@test.com";     // String
let isActive = true;                 // Boolean
let loginCount = 15;                 // Number
let averageScore = 87.5;             // Number
let hasAccess = true;                // Boolean
```

Print formatted output with all data.
*/

// User Profile Data
let firstName = "John";              // String
let lastName = "Doe";                // String
let userId = 1001;                  // Number
let age = 28;                       // Number
let email = "john.doe@test.com";    // String
let isActive = true;                // Boolean
let loginCount = 15;                // Number
let averageScore = 87.5;            // Number
let hasAccess = true;               // Boolean

// Print Formatted Output
console.log("========================================");
console.log("        USER PROFILE DETAILS");
console.log("========================================\n");

console.log("Full Name: " + firstName + " " + lastName);
console.log("User ID: " + userId);
console.log("Age: " + age);
console.log("Email: " + email);
console.log("Account Active: " + isActive);
console.log("Login Count: " + loginCount);
console.log("Average Score: " + averageScore);
console.log("Has System Access: " + hasAccess);

console.log("\n========================================");
console.log("Profile loaded successfully!");
console.log("========================================");