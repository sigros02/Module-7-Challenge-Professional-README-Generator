// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  switch (license) {
    case "MIT":
      return "https://camo.githubusercontent.com/6cd0120cc4c5ac11d28b2c60f76033b52db98dac641de3b2644bb054b449d60c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667";
      break;
    case "Apache 2.0":
      return "https://camo.githubusercontent.com/2ca6828e15ef9a73a72918eca653487ca0197807a5a2675f8e953afd48051fc2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4170616368655f322e302d79656c6c6f77677265656e2e737667";
      break;
    case "GPL 3.0":
      return "https://camo.githubusercontent.com/8a398fc9fbf479a323d2d91b9fcb6fb9c6b4d08e96dbb544488ccbed312115fc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d47504c76332d626c75652e737667";
      break;
    case "BSD 3":
      return "https://camo.githubusercontent.com/c9bbb773210910f990af0bd35c9d970870f658e8f4ca90688e0ad0fddbb872a6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4253445f332d2d436c617573652d6f72616e67652e737667";
      break;
    default:
      return "https://img.shields.io/badge/No%20License%20Used-8A2BE2";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}<div align="right">![ Alt Text](${renderLicenseBadge(
    data.license
  )})

`;
}

export default generateMarkdown;
