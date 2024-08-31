#! /usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        message: "Enter your sentence to count the word:",
        type: "input",
        name: "Sentence",
    },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
