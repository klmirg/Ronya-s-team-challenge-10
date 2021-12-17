// This makes it so you can access the "Employee" class with it's methods and properties.
const Employee = require('./Employee')
// This creates a class of Engineer and extends the methods and properties from the "Employee".
class Engineer extends Employee {
  // This creates a constructor with the parameters of 'name', 'id', 'email', and 'github'.
  constructor(name, id, email, github) {

    super(name, id, email);

    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}


module.exports = Engineer;