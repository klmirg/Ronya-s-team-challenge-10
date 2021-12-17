// This makes it so you can access the "Employee" class with it's methods and properties.
const Employee = require('./Employee')
// This creates a class of Engineer and extends the methods and properties from the "Employee".
class Intern extends Employee {
  // This creates a constructor with the parameters of 'name', 'id', 'email', and 'school'.
  constructor(name, id, email, school) {
    
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}


module.exports = Intern;