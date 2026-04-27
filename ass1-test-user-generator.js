/* Test Data Generator

Create a new file called `test-user-generator.js` and create multiple test user credentials.

**Requirements:**
- Create 3 different test users
- Each user should have: firstName, lastName, email, password
- Use descriptive variable names (user1FirstName, user1Email, etc.)
- Print all users in a formatted table-like structure

**Example Output:**
```
========================================
         TEST USER DATABASE
========================================

USER 1:
--------
Name: John Doe
Email: john.doe@test.com
Password: JohnPass@123

USER 2:
--------
Name: Jane Smith
Email: jane.smith@test.com
Password: JanePass@456

USER 3:
--------
Name: Bob Johnson
Email: bob.johnson@test.com
Password: BobPass@789

========================================
Total Users: 3
========================================
```

**Hints:**
- Create variables: `let user1FirstName = "John";`
- Combine names: `console.log("Name: " + user1FirstName + " " + user1LastName);`
- Use blank console.log() for spacing

---
*/


console.log("========================================");
console.log("         TEST USER DATABASE");
console.log("========================================\n");

// USER 1
let user1FirstName = "John";
let user1LastName = "Doe";
let user1Email = "john.doe@test.com";
let user1Password = "JohnPass@123";

console.log("USER 1:");
console.log("--------");
console.log("Name: " + user1FirstName + " " + user1LastName);
console.log("Email: " + user1Email);
console.log("Password: " + user1Password + "\n");

// USER 2
let user2FirstName = "Jane";
let user2LastName = "Smith";
let user2Email = "jane.smith@test.com";
let user2Password = "JanePass@456";

console.log("USER 2:");
console.log("--------");
console.log("Name: " + user2FirstName + " " + user2LastName);
console.log("Email: " + user2Email);
console.log("Password: " + user2Password + "\n");

// USER 3
let user3FirstName = "Bob";
let user3LastName = "Johnson";
let user3Email = "bob.johnson@test.com";
let user3Password = "BobPass@789";

console.log("USER 3:");
console.log("--------");
console.log("Name: " + user3FirstName + " " + user3LastName);
console.log("Email: " + user3Email);
console.log("Password: " + user3Password + "\n");

console.log("========================================");
console.log("Total Users: 3");
console.log("========================================");