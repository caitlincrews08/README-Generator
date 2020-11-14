// this file generates the readme markdown
function generateMarkdown(answers) {
  return `
  ${answers.badge}

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
  To install necessarry dependencies, run the following command:\n
  \`
  ${answers.install}
  \`

  
  ## Usage
  ${answers.usage}

  
  ## License
  This project is licensed under the terms of the ${answers.license} license.

  
  ## Contributing
  ${answers.contribute}

  
  ## Tests
  To run tests, run the following command:\n
  \`
  ${answers.tests}
  \`

  
  ## Questions
  Have any questions for me? Contact me here:

  Github: [@${answers.username}](https://github.com/${answers.username})\n
  Email: ${answers.email}

  `
};

exports.generateMarkdown = generateMarkdown;