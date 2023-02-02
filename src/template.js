const generateTeam = (team) => {
    const html = [];
    const createManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card">
            <div class="card-header">
                ${manager.name} <br/>
                <i class="fas fa-mug-hot"></i>Manager
            </div>
            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
        html.push(managerHtml);
    }

    const createEngineer = engineer => {
        let engineerHtml = `
        <div class="card">
            <div class="card-header">
                ${engineer.name} <br/>
                <i class="fas fa-glasses"></i>Engineer
            </div>
            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `;
        html.push(engineerHtml);
    }

    const createIntern = intern => {
        let internHtml = `
        <div class="card">
            <div class="card-header">
                ${intern.name} <br/>
                <i class="fas fa-user-graduate"></i>Intern
            </div>
            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li class="list-group-item">School name: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;
        html.push(internHtml);
    }

    for (let i=0; i<team.length; i++) {
        if(team[i].getRole() === "Manager") {
            createManager(team[i]);
        } else if(team[i].getRole() === "Engineer") {
            createEngineer(team[i]);
        } else if(team[i].getRole() === "Intern") {
            createIntern(team[i]);
        }
    }

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="../src/style.css"/>
        <title>Team Board</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>

        <main>
        ${generateTeam(team)}
        </main>
    </body>
    </html>
    `
}