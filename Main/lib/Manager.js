// In addition to the employee's properties and methods, Manager will also have...
// officeNumber
// getRole()    Overridden to return 'Manager'
const Employee = require("./Employee")

class Manager extends Employee {
  // create a constructor
  // create all of the functions for that class
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole(){
    return "Manager"
  }

  getOfficeNumber(){
    return this.officeNumber
  }
}


// After that you can create an manager in the Manager.test.js 
// file and then test each of the functions and values to make sure 
// they are what you expect

module.exports = Manager;