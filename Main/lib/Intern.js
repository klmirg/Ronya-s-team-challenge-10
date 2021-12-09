// In addition to Employee's properties and methods, Intern also has...
// school
// getSchool()
// getRole() // Overridden to return 'Intern'
const Employee = require('./Employee')

class Intern extends Employee {
  // create a constructor
  // create all of the functions for that class
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


// After that you can create an intern in the Intern.test.js 
// file and then test each of the functions and values to make sure 
// they are what you expect

module.exports = Intern;