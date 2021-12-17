// This makes it so you can access the "Employee" class with it's methods and properties.
const Employee = require("./Employee")
// This creates a class of Manager and extends the methods and properties from the "Employee".
class Manager extends Employee {
  // This creates a constructor with the parameters of 'name', 'id', 'email', and 'officeNumber'.
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole(){
    return "Manager"
  }

  getOfficeNumber(){
    return this.officeNumber;
  }

}

module.exports = Manager;