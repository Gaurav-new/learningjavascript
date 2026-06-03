/* 
Exercise 1: Track Unique Test Environments

A CI pipeline receives a list of environments to test against, but the list has duplicates because multiple config files got merged together. You need to deduplicate it and check membership efficiently.

1. Create a Set called `environments` and add these values one at a time:  
   `"staging"`, `"production"`, `"staging"`, `"uat"`, `"production"`, `"dev"`

2. Print the size of the Set — it should be 4, not 6.

3. Use `has()` to check whether `"staging"` and `"qa"` are in the Set and print the results.

4. Delete `"dev"` with `delete()`. Capture the return value and print it. Then try to delete `"qa"` (which was never added) and print that return value too.

5. Print the final Set and its size.

Expected output:
```
Size (with duplicates ignored): 4
Has 'staging': true
Has 'qa': false
delete('dev') returned: true
delete('qa') returned: false
Final environments: Set(3) { 'staging', 'production', 'uat' }
Final size: 3
*/


let environment = new Set();
environment.add("Staging");
environment.add("Production");
environment.add("Staging");
environment.add("UAT");
environment.add("Production");
environment.add("Dev");
console.log(environment);
console.log("Size (with duplicates ignored): " + environment.size);
console.log("Has 'Staging': " + environment.has("Staging"));
console.log("Has 'QA': " + environment.has("QA"));
console.log("Delete ('Dev'): "+ environment.delete("Dev"));
console.log("Delete ('qa'): "+ environment.delete("qa"));
console.log("Final Environements: " + [...environment.values()]);
console.log("Final Environement size: " + environment.size);

environment.forEach((value) =>{
    console.log(value);
})


