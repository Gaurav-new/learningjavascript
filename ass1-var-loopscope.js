console.log("\n---- STEP 3: LOOP SCOPE (var) ----");

for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);

/*

---- STEP 3: LOOP SCOPE (var) ----
Running test step 0
Running test step 1
Running test step 2
After loop, i = 3
*/