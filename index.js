var Discord = require('discord.js');
var bot = new Discord.Client();

const prefix =  'CHECK.';

let msg = message.content.toUpperCase();
let sender = message.author;
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);

if (msg === prefix + 'PING') {
    message.channel.send('PONG');
    return;
    }
    
});

bot.on('ready' , () => {
      console.log('hello bot');
});

bot.login('NDEwODM2OTQzODExOTAzNTA4.DV9PbQ.WMK89MplF4Fe46F7RNd4NG5DrQI')
