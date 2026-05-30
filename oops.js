class Test {
  name;
  priority;
  status;
  errors;
  // Constructor is a special function
  constructor(name, priority = "MEDIUM") {
    this.name = name;
    this.priority = priority;
    this.status = "PENDING";
    this.errors = [];
  }

  // Instance methods
  start() {
    console.log(`  Starting: ${this.name} (${this.priority} priority)`);
    this.status = "RUNNING";
  }

  fail(error) {
    this.errors.push(error);
    this.status = "FAILED";
    console.log(`  ✗ ${this.name} FAILED: ${error}`);
  }

  #pass() {
    this.status = "PASSED";
    console.log(`  ✓ ${this.name} PASSED`);
  }

  getReport() {
    return {
      name: this.name,
      priority: this.priority,
      status: this.status,
      errorCount: this.errors.length,
    };
  }
}

let uiTest = new Test("UI Test", "HIGH");
let apiTest = new Test("API Test");
let securityTest = new Test("Security Test");
let performanceTest = new Test();

console.log(uiTest.status);
uiTest.start();
console.log(uiTest.status);

apiTest.start();
securityTest.start();