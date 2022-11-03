// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')




// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: titleInput => {
if (titleInput) {
    return true;
}else {
    console.log('Please enter your project title.');
    return false;
}
}
},
{
    type: 'input',
    message: 'Please provide a description of your project.',
    name: 'description', 
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        }else {
            console.log('Please enter a project description.');
            return false;
        }
}
},
{
type: 'input',
message: 'Please provide installation instructions for your project.',
name: 'instructions',
validate: instructionsInput => {
    if (instructionsInput) {
        return true;
    }else {
        console.log('Please enter installation instructions.');
        return false;
    }
}
},
{
type: 'input',
message: 'Please provide usage information for your project.',
name: 'usage',
validate: usageInput => {
    if (usageInput) {
        return true;
    }else {
        console.log('Please enter usage information.');
        return false;
    }
}
},
{
type: 'input',
message: 'Please provide contribution guidelines for your project.',
name: 'contributions',
validate: contributionsInput => {
    if (contributionsInput) {
        return true;
    }else {
        console.log('Please enter contribution guidelines if any.');
        return false;
    }
}
},
{
type: 'input',
message: 'Please provide testing instructions for your project.',
name: 'test',
validate: testInput => {
    if (testInput) {
        return true;
    }else {
        console.log('Please enter testing instructions if any.');
        return false;
    }
}
},
{
type: 'checkbox',
message: 'Please select a license for your project',
name: 'license',
choices: ['apache','agpl-3.0','gpl-3.0',
'lgpl-3.0','MIT', 'unlicense','mpl-2.0','bsl-1.0', 'No License'],
validate: licenseInput => {
    if (licenseInput) {
        return true;
    }else {
        console.log('Please select a license');
        return false;
    }
}
},
{
type: 'input',
message: 'What is your Github username?',
name: 'username',   
validate: usernameInput => {
    if (usernameInput) {
        return true;
    }else {
        console.log('Please enter a username');
        return false;
    }
}
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',   
    validate: emailInput => {
        if (emailInput) {
            return true;
        }else {
            console.log('Please enter your email address');
            return false;
        }
    }  
},
{
    type: 'input',
    message: 'Please provide instructions on how to contact you',
    name: 'question',   
    validate: questionInput => {
        if (questionInput) {
            return true;
        }else {
            return false;
        }
    }  
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log('Apparent error'+ err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('GeneratedREADME.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
