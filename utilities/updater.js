/*
================= Ambrosia Updater =================
Written by : Duckey
Lines: 98

Updated: Octobder 21 2023 | 15:22 (GMT+6:30)

ChatGPT: Yes
Confusing: Yes
Disk Demon: Yes
Readable: No
Formated: Maybe?

TODO: Allow it to also accept y, n
================= Ambrosia Updater =================
*/

// const axios = require("axios");
const fetch = require("node-fetch");
const readline = require("readline");
const { exec } = require("child_process");
const fs = require("fs");
import chalk from 'chalk'

const repoOwner = "FNBD-Development";
const repoName = "ambrosia";

const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;

function getLocalCommitSHA(callback) {
  exec("git rev-parse HEAD", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error getting commit SHA: ${error}`);
      callback(null);
    } else {
      const commitSHA = stdout.trim();
      callback(commitSHA);
    }
  });
}

async function checkForUpdates() {
  try {
    getLocalCommitSHA(async (commitSHA) => {
      if (commitSHA) {
        const localCommitSha = commitSHA;


    const response = await fetch(apiUrl);
    const data = await response.json();

        const latestCommitSha = data
        if (latestCommitSha !== localCommitSha) {
          const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });

          rl.question(
            chalk.green("[ UPDATER ]" + chalk.blue(" An update is available. Do you want to update and reboot? (yes/no): ")),
            (answer) => {
              if (answer.toLowerCase() === "yes") {
                console.log(chalk.green("[ UPDATER ] ") + chalk.green(" Updating and rebooting..."));
                fs.rename(".env", "updating.env", () => {
                  console.log(chalk.green("[ UPDATER ] ") + chalk.blue(".ENV Renamed to updating.ENV !"));
                });
                exec("git pull && bun install", (error, stdout, stderr) => {
                  if (error) {
                    console.error(chalk.green('[ UPDATER ]') + chalk.red(` Error updating and rebooting: ${error}`));
                  } else {
                    console.log(stdout);
                  }
                });
                setTimeout(function () {
                  // Listen for the 'exit' event.
                  // This is emitted when our app exits.
                  process.on("exit", function () {
                    //  Resolve the `child_process` module, and `spawn`
                    //  a new process.
                    //  The `child_process` module lets us
                    //  access OS functionalities by running any bash command.`.
                    require("child_process").spawn(
                      process.argv.shift(),
                      process.argv,
                      {
                        cwd: process.cwd(),
                        detached: true,
                        stdio: "inherit",
                      }
                    );
                  });
                  process.exit();
                }, 1000);
              } else {
            }
            
            console.log(chalk.green('[ UPDATER ]') + chalk.red("  No update performed."));
              rl.close();
            }
          );
        } else {
          console.log("No updates available.");
        }
      } else {
        console.log("Could not get local commit SHA. Not updating...");
      }
})
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
}

checkForUpdates();
