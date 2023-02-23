const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const licenceBadges = require("./utils/badges");

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!'))
};

// function to initialize program
function init() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the link to your GitHub?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'checkbox',
        message: 'What licence would you like?',
        name: 'licence',
        choices: licenceBadges,
      },
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a Description for your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the Installation instructions?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the Usage?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How can people contribute?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Tests?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Questions?',
        name: 'questions',
      },
    ])
    .then(response => {writeToFile('NEW-README.md', generateMarkdown(response))});
};

// function call to initialize program
init();
