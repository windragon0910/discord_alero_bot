const Discord = require('discord.js');
module.exports = {
    name: 'send',
    category: 'Messages',
    description: 'Reply in the channel that was sent the command the args!',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    cooldown: '5s',
    maxArgs: -1,
    minArgs: 1,
    init: (client, instance) => {
        console.log('Send Command Loaded'.bgBlue.black);
    },
    callback: async function({message, args, text, client, prefix, instance, channel}) {
        async function x() {
            arg = args.toString();
            arg = arg.replace(/,/g, ' ');
            arg = arg.replace(/  /g, ', ')
            return arg = await arg;
        };
        send = x().then(() => {
            message.channel.send(arg);
            console.log('Send command return: '.cyan + arg.cyan);
        });
        console.log('- - - - Send Executed.'.bgBlue.black);
    },
};