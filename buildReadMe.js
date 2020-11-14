// this file generates the readme markdown
function buildREADME(answers) {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessarry dependencies, run the following command:
  ${answers.install}
  
  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contribute}

  ## Tests
  To run tests, run the following command:
  ${answers.tests}

  ## Questions
  Have any questions for me? Contact me here:

  Github: [@${answers.username}](https://github.com/${answers.username})
  Email: ${answers.email}

  `
};