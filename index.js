const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/template');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamMembers = [];

const createTeam = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You should enter the name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the team manager's employee id?",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('You should provide employee id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Email address is missing!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Your Office number is not provided');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]

        }])
        .then(userChoice => {
            switch(userChoice.menu) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const createEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?",
            validate: engineerName => {
                if(engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is your engineer's id?",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please provide email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's Github username?",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter github username!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const createIntern= () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?",
            validate: internName => {
                if(internName) {
                    return true;
                } else {
                    console.log('Name of the intern is still not provided!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is your intern's id?",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school?",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please indicate school name');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log('Your team has been created!');

    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateHtml(teamMembers), "utf-8");
}

createTeam();