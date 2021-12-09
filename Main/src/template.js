// in here build bootstrap cards **template literals hint hint
// create a function for each individual employee 
// use the methods "getName()" etc to show the specific employees name etc
// then youre going to want to filter *.filter()* over your employees utilizing the getRole()
// map over the specific employee and send them to their respective functions
const generateTeam = team => {

const teamManager = (name, id, email, officeNumber) => {
    
  return `
  <div class="card" style="width: 18rem;">
    <h1>${manager.name}</h1>
    <h2>${manager.getRole()}</h2>
    <div class="card-body">
      <p>ID: ${manager.id}</p>
      <p>Email: <a href="card-text">${manager.email}</a></p>
      <p>Office number: ${manager.officeNumber}</p>
    </div>
  </div>
  `

}

const teamEngineer = (name, id, email, github) => {

  return `
  <div class="card" style="width: 18rem;">
    <h1>${engineer.name}</h1>
    <h2>${engineer.getRole()}</h2>
    <div class="card-body">
      <p class="card-title">ID: ${engineer.id}</p>
      <p>Email: <a href="#">${engineer.email}</a></p>
      <p>Github: <a href="#">${engineer.github}</a></p>
    </div>
  </div>
  `
}

const teamIntern = (name, id, email, school) => {
  return `
  <div class="card" style="width: 18rem;">
    <h1>${intern.name}</h1>
    <p>${intern.getRole()}</p>
    <div class="card-body">
      <h5 class="card-title">Id: ${intern.id}</h5>
      <p>Email: <a href="#">${intern.email}</a></p>
      <p>School: ${intern.school}</p>
    </div>
  </div>
  `
}

}

// module.exports = 