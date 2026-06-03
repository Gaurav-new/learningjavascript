/*
Exercise 2: Merge Test Suites (Union & Intersection)

You have two test groups. Some tests appear in both, and you need two things: 
a full combined run list without duplicates, 
and a list of tests that are shared between the two suites.

```javascript
let smokeTests      = new Set(["login", "logout", "homepage", "search"]);
let regressionTests = new Set(["login", "search", "checkout", "payment", "profile"]);
```

1. Create `fullSuite` — a new Set that is the union of both (all unique tests). Print it and its size.

2. Create `sharedTests` — a Set containing only tests that appear in both sets (intersection). Print it and the count.

3. To practise `clear()`, make a temporary copy of `smokeTests`, print it, call `clear()`, then print the emptied copy.

Expected output:
```
Full suite (union): Set(7) { 'login', 'logout', 'homepage', 'search', 'checkout', 'payment', 'profile' }
Total unique tests: 7

Shared tests (intersection): Set(2) { 'login', 'search' }
Tests in both suites: 2

Before clear: Set(4) { 'login', 'logout', 'homepage', 'search' }
After clear:  Set(0) {}
```
*/


let smokeTests      = new Set(["login", "logout", "homepage", "search"]);
let regressionTests = new Set(["login", "search", "checkout", "payment", "profile"]);

let fullSuite = new Set([...smokeTests,...regressionTests]);
console.log("Full suite (union):",fullSuite);

console.log("Total unique tests: "+ fullSuite.size);

let sharedTests = new Set([...smokeTests].filter(test => regressionTests.has(test)));
console.log("Shared tests (intersection):", sharedTests);
console.log("Tests in both suites: " + sharedTests.size);

            
let tempSmokeTests = new Set(smokeTests);
console.log("Before clear:", tempSmokeTests);
tempSmokeTests.clear();
console.log("After clear: ", tempSmokeTests);


