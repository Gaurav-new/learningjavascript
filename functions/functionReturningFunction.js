function makeValidator(minLength){
    return function (pass){
        return pass.length >= minLength;   // function returning functions
    }
     
}

const validateBasic = makeValidator(6);
const validateStrict = makeValidator(12);

const pass = "abc@";

//validateBasic(pass);
console.log(validateBasic(pass));
// validateStrict(pass);
console.log(validateStrict(pass));

