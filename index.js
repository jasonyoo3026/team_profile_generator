const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHtml = require('./src/generate-site');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMembers = [];

const createTeam = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
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
            message: 'What is your employee ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('You should provide employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
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
            message: 'Enter your office number',
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
            message: 'Please choose your next step:',
            choices: ['add an engineer', 'add an intern', 'Complete the team!']

        }])
        .then(userChoice => {
            switch(userChoice.menu) {
                case "add an engineer":
                    createEngineer();
                    break;
                case "add an intern":
                    createIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const createEngineer = () => {
    console.log(
        `
        ===============
        Add a new Engineer
        ===============
        `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is name of the engineer?',
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
            message: 'Enter employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address',
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
            message: 'Enter github username',
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
    console.log(
        `
        ===============
        Add a new Intern
        ===============
        `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is name of the intern?',
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
            message: 'Enter employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the name of your school',
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
    console.log(`
    ============================
    Your team has been created!
    ============================
    `);

    // Create the output directory if the output path doesn't exist
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateHtml(teamMembers), "utf-8");
}

createTeam();