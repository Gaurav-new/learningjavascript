let errors = []; // No errors

console.log("❌ WRONG way:");
if (errors) {
  console.log("Has errors!"); // This runs even though array is empty!
}

console.log("\n✅ CORRECT way:");
if (errors.length > 0) {
  console.log("Has errors!");
} else {
  console.log("No errors ✓");
}

console.log("\nExplanation: Empty array is truthy! Always check .length\n");