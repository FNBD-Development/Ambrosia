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
================= Ambrosia Updater =================
*/

const axios = require("axios");
const readline = require("readline");
const { exec } = require("child_process");
const fs = require("node:fs");

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
    getLocalCommitSHA((commitSHA) => {
      if (commitSHA) {
        const localCommitSha = commitSHA;

        const response = axios.get(apiUrl);
        const data = response.json();

        const latestCommitSha = data[0].sha;
        if (latestCommitSha !== localCommitSha) {
          const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });

          rl.question(
            "An update is available. Do you want to update and reboot? (yes/no): ",
            (answer) => {
              if (answer.toLowerCase() === "yes") {
                console.log("Updating and rebooting...");
                fs.rename(".env", "updating.env", () => {
                  console.log("\n .ENV Renamed to updating.ENV !\n");
                });
                exec("git pull && bun install", (error, stdout, stderr) => {
                  if (error) {
                    console.error(`Error updating and rebooting: ${error}`);
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
                console.log("No update performed.");
              }

              rl.close();
            }
          );
        } else {
          console.log("No updates available.");
        }
      } else {
        console.log("Could not get local commit SHA. Not updating...");
      }
    });
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
}

checkForUpdates();
