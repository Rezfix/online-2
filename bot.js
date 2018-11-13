const Discord = require("discord.js");
const Gazi = new Discord.Client();

Gazi.on('ready', () => {
   Gazi.user.setGame('Hacked Account','https://www.twitch.tv/Rezfix');
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
