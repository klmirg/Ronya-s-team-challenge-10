// In addition to Employee's properties and methods, Intern also has...
// school
// getSchool()
// getRole() // Overridden to return 'Intern'
const Employee = require('./Employee')

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