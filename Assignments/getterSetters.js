class TestConfig {
     #timeout;
     #retries;
     #baseURL;
    
    constructor(){
        this.#timeout = 30000;
        this.#retries = 2;
        this.#baseURL = "";

    }

    get timeout () {
        console.log(`Getting timeout : ${this.#timeout}ms`);
        return this.#timeout;

    }

    set timeout(value) {
        if(value < 1000 ) {
            console.log("❌ Timeout too short! Minimum is 1000ms");
            this.#timeout = 1000;

        }else if(value > 300000) {
            console.log("❌ Timeout too long! Maximum is 300000ms");
            this.#timeout = 300000;
        } else {
            
            this.#timeout = value;
            console.log(`✓ Setting timeout to : ${value}ms`);
        }
    }

    get timeoutInSeconds() {
        return this.#timeout / 1000;
    }

    get retries() {
        return this.#retries;

    }

    get baseURL() {
        console.log(`Getting Base URL : ${this.#baseURL}`);
        return this.#baseURL;
    }

    set baseURL(value) {
        if (value!== "") {
            console.log(`Setting value of BaseURL to : ${value}`);
            this.#baseURL = value;
        }else {
            console.log("❌ Base URL cannot be empty!");
        }
    }
}

console.log("Creating test configuration...\n");
let config = new TestConfig();
console.log("Setting timeout:");
config.timeout = 20000;
console.log(config.timeout);

console.log("\nGetting values:");
console.log(`  Current timeout: ${config.timeout}ms`);
console.log(`  Timeout in seconds: ${config.timeoutInSeconds}s`);
console.log(`  Max retries: ${config.retries }\n`);



console.log("\nSetting base URL:");
config.baseURL = "https://example.com";
console.log(config.baseURL);

