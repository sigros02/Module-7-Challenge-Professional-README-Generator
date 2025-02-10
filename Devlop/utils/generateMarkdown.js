// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Below function is not used in the code.  Links handled in the renderLicenseBadge function.
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Below function is not used in the code.  License information is included in the generateMarkdown function.
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}<div align="right">${renderLicenseBadge(
    data.license
  )}</div>
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## License
  This project is licensed under the ${
    data.license
  } license. Click the badge at the top of the README for more information.
  
  ## Questions
  If you have any questions, please reach out to me on GitHub or via E-mail.  
  E-mail: [${data.email}](mailto:${data.email})  
  Github: [${data.githubUsername}](${data.githubURL})
`;
}

export default generateMarkdown;
