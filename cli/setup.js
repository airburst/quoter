/* eslint-disable no-console */
const fs = require("fs");
const prompts = require("prompts");
const { exec } = require("child_process");

const questions = [
  {
    type: "text",
    name: "name",
    message: "What is your app named?",
    initial: "my-nextjs-app",
  },
  {
    type: "select",
    name: "type",
    message: "Will the app be dynamic (with a server) or static?",
    choices: [
      { title: "Static", value: "static" },
      { title: "Dynamic", value: "dynamic" },
    ],
    initial: 1,
  },
  {
    type: "select",
    name: "region",
    message: "AWS hosting region",
    choices: [
      { title: "US (East)", value: "us-east-1" },
      { title: "UK", value: "eu-west-1" },
    ],
    initial: 0,
  },
  {
    type: "text",
    name: "team",
    message: "What is your (BNW) team name?",
    initial: "pest",
  },
  {
    type: "text",
    name: "slackChannel",
    message: "Slack channel for release notifications",
    initial: "nextjs-releases",
  },
  {
    type: "select",
    name: "git",
    message: "Do you want to initialise a Git repo?",
    choices: [
      { title: "Yes", value: "yes" },
      { title: "No", value: "no" },
    ],
    initial: 1,
  },
];

(async () => {
  try {
    process.on("SIGINT", () => {
      console.log("Setup ended by user");
      process.exit(1);
    });

    const SETUP_FILE_PATH = "./setup.txt";
    const setupCompletedFileExists = fs.existsSync(SETUP_FILE_PATH);

    if (setupCompletedFileExists) {
      console.info("Setup has already been successfully completed, exiting");
      process.exit(1);
    }

    const responses = await prompts(questions);

    fs.writeFile(
      SETUP_FILE_PATH,
      JSON.stringify(responses),
      { flag: "wx" },
      err => {
        if (err) {
          console.error(err);
        }
        console.info("Setup completed successfully");
      },
    );

    // Run script actions on asnwers
    exec("./configure.sh", () => {
      // handle err, stdout, stderr
    });
  } catch (err) {
    console.error(err);
  }
})();
