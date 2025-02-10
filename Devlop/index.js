// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please provide your GitHub username.",
  },
  {
    type: "input",
    name: "githubURL",
    message: "Please provide your GitHub URL.",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Overwrite exsisting README file to create a clean README file
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
  // 'a' = append mode <-- stream technique found at Chat GTP
  // Does not block the event loop (better for performance).
  // Efficient for multiple writes.
  // Avoids reopening the file on every write.
  // const stream = fs.createWriteStream(fileName, { flags: "a" });
  // stream.write(`${data.title}\n\n`);
  // stream.write(`${data.description}\n\n`);
  // stream.write(`${data.installation}\n\n`);
  // stream.write(`${data.usage}\n\n`);
  // stream.write(`${data.contribution}\n\n`);
  // stream.write(`${data.tests}\n\n`);
  // stream.write(`${data.license}\n\n`);
  // stream.write(`${data.github}\n\n`);
  // stream.write(`${data.email}\n\n`);
  // stream.end();
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile(`README.md`, response);
    //   ${response.title}
    //   ${response.description}
    //   ${response.installation}
    //   ${response.usage}
    //   ${response.contribution}
    //   ${response.tests}
    //   ${response.license}
    //   ${response.github}
    //   ${response.email}
    // `);
  });
}

// Function call to initialize app
init();
