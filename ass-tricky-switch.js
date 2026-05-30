let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}

// What does this show? Why? (Hint: `switch` uses `===`) // Switch internally uses strict equality (===)