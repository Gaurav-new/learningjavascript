/*Part 4: `var` — Hoisting and Scope Surprises

Create `var-problems.js` to observe exactly how `var` differs from `let`.

**Step 1 — Hoisting (read a variable before its declaration)**

Copy this code, predict what each `console.log` prints, then run it. First thinking is important
so once you see output you can understand better:

```javascript
console.log("Status before declaration: " + testStatus);
var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
```

Then replace `var` with `let` and run again. What changes?

**What to notice:** `var` is silently moved to the top of the function — JavaScript already 
"knows" about it, but the value is `undefined` until the assignment line. `let` instead crashes with "Cannot access before initialization", which is the safer behaviour.

---

**Step 2 — `var` leaks out of if-blocks**

Copy and run:

```javascript
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Does this crash or print?
```

Now replace `var` with `let` and run again. What happens to the last line?

**What to notice:** `var` ignores `{ }` boundaries — it leaks out. `let` stays inside the block.

---

**Step 3 — `var` in a for-loop leaks the counter**

Copy and run:

```javascript
for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here?
```

Then replace `var i` with `let i` and run again. What happens to the last line?

**What to notice:** With `var`, the loop counter `i` is still accessible — and holds its final value — after the loop ends. With `let`, that line crashes.

---

**Step 4 — The fix: always use `let` or `const`**

Rewrite all three examples above using `let` (and `const` where the value never changes). Confirm each now behaves safely.

```
Key rule: In modern JavaScript always use let or const — never var.
You will still SEE var in older code, so it is important to understand
why it behaves differently, not just that it is old.
```

---

## ✅ Self-Check

Before submitting, verify:
- [ ] All four files run without errors
- [ ] Used `const` for values that don't change
- [ ] Used `let` for values that change
- [ ] Variable names are descriptive (not x, y, z)
- [ ] Output is formatted nicely
- [ ] No typos in variable names
- [ ] Can explain hoisting in one sentence
- [ ] Can explain why `var` leaks out of `if` and `for` blocks
*/

console.log("---- STEP 1: HOISTING (var) ----");

console.log("Status before declaration: " + testStatus);
var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);

/* Output

---- STEP 1: HOISTING (var) ----
Status before declaration: undefined
Status after declaration: PASSED
*/
