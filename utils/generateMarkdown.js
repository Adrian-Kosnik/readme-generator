// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${data.license} ${data.badges}

## Description
${data.description}

## Table of Contents
- [Description](## Description)
- [Installation](## Installation)
- [Usage](## Usage)
- [License](## License)
- [Contributing](## Contributing)
- [Tests](## Tests)
- [Questions](## Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions} ${data.email} ${data.github}

`;
};

module.exports = generateMarkdown;
