// In addition to Employee's properties and methods, Engineer also has...
// github    github username
// getGithub()
// getRole() // Overridden to return 'Engineer'
const Employee = require('./Employee')


class Engineer extends Employee {
  // create a constructor
  // create all of the functions for that class
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