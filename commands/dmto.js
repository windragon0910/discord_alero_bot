const Discord = require('discord.js');
module.exports = {
    name: 'Dmto',
    category: 'Messages',
    description: 'Send a DM to a person!',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    cooldown: '5s',
    maxArgs: -1,
    minArgs: 2,
    init: (client, instance) => {
        console.log('Dmto Command Loaded'.yellow);
    },
    callback: async function({message, args, text, client, prefix, instance, channel}) {
        if (isNaN(args[0])) {
            user = null;
            isMentioned = false;
            run = false;
        } else {
            isMentioned = false;
            run = true;
        };
        if (message.content.startsWith(`${process.env.PREFIX}dmto <`)) {
            user = message.mentions.users.first();
            isMentioned = true;
            run = true;
        };
        function arg() {
            arg = args.slice(1);
            arg = arg.toString();
            arg = arg.replace(/,/g, ' ');
            arg = arg.replace(/  /g, ', ');
            return arg;
        };

        if(run) {
            if(isMentioned) {
                    let memberToSend = message.guild.member(user);
                    memberToSend.send(arg()).then(() => {
                        message.reply('Message sent!');
                    }).catch((err) => {
                        message.reply('I can\'t send a message to that person, maybe he/she has DMs deactivated.');
                        console.log(err);
                    });
            } else {
                const userToSend = client.users.cache.get(args[0]);
                if(userToSend != undefined) {
                    userToSend.send(arg()).then(() => {
                        message.reply('Message sent!');
                    }).catch((err) => {
                        message.reply('I can\'t send a message to that person, maybe he/she has DMs deactivated.');
                        console.log(err);
                    });
                } else {
                    message.reply('You give me a Invalid ID.');
                }
            }
        } else {
            message.reply('Invalid user. Try with the ID or mentioning the user.');
        };
        console.log('- - - - Dmto Executed.'.bgBlue.black);
    },
};