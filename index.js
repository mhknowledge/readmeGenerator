// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt (
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project:',
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Please provide a Table of Contents',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List of Contributors to the Project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide Usage details:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List your tests:',
        }
    ])
    .then((data) => {
        const fileName = `READEME.md`;
        const readME =   
      `${data.title}
       ${data.description}
       ${data.tableOfContents}
       ${data.installation}
       ${data.usage}
       ${data.contributors}
       ${data.tests}`

       fs.writeFile(filename, readMe, (err) => 
       err ? console.log(err): console.log(`Success!!!`)
       );
    });


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
