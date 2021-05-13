const Discord = require('discord.js');
module.exports = {
    name: 'sendto',
    category: 'Messages',
    description: 'Reply in the channel that was sent the command the args!',
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    cooldown: '10s',
    maxArgs: -1,
    minArgs: 2,
    init: (client, instance) => {
        console.log('Sendto Command Loaded'.yellow);
    },
    callback: async function({message, args, text, client, prefix, instance, channel}) {
        function arg() {
            arg = args.slice(1);
            arg = arg.toString();
            arg = arg.replace(/,/g, ' ');
            arg = arg.replace(/  /g, ', ');
            return arg;
        };
        
        if (args[0].startsWith('<#') && args[0].endsWith('>')) {
            var channelmentioned = message.mentions.channels.first();
            var isMentioned = true;
        } else {
            var channelmentioned = client.channels.cache.get(args[0]);
            var isMentioned = false;
        };

        if (channelmentioned != undefined) {
            if (message.member.permissionsIn(channelmentioned).has(['VEW_CHANNEL', 'SEND_MESSAGES'])) {
                if(isMentioned) {
                    channelmentioned.send(arg()).then(() => {
                        message.reply('Message sent!');
                    }).catch((err) => { 
                        message.reply('I can\'t send a message to that channel.');
                    });
                } else {
                    client.channels.get(channelmentioned).send(arg()).then(() => {
                        message.reply('Message sent!');
                    }).catch((err) => { 
                        message.reply('I can\'t send a message to that channel.');
                    });
                };
            } else {
                message.reply('You don\'t have permissions to send a message to that channel.')
            }
        } else {
            message.reply('You didn\'t provide a channel.');
        }
        console.log('- - - - Sendto executed.'.bgBlue.black)
    },
};