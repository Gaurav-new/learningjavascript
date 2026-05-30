/*
Exercise 2: Test User Objects

**Scenario:** Create multiple test user objects.

**Requirements:**
1. Create 3 test user objects with these properties:
   - username
   - password
   - email
   - role

2. Store all 3 users in an array called `testUsers`

3. Loop through the array and print each user's details

4. Count how many users have role "admin" vs "user"

**Example Output:**
```
Test Users Database
━━━━━━━━━━━━━━━━━━━━━━━━━

User 1:
  Username: admin@test.com
  Password: ********
  Email: admin@test.com
  Role: admin

User 2:
  Username: user1@test.com
  Password: ********
  Email: user1@test.com
  Role: user

User 3:
  Username: user2@test.com
  Password: ********
  Email: user2@test.com
  Role: user

Summary:
  Total users: 3
  Admins: 1
  Regular users: 2
```

*/

let testUsers = [
{
  username: "User1",
  password: "ASDasd123!@#",
  email: "user1@test.com",
  role: "Normal User",
},

{
  username: "User2",
  password: "ASDasd123!@#",
  email: "user2@test.com",
  role: "Admin",
},

{
  username: "User3",
  password: "ASDasd123!@#",
  email: "user3@test.com",
  role: "Super admin",
},

];

//console.log(testUsers);

console.log("==========Printing Array Of Objects===========\n");

for(let i=0; i<testUsers.length; i++){
  
  console.log(testUsers[i]);
}

console.log("==========Counting Admins and users=============\n");

let adminCount = 0;
let userCount = 0;
let totalUsers = 0;

for (let i=0; i<testUsers.length; i++)
  {
   
    console.log(`\nUser ${i + 1}:`);
    console.log(`  Username: ${testUsers[i].username}`);
    console.log(`  Password: ********`);
    console.log(`  Email: ${testUsers[i].email}`);
    console.log(`  Role: ${testUsers[i].role}`);

  if (testUsers[i].role=="Admin"){
    console.log("User Role :" +testUsers[i].role);
    adminCount++;
    console.log("Admin Count :" +adminCount);
  
  }
  else if(testUsers[i].role=="Normal User")
  {
    console.log("User Role :" +testUsers[i].role);
    userCount++;
    console.log("User Count :" +userCount); 
  }
}

console.log("\nSummary:");
console.log(`  Total users: ${testUsers.length}`);
console.log(`  Admins: ${adminCount}`);
console.log(`  Regular users: ${userCount}`);