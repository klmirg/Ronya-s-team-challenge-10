const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")

// const questions = [
//   {
//     type: "input",
//     name: "",
//     message: "What is the team manager's name?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is the team manager's id?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is the team manager's email?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is the team manager's office number?"
//   },
//   {
//     type: "list",
//     name: "",
//     message: "Which type of team member would you like to add?",
//     choices: ["Engineer", "Intern", "I don't want to add any more team members"]
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is your engineer's name?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is your engineer's id?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is your engineer's email?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is your engineer's GitHub username?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is your intern's name?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is your intern's id?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is your intern's email?"
//   },
//   {
//     type: "input",
//     name: "",
//     message: "What is your intern's GitHub username?"
//   },
// ];