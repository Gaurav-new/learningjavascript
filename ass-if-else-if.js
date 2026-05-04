let userName = "Gaurav";
let password = "ASDasd123!@#";
let email = "gaurav@example.com";

let validateCheck = checkTestData(userName, password, email);
console.log("Enter Your Credentials: " + validateCheck + "\n");

function checkTestData(name, pwd, mail){

    if (name !== null) {
        if(pwd !== null){

        }else if (pwd.length < 8){
            return "Error: Password too short";
        }
        if (mail !== null) {
            if (mail.includes("@") && mail.includes(".")) {
                return name + " " +pwd +" " + mail;
            }
            else {
                return "Error: Invalid email format";
            }
        }
        else {
            return "Error: No email";
        }
    }
    else
        {
        return "Error: No username";
    }
}