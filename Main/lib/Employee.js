// This creates a class of Employee.
class Employee {
  // This is the constructor with the properties and methods for the Employee object.
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