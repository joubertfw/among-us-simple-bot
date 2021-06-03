//Configuração de arquivo para bot
const Discord = require('discord.js');
const client = new Discord.Client();

//Configuração de pastas de comandos
const fs = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const Keyv = require('keyv');
const keyv = new Keyv();

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord, keyv);
});

client.login('your discord bot token here');