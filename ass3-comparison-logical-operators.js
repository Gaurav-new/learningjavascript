/* 
Exercise 1: Age Range Validation

**Scenario:** Validate that a user's age is within the acceptable range for test automation training (18-65).

**Requirements:**
1. Create a variable `age` with value `25`
2. Write an if-else statement that:
   - Checks if age is >= 18 AND <= 65
   - If yes, print: `"✅ Valid age range (18-65)"`
   - If no, print: `"❌ Age must be between 18 and 65"`

**Test Cases:**
Try running your code with these values:
- `18` → Valid (boundary)
- `17` → Invalid (too young)
- `65` → Valid (boundary)
- `66` → Invalid (too old)
- `25` → Valid (in range)

**Example Output:**
```
Age: 25
✅ Valid age range (18-65)
```
*/

let age = 25;

console.log ("Age Is :" + age);

if ( age >=18 && age<=65)
{
    console.log("✅ Valid Date range (18 - 65)");
}
else {
    console.log("❌ Age must be between 18 and 65");
}