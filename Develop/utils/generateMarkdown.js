// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== 'No License') {
  return `![badge](https://img.shields.io/badge/License-${license}-red)`;
} else {
  return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License') {
    return `![${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !=='No License'){
    return `*[License](#License)`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${renderLicenseBadge(data.license)}\n
  
  ${data.description}

  ## Table of Contents
  *[Description](#Description)
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[Contribution](#Contribution)
  *[Testing](#Testing)
  *[Questions](#Questions)
  ${renderLicenseSection(data.license)}


  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## License
The License Applicable to this application:
 - ${renderLicenseLink(data.license)}

  ## Contribution
  ${data.contributions}

  ## Testing
  ${data.test}

  ## Questions
  Github: [${data.username}](https://github.com/${data.username})
  Email: ${data.email}

`;}


module.exports = generateMarkdown;
