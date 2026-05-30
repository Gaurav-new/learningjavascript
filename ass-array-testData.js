/*Exercise 3: Test Data Management

**Scenario:** Manage test user emails using array methods.

**Requirements:**
1. Create an array called `testEmails` with these initial values:
   - "user1@test.com"
   - "user2@test.com"
   - "user3@test.com"

2. Perform these operations:
   - Print initial emails and count
   - Add "user4@test.com" to the END
   - Add "admin@test.com" to the BEGINNING
   - Remove the last email
   - Remove the first email
   - Print final emails and count

**Example Output:**
```
Test Email Management

Initial emails:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]
Count: 3

After adding user4@test.com to end:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

After adding admin@test.com to beginning:
[ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

After removing last email:
[ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

After removing first email:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

Final count: 3
```

*/

let testEmails =["user1@test.com","user2@test.com", "user3@test.com"];
console.log(testEmails);
console.log(testEmails.length);
testEmails.push("user4@test.com");

console.log(testEmails);
testEmails.unshift("admin@test.com");
console.log(testEmails);
testEmails.pop();
console.log(testEmails);
