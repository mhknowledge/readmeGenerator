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
        type: 'list',
        message: 'Please choose your license',
        name: 'license',
        choices: ['GNU', 'Apache'],
        validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
      },
      {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
      },
       
    ])
    .then((data) => {
        let licenseLink = ""
  if (data.license==="Apache") {
   licenseLink =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (data.license==="GNU"){
    licenseLink = "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
        const fileName = `READEME.md`;
        const readME =   
      `#${data.title}
       ##${data.description}
      ##${data.tableOfContents}
       ##${data.installation}
       ##${data.usage}
       ##${data.contributors}
       ##${licenseLink}`

       fs.writeFile(filename, readMe, (err) => 
       err ? console.log(err): console.log(`Success!!!`)
       );
    });


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
