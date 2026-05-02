// Employee object details

let employee = { 
    empName:"Gaurav",
    empId:10,
    empSalary:200000,
    empDesignation:"QA Engineer",
    empName: "ABC" // this name will be taken as it is initialized most recently
};

console.log(employee);
console.log(employee.empName);

delete employee.empName;
console.log(employee.empName);

