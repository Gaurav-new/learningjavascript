/*Exercise 4: Test Score Analysis

**Scenario:** Store and analyze test automation scores.

**Requirements:**
1. Create an array called `testScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90

2. Calculate and print:
   - Total number of scores
   - First score
   - Last score
   - Check if score 95 exists in the array

**Example Output:**
```
Test Score Analysis

Scores: [ 85, 92, 78, 95, 88, 73, 90 ]
Total scores: 7

First score: 85
Last score: 90

Checking for specific scores...
Score 95 found: Yes (at index 3)
Score 100 found: No (index: -1)

*/

let testScores = [85, 92, 78, 95, 88, 73, 90];
console.log("Total number of Scores "+ testScores.length);

console.log("First Score : " + testScores[0]);
console.log("Second Score : " + testScores[1]);
console.log("Last Score : " + testScores[6]);

console.log("Checking for specific scores...");

if (testScores.includes(95)){
    console.log("Score 95 found: Yes (at Index " + testScores.indexOf(95) + ");");
   
}

if (testScores.includes(100)){
    console.log("Score 100 found: Yes (at Index " + testScores.indexOf(100) + ");");
} else {
    console.log("Score 100 found: No (Index: -1)");
}





