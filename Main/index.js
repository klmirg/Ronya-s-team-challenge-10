// These are all the files we need to access for this page.
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
// The empty teamMembers array we use to push all our teamMembers to.
const teamMembers = [];
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

const render = require("./src/template.js")

// This is the function that creates the manager.
function addManager(){
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?"
  }
]).then(answers =>{
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
teamMembers.push(manager)
mainMenu()
})
}

// This is the function that asks the question of what type of employee you'd like to add. 
// After each questionairre's, we go back to this function until you don't want to add anymore members.
  function mainMenu(){
    inquirer.prompt([
  {
    type: "list",
    name: "memberChoice",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"]
  }
    ]).then(userChoice =>{
      if (userChoice.memberChoice === "Engineer" ) {
        addEngineer();
      } else if (userChoice.memberChoice === "Intern") {
        addIntern();
      } else {
        console.log(teamMembers)
        buildTeam();
      }
    })
}

// This is the function that creates the engineer based off of the answers the user gives.
  function addEngineer(){
    inquirer.prompt([
  {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?"
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is your engineer's id?"
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's GitHub username?"
  },
    ]).then(answers =>{
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
    teamMembers.push(engineer)
    mainMenu()
    })
  }
  
  // This is the function that creates the Intern based off of the user's input.
  function addIntern(){
    inquirer.prompt([
  {
    type: "input",
    name: "internName",
    message: "What is your intern's name?"
  },
  {
    type: "input",
    name: "internId",
    message: "What is your intern's id?"
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is your intern's email?"
  },
  {
    type: "input",
    name: "school",
    message: "What is your intern's school?"
  },
  ]).then(answers =>{
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school)
  teamMembers.push(intern)
  mainMenu()
  })
}

// This function builds the team and gets all the teamMembers that we pushed to our empty "teamMember" array.
// And then this function checks for an existing "output" directory, and if there isn't one, to create one.
function buildTeam(){
    if(!fs.existsSync(OUTPUT_DIR)){
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8" )
}

// Calling the function "addManager".
addManager()