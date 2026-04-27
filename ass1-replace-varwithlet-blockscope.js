console.log("\n---- STEP 2: BLOCK SCOPE (let) ----");

if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}

/*

---- STEP 2: BLOCK SCOPE (let) ----
Inside block: admin@test.com

*/