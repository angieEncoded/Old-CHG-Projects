const Xivjobs = require("../models/Xivjobs");
const Discord = require("discord.js");

const getRaidTitle = async (message) => {
  const timeoutEmbed = new Discord.MessageEmbed()
    .setColor("#F01934")
    .setTitle("Timeout")
    .setDescription("The timer has expired. Feel free to try again later!");
  const timeOut = 1000 * 15;
  let filter = (m) => m.author.id === author;
  const author = message.author.id;
  message.delete();
  message.author
    .send("raid name")
    .then((dmchannel) => {
      dmchannel.channel
        .awaitMessages(filter, {
          time: timeOut,
          max: 1,
          errors: ["time"],
        })
        .then((collected) => {
          return collected.first().content;
        });
    })
    .catch(() => {
      message.author.send(timeoutEmbed);
    });
};

module.exports.run = (client, message, arguments) => {
  const raid = {
    raidTitle: "",
    raidDescription: "",
    raidDate: "",
    raidTime: "",
    numberOfPlayers: "",
    numberOfReservedSlots: "",
    channelToPost: "",
  };

  const getInputs = async () => {
    raid.raidTitle = await getRaidTitle(message);
    console.log(raid.raidTitle);
  };

  getInputs();
};

module.exports.conf = {
  name: "sr",
};

// working code below here - took out for speed of testing
//===================================================================================

// message.author
//   .send(
//     new Discord.MessageEmbed()
//       .setColor("#33cc99")
//       .setTitle("Raid setup")
//       .setDescription("Enter the date for the raid")
//       .addFields(
//         { name: "format", value: "MM-DD-YYYY" },
//         { name: "Example:", value: "01-05-2020" }
//       )
//   )
//   .then((dmchannel) => {
//     dmchannel.channel
//       .awaitMessages(filter, {
//         time: timeOut,
//         max: 1,
//         errors: ["time"],
//       })
//       .then((collected) => {
//         let date = collected.first().content.split("-");
//         if (date[0] > 12 || date[0] < 1) {
//           message.author.send("That date isn't valid. Please try again");
//         }
//       });
//   });

//Start the conversation here

// .then((dmchannel) => {
//   return dmchannel.channel.awaitMessages(filter, {
//     time: timeOut,
//     max: 1,
//     errors: ["time"],
//   });
// })
// .then((collected) => {
//   raid.raidDescription = collected.first().content;
//   return message.author.send(
//     new Discord.MessageEmbed()
//       .setColor("#33cc99")
//       .setTitle("Raid setup")
//       .setDescription("Enter the date for the raid")
//       .addFields(
//         { name: "format", value: "MMDDYYYY" },
//         { name: "Example:", value: "01-05-2020" }
//       )
//   );
// });

// .catch(() => {
//   // may want to revisit and use throws
//   const timeoutEmbed = new Discord.MessageEmbed()
//     .setColor("#F01934")
//     .setTitle("Timeout")
//     .setDescription("The timer has expired. Feel free to try again later!");
//   message.author.send(timeoutEmbed);
// });
