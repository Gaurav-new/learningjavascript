console.log("\n---- STEP 4: FIX USING let / const ----");

// Hoisting safe usage
let safeStatus = "PASSED";
console.log("Safe Status: " + safeStatus);

// Block scope safe
if (true) {
    let safeUser = "admin@test.com";
    console.log("Inside block: " + safeUser);
}

// Loop safe
for (let step = 0; step < 3; step++) {
    console.log("Running safe test step " + step);
}

/*

---- STEP 4: FIX USING let / const ----
Safe Status: PASSED
Inside block: admin@test.com
Running safe test step 0
Running safe test step 1
Running safe test step 2

*/