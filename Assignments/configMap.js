/*
## Exercise 4: Build a Config Map Three Ways

A test framework needs a config Map. You'll build one using each of the three bulk-population methods.

**Method 1 — constructor with pairs.** Create `httpCodes` using `new Map([[key, value], ...])` with:
- `200` → `"OK"`, `201` → `"Created"`, `404` → `"Not Found"`, `500` → `"Internal Server Error"`

Then look up and print the description for code `404`.

**Method 2 — method chaining.** Create `runConfig` by chaining `.set()` calls directly on a `new Map()`:
- `"browser"` → `"Chrome"`, `"timeout"` → `30000`, `"headless"` → `true`, `"retries"` → `3`

Print the total number of settings.

**Method 3 — Object.entries().** Convert this plain object to a Map:
```javascript
let stagingConfig = { baseUrl: "https://staging.example.com", timeout: 60000, headless: false };
```

Print the resulting Map.

Expected output:
```
404 means: Not Found

Run config settings: 4

Staging config Map: Map(3) { 'baseUrl' => 'https://staging.example.com', 'timeout' => 60000, 'headless' => false }
```

---
*/

let httpCodes = new Map([
    [200, "OK"],
    [201, "Created"],
    [404, "Not Found"],
    [500, "Internal Server Error"]
]);
console.log("404 description :" + httpCodes.get(404));

let runConfig = new Map().set("browser", "Chrome").set("timeout", 30000).set("timeout", 30000).set("headless", "True")
.set("retries", 3);
console.log("Total number of Settings:" + runConfig.size);

let stagingConfig = { baseURL : "https://staging.example.com", timeout : 60000, headless : false};

let stagingConfigMap = new Map(Object.entries(stagingConfig)); // Converts stagingConfig Object to Map

console.log("staging Config Map :", stagingConfigMap);