require("dotenv").config();
const express = require("express");
const app = express();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "REACTION", "CHANNEL"],
});
// commands structure
const fs = require("fs");
const { promisify } = require("util");
const readDirectory = promisify(fs.readdir);
client.commands = new Discord.Collection();
const logger = require("./util/logging.js");

// '/' => Home page
app.get("/", (req, res) => {
  res.send("root route");
});

// Scheduling routes
app.get("/schedule/:page", (req, res) => {
  const { page } = req.params;
  res.send(`<h1>browsing ${page} `);
});

app.get("/schedule/:page/:postid", (req, res) => {
  const { postid } = req.params;
  res.send(`Got the post id ${postid}`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  } else {
    res.send(`Searched for: ${q}`);
  }
});

app.get("*", (req, res) => {
  res.send("That path does not exist");
});
// app.use((request, response) => {
//   //response.send("response");
//   console.log("got a new request");
// });

// Discord Stuff
/* ----------------------------------------------------------------------------- */
//Set up the project to run commands and events
const load = async () => {
  const cmdFiles = await readDirectory("./commands/");
  cmdFiles.forEach((file) => {
    try {
      if (file.split(".").slice(-1)[0] !== "js") {
        // check the filename
        return;
      }
      const f = require(`./commands/${file}`);
      client.commands.set(f.conf.name, f);
    } catch (error) {
      logger.log({ level: "info", message: error });
    }
  });

  // const sheetsCmdFiles = await readDirectory('./_googlesheets/');
  // sheetsCmdFiles.forEach((file) => {
  // 	try {
  //
  // 		if (file.split('.').slice(-1)[0] !== 'js') {
  // 			return;
  // 		}
  // const f = require(`./_googlesheets/${file}`);
  // 		client.commands.set(f.conf.name, f);
  // 	} catch (error) {
  // 		logger.log({ level: 'info', message: error });
  // 	}
  // });

  const eventFiles = await readDirectory("./events/");
  eventFiles.forEach((file) => {
    if (file.split(".").slice(-1)[0] !== "js") {
      return;
    }
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};

if (process.env.DEVELOPMENT === "true") {
  client.login(process.env.DEV_TOKEN);
} else {
  client.login(process.env.LIVE_TOKEN);
}
load();
/* ----------------------------------------------------------------------------- */
// End Discord Stuff

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
