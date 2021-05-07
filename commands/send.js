const Discord = require('discord.js');
module.exports = {
    name: 'send',
    category: 'Fun',
    description: 'Reply in the channel that was sent the command the args!',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    maxArgs: 99,
    minArgs: 1,
    init: (client, instance) => {
        console.log('Send Command Loaded'.bgBlue.black);
    },
    callback: async function({message, args, text, client, prefix, instance, channel}) {
        async function x() {
            beforeprearg = args.toString();
            prearg = beforeprearg.replace(/,/g, ' ');
            return arg = await prearg;
        };
        send = x().then(() => {
            message.channel.send(arg);
            console.log(arg);
        })
    },
};