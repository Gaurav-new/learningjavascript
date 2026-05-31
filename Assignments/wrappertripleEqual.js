function assertStatusMatch(expected, actual) {
    if (String(expected) === String(actual)) {
        console.log("✅ Status matches: " + actual);
    } else {
        console.log("❌ Status mismatch! Expected: " + expected + ", Got: " + actual);
    }
}

// Case 1: Both are primitives — works fine
let status1 = "PASSED";
let status2 = "PASSED";
assertStatusMatch(status1, status2);

// Case 2: One is a wrapper object — BREAKS!
let status3 = "PASSED";
let status4 = new String("PASSED");
assertStatusMatch(status3, status4);

// Case 3: Two wrapper objects — ALSO BREAKS!
let status5 = new String("PASSED");
let status6 = new String("PASSED");
assertStatusMatch(status5, status6);

console.log(typeof status3, typeof status4);