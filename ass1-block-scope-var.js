console.log("\n---- STEP 2: BLOCK SCOPE (var) ----");

if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);

/*
Output

---- STEP 2: BLOCK SCOPE (var) ----
Inside block: admin@test.com
Outside block: admin@test.com

*/