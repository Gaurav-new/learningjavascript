let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

let testCase = "Skipped";

if (testCase === "Passed")
{
    console.log(" Test Case Passed ");
}
else if (testCase === "Skipped")
{
 console.log("Test Case Skipped");
}
else if (testCase ==="Failed")
{
    console.log("Test Case Failed");
}


let password = "Test@";

console.log("Password: " + password);
console.log("Length: " + password.length + " characters\n");

if (password.length < 6)
{
    console.log("Password Strength is weak");
}
else if(password.length < 10)
{
    console.log("Password strength Medium");
}
else if (password.length < 5)
{
    console.log(" Passowrd matched");
}
else {
    console.log(" Strong Password ");
}



let password1 = "Test@1";

console.log("Password: " + password1);
console.log("Length: " + password1.length + " characters\n");

if (password1.length < 6)
{
    console.log("Password Strength is weak");
}
else if(password1.length < 8)
{
    console.log("Password strength Medium");
}
else if (password1.length < 5)
{
    console.log(" Passowrd matched");
}
else {
    console.log(" Strong Password ");
}

let password2 = "Test@1234";

console.log("Password: " + password2);
console.log("Length: " + password2.length + " characters\n");

if (password2.length < 6)
{
    console.log("Password Strength is weak");
}
else if(password2.length < 8)
{
    console.log("Password strength Medium");
}
else if (password2.length < 10)
{
    console.log("Strong Password");
}


let email = "test@yopmail.com";

console.log("Email : " +email);

if ( email.includes("@") && email.includes("."))
{
    console.log("Valid password format");
}
else{
    console.log("Invalid password format");
}

let email1 = "notanemail";

console.log("Enter Email ID and checkif its valid format : " +email1);

if(email1.includes("@") && email1.includes("."))
{
    console.log("Valid format");
}
else{
    console.log("Invalid format as it does not include @ and . ")
}


let email2 = "missing@domain";

console.log("Enter Email ID and check if it of correct domain : " +email2);

if(email2.includes("@") && email2.includes("."))
{
    console.log("Valid Domain");
}
else{
    console.log("Invalid Domain as it does not include @ or . ")
}


let score1 = 85;

console.log("Test Score: " + score1);

if(score1 > 90)
{
    console.log("Grade: A (Excellent)");
}
else if(score1 >= 80 && score1 <= 89)
{
   console.log("Grade: B (Good)");
}
else if(score1 >=70 && score1 <= 79)
{
    console.log("Grade: C (Average)");
}
else if(score1 >=60 && score1 <= 69)
{
    console.log("Grade: C (Average)");
}
else if(score1 < 60)
{
    console.log("Grade: F (Fail)");
}


