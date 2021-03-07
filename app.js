'use strict'

/* Modules */
const Discord = require('discord.js');
const colors = require('colors');
const fs = require('fs');

/* Config */
const Config = require('./server/config/config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

/* Commands */
const commandFolders = fs.readdirSync('./server/commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./server/commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./server/commands/${folder}/${file}`);

        client.commands.set(command.name, command);
    };
};

client.once('ready', () => {
    console.log(`Bot started. Name: ${client.user.tag}`.bgRed.white);
});


client.on('message', message => {
    /* Log messages sent */
    if(!message.author.bot) {
        console.log(`${message.content}`.green);
    };
    
    /* Command Set-Up */
    if(!message.content.startsWith(Config.prefix) || message.author.bot) return;

    const args = message.content.slice(Config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    function exCommand(str) {
        client.commands.get(str).execute(message, args);
        console.log(`${str} executed.`.toUpperCase().bgBlue.red);
    };

    switch(command) {
        case 'ping':
            exCommand('ping');
            break;
        case 'dev-info':
            exCommand('dev-info');
            break;
    }
    if(!command) return;
    
    if(command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DM\'s');
    };
});

client.login(Config.token);