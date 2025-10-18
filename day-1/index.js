// index.js
import chalk from "chalk";
import fs from "fs";

const username = process.env.USERNAME || "DevOps Enthusiast";

const message = `Hello ${username}! Welcome to GitHub Actions`;

console.log(chalk.green(message));

// Write a log file for demo purposes
fs.writeFileSync("output.log", message);

console.log(chalk.blue("Log file created: output.log"));
