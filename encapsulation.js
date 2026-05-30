class TestSuite {
  // Public fields
  name = "Unnamed Suite";
  tests = [];

  // Private fields (# prefix)
  #apiKey = "secret-key-12345";
  #executionLog = [];

  constructor(name) {
    this.name = name;
  }

  addTest(testName) {
    this.tests.push(testName);
    this.#log(`Added test: ${testName}`);
  }

  // Private method
  #log(message) {
    let timestamp = new Date().toISOString();
    this.#executionLog.push(`[${timestamp}] ${message}`);
  }

  // Public method to access private data
  getLog() {
    return this.#executionLog;
  }


  run() {
    console.log(`  Running suite: ${this.name}`);
    console.log(`  Tests: ${this.tests.join(", ")}`);
    this.#log(`Suite executed with ${this.tests.length} tests`);
  }
}

let suite = new TestSuite("Smoke Tests");
suite.addTest("Login Test");
console.log(suite.getLog());
suite.run();
console.log(suite.getLog());
