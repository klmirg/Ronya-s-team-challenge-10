

// in here build bootstrap cards **template literals hint hint
// create a function for each individual employee 
// use the methods "getName()" etc to show the specific employees name etc
// then youre going to want to filter *.filter()* over your employees utilizing the getRole()
// map over the specific employee and send them to their respective functions

const generateTeam = team => {
// console.log("passing teamMembers to generateTeam", team)

const teamManager = (Manager) => {
    
  return `
    <div class="card col" style="width: 18rem;">
      <div class="card-header" style="width: 100%">
        <h2>${Manager.getName()}</h2>
        <h3><i class="fa-solid fa-mug-hot"></i>${Manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <p>ID: ${Manager.getId()}</p>
        <p>Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></p>
        <p>Office number: ${Manager.getOfficeNumber()}</p>
      </div>
    </div>
  `

}

const teamEngineer = (Engineer) => {

  return `
  <div class="card col" style="width: 18rem;">
    <div class="card-header" style="width: 100%">
      <h2>${Engineer.getName()}</h2>
      <h3><i class="fa-solid fa-glasses"></i>${Engineer.getRole()}</h3>
    </div>
    <div class="card-body">
      <p>ID: ${Engineer.getId()}</p>
      <p>Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
      <p>Github: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></p>
    </div>
  </div>
  `
}

const teamIntern = (Intern) => {
  return `
  <div class="card col" style="width: 18rem;">
    <div class="card-header" style="width: 100%">
      <h2>${Intern.getName()}</h2>
      <h3><i class="fa-solid fa-user-graduate"></i>${Intern.getRole()}</h3>
    </div>
    <div class="card-body">
      <p>ID: ${Intern.getId()}</p>
      <p>Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></p>
      <p>School: ${Intern.getSchool()}</p>
    </div>
  </div>
  `
}

  const html = [];

  html.push(team
  .filter(employee => employee.getRole() === "Manager")
  .map(manager => teamManager(manager))
  );

  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => teamEngineer(engineer))
    .join("")
    );
    
  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => teamIntern(intern))
    .join("")
    );

    

  return html.join("")
}

module.exports = team => { 
  return `
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>Ronya's Team</title>
  </head>
  <body>
    <header class="jumbotron text-center">
      <h1>My Team</h1>
    </header>
     <div class="container d-flex">
      ${generateTeam(team)}
     </div>
  </body>
  </html> `
}