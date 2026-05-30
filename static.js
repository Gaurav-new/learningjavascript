class Test {
    static totalTests = 0;
    static passedTests = 0; 
    static failedTests = 0;

   
    constructor(name) {
        this.name = name;
        this.status = "PENDING";
    }

    run (shouldPass) {
        Test.totalTests++;
        if(shouldPass) {
            Test.passedTests++;
            this.status = "Passed";
        } else {
            Test.failedTests++;
            this.status = "Failed";
        }
        }
    static getStats() {
         return `Total Tests : ${this.totalTests}, Passed: ${this.passedTests}, Failed: ${this.failedTests}`;
    }

    static reset() {
        this.totalTests = 0;
        this.passedTests = 0;
        this.failedTests = 0;
    }   

    static createsmokeTest(name) {
        return new Test( `Smoke Test: ${name}`);

    }


}

console.log(" Running Tests... \n");
let test1 = new Test("Login Test");
test1.run(true);
console.log("✓ Login Test PASSED\n");

let test2 = new Test("Search Test");
test2.run(true);
console.log("✓ Search Test PASSED\n");

let test3 = new Test("Checkout Test");
test3.run(false);
console.log("✗ Checkout Test FAILED\n");

let test4 = new Test("Dashboard Test");
test4.run(true);
console.log("✓ Dashboard Test PASSED\n");

console.log(" Statistics after 4 tests : " + Test.getStats() + "\n + Success Rate : " + (Test.passedTests / Test.totalTests * 100) + " %\n");

console.log("\nCreating smoke test with factory method:");
let smokeTest = Test.createsmokeTest("Quick Login");
smokeTest.run(true);

console.log("\nFinal Statistics:");
//stats = Test.getStats();
//console.log(`  Total: ${stats.total}`);
//console.log(`  Passed: ${stats.passed}`);
//console.log(`  Failed: ${stats.failed}`);
//console.log(`  Success Rate: ${stats.successRate}%`);
console.log(" Final Statistics : " + Test.getStats() + "\n + Success Rate : " + (Test.passedTests / Test.totalTests * 100) + " %\n");

console.log("\nResetting counters...");
Test.reset();

//console.log("Statistics after reset:");
//stats = Test.getStats();
//console.log(`  Total: ${stats.total}`);
//console.log(`  Passed: ${stats.passed}`);
//console.log(`  Failed: ${stats.failed}`);
//console.log(`  Success Rate: ${stats.successRate}%`);

console.log(" Statistics after reset: " + Test.getStats() + "\n + Success Rate : " + (Test.passedTests / Test.totalTests * 100) + " %\n");

