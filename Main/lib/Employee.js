// name     getName()
// id      getId()
// email     getEmail()
// getRole()  returns 'Employee'

class Employee {
  // create a constructor
  // create all of the functions for that class
  constructor(name, id, email) {

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return "Employee"
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}


// After that you can create an employee in the Employee.test.js 
// file and then test each of the functions and values to make sure 
// they are what you expect


// function Employee(name = '') {
//   this.name = name;

//   this.id = id;
//   this.email = email;
// }


module.exports = Employee;
