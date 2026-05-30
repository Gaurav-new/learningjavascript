let testResult = "Test Passed";
let testDuration = -1;

let validationMessage = checkTestData(testResult, testDuration);
console.log(validationMessage);


function checkTestData(result, duration) {
    if (result !== null) {
        if (duration >= 0) {
            if (duration <= 10) {
                return "Valid: " + result + " in " + duration + "s";
            } else {
                return "Error: Duration too long";
            }
        } else {
            return "Error: Negative duration";
        }
    } else {
        return "Error: No result";
    }
}