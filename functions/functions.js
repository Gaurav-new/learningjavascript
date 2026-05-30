
addDeclaration(1,2);  // We can call a function before declaration as javascript internally 
// does hoisting by placing function declaration above calling statement

function addDeclaration(a,b){
    console.log(a + b);
    return a+b;
}


// we can use functions as a variable
//addExpression(10.20); // using a variable before intializing or declaring is not allowed.
const addExpression = function(a,b){   // this is fucntion which is used as a variable
 console.log(a + b);
    return a+b ;

}

addDeclaration(1,2);
addExpression(10,20);


console.log (addDeclaration(1,2));
console.log (addExpression(10,20));

const validate = function(email){  // functions can be stored as an expressions
    return email.includes("@");
}

console.log(validate("test@yopmail.com"));

// Array values can be funcions as well




