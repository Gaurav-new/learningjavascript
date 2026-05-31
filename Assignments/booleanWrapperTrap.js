function checkFeatureEnabled(flag) {
    if (flag) {
        console.log("Feature is ENABLED");
    } else {
        console.log("Feature is DISABLED");
    }
}

let featureA = true;
let featureB = false;
let featureC = new Boolean(false);   // looks like false...

checkFeatureEnabled(featureA);   // expected: ENABLED
checkFeatureEnabled(featureB);   // expected: DISABLED
checkFeatureEnabled(featureC.valueOf());   // convert wrapper object to primitive boolean
console.log("typeof featureC:", typeof featureC); // The Boolean wrapper object is truthy, even if it represents false
console.log("Boolean(featureC):", Boolean(featureC));