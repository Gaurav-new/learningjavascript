class BaseTest {
  
  constructor(name) {
    this.name = name;
    this.status = "PENDING";
    this.duration = 0;
  }

  start() {
    console.log(` Starting test: ${this.name}`);
    this.status = "Running";
  }

  finish(passed) {

    this.status = "FAILED";
    if(passed) {
      this.status = "Passed";
      console.log(`    Test ${this.name} passed.`);
    }
    else {
      this.status = "Failed";
      console.log(`    Test ${this.name} failed.`);
    }
  }

}

class UITest extends BaseTest {
  constructor(name, URL, selector) {
    super(name);
    this.name = name;
    this.URL = URL;
    this.selector = selector;
  }


  start() {
    //super.start();
    console.log("Running UI Test... ");
    console.log(`Starting UI test: ${this.name}`);
  }

  navigate() {
    console.log(`Navigating to ${this.URL}`);
    console.log(`Clicking selctor: ${this.selector}`);
  }
}



class APITest extends BaseTest {
  constructor(name, endpoint, method) {
    super(name);
    this.endpoint = endpoint;
    this.method = method;
  }

  start() {
    //super.start();

    console.log("Running API Test... ");
    console.log(`Starting: ${this.method} Users API Test `);
  }

   sendRequest(){
      console.log(` Sending : ${this.method} request to ${this.endpoint} `);
  }

  
}

let uiTest = new UITest("Login Test", "https://weather.com", "id=login-button"  );
uiTest.start();
uiTest.navigate();
console.log("✓ Login UI Test PASSED\n");



let apiTest = new APITest("API Test", "/api/users", "Get"  );
apiTest.start();
apiTest.sendRequest();
console.log("✓ Get Users API Test PASSED\n");
