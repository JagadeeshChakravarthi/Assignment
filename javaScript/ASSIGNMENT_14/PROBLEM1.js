let employees = [
  {
    "id": 1,
    "name": "Abhinav",
    "department": "IT",
    "Salary": 75000
  },
  {
    "id": 2,
    "name": "Gaurav",
    "department": "Sales",
    "Salary": 52000
  },
  {
    "id": 3,
    "name": "Raj",
    "department": "IT",
    "Salary": 64000
  }
];

// Filter employees according to department = IT
let filteredByDepartment = employees.filter(employee => employee.department === 'IT');

// Filter employees who earn a salary < 65000
let filteredBySalary = employees.filter(employee => employee.Salary < 65000);

// Display the filtered employees
console.log("Filter By IT :",filteredByDepartment);
console.log("Filter By <65000 ",filteredBySalary);
