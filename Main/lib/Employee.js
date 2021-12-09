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




module.exports = Employee;
