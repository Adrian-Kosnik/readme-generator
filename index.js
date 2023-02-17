const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the title of your project?", "Description?", "Table of Contents?", "Installation?", "Usage?", "License?", "Contributing?", "Tests?", "Questions?"
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!'))
};

// function to initialize program
function init() {

}

// function call to initialize program
init();
