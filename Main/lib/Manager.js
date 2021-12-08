// In addition to the employee's properties and methods, Manager will also have...
// officeNumber
// getRole()    Overridden to return 'Manager'

class Manager extends Employee {
  // create a constructor
  // create all of the functions for that class
  constructor() {

    super();

    this.officeNumber = officeNumber;
  }
}


// After that you can create an manager in the Manager.test.js 
// file and then test each of the functions and values to make sure 
// they are what you expect

module.exports = Manager;