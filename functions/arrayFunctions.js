let valLength = function (val) {
  return val.length > 5;
};

const valEmail = function (val) {
  return val.includes("@");
};
const valDot = function (val = "test@abc.com") {
  return val.includes(".");
};

const validateEmails = [valLength, valEmail, valDot];
console.log(validateEmails);

console.log(validateEmails[0]("test@testcom"));
console.log(validateEmails[1]("test@testcom"));
console.log(validateEmails[2]("abc@testcom"));