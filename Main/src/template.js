// This function generates the Team and makes cards for each individual team member.
const generateTeam = team => {

// This function creates the Manager card
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
// This function creates the Engineer cards.
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

// This function creates the Intern cards.
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

// This is the empty array that each member of the team gets pushed to to create the html.
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

// This exports the main outline of the html to create the html.
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