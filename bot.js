const Discord = require("discord.js");
const Gazi = new Discord.Client();

Gazi.on('ready', () => {
   Gazi.user.setGame('Can U Love  Me?','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('Gazi Online')
    console.log('---------------')
  });

Gazi.login(process.env.GAZI)
const Sfa7 = new Discord.Client();

Sfa7.on('ready', () => {
   Sfa7.user.setGame('#Rezfix_i love','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('Sfa7 Online')
    console.log('---------------')
  });

Sfa7.login(process.env.SFA7);
const AbuA = new Discord.Client();

AbuA.on('ready', () => {
   AbuA.user.setGame('اشتريت iPhone xs  😍','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('AbuA Online')
    console.log('---------------')
  });

AbuA.login(process.env.ABUA);
