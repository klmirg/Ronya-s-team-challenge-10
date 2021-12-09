const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const Manager = require("./lib/Manager")

const teamMembers = [];
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

const render = require("./src/template.js")

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
console.log(teamMembers)
mainMenu()
})
}

  // handle creating a new instance of manager with all the responses
  // what team member would you like to add next?

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
        buildTeam();
      }
    })
}


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
    ])
  }

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
  ])
}

function buildTeam(){
    if(!fs.existsSync(OUTPUT_DIR)){
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8" )

}

addManager()