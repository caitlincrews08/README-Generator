const inquirer = require('inquirer');

const promptUser = () =>
inquirer.prompt([
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
      name: 'usage',
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
]).then(answers => {
  console.log(answers)
});

promptUser();