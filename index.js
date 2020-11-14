// packages necessary for generator to function
const inquirer = require('inquirer');
const fs = require('fs');
const build = require('./utils/generateMarkdown.js');

// array of questions that will be displayed to user
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contributing to the repo?'
  }
];

// function that will write read me and throw error or success message
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    createBadge(answers);
    const createRm = build.generateMarkdown(answers);
    // console.log(createRm);

    // this creates the readme file!
    fs.writeFileSync("README.md", createRm, "utf8")
  });
};
init();

// function that generates a badge for the license
function createBadge(answers) {
  // this takes away any spaces in the license name and replaces them with an underscore for the purposes of creating the link below
  let badgeType = answers.license.split(" ").join("_");
  answers.badge = `![License](https://img.shields.io/badge/License-${badgeType}-blue.svg)`;
}