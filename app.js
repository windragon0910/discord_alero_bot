'use strict'

/* Modules */
const Discord = require('discord.js');
const colors = require('colors');
const fs = require('fs');

const memberCounter = require('./server/counters/member-counter');

/* Config */
const Config = require('./server/config/config.json');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
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
    memberCounter(client)
});

client.on('error', console.error);
client.on('message', message => {
    /* Log messages sent */
    if(!message.author.bot) {
        console.log(`MESSAGE SENT: ${message.content}`.bgWhite.green);
    };
    
    /* Command Set-Up */
    if(!message.content.startsWith(Config.prefix) || message.author.bot) return;

    const args = message.content.slice(Config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    function exCommand(str) {
        client.commands.get(str).execute(message, args);
        console.log(`${str} executed.`.toUpperCase().bgRed.white);
    };
    function exCommand2(str) {
        client.commands.get(str).execute(message, args, Discord, client);
        console.log(`${str} executed.`.toUpperCase().bgWhite.red);
    }

    switch(command) {
            /* Utility */
        case 'ping':
            exCommand('ping');
            break;
            /* Information */
        case 'dev-info':
            exCommand('dev-info');
            break;
            /* Moderation */
        case 'clear':
            exCommand('clear');
            break;
        case 'kick':
            exCommand('kick');
            break;
        case 'ban':
            exCommand('ban');
            break;
        case 'mute':
            exCommand('mute');
            break;
        case 'unmute':
            exCommand('unmute');
            break;
            /* Reaction Roles */
        case 'reactionrole':
            exCommand2('reactionrole');
            break;
            /* Music */
        case 'clearqueue':
            exCommand('clearqueue');
            break;
        case 'play':
            exCommand('play');
            break;
        case 'disconnect':
            exCommand('disconnect');
            break;
    };
    if(!command) return;
    
    if(command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DM\'s');
    };
});

client.on('guildMemberAdd', guildMember => {
    console.log(`MEMBER JOINED: ${guildMember}`.green);
    let mainRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(mainRole);
    guildMember.guild.channels.cache.get('816740392916615209').send(`Welcome <@${guildMember.user.id}> to our server, make sure to check out the rule text channel!`);
});

client.login(Config.token);