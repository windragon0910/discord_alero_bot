const Discord = require('discord.js');
module.exports = {
    name: 'sendto',
    category: 'Fun',
    description: 'Reply in the channel that was sent the command the args!',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    maxArgs: 99,
    minArgs: 1,
    init: (client, instance) => {
        console.log('Sendto Command Loaded'.bgBlue.black);
    },
    callback: async function({message, args, text, client, prefix, instance, channel}) {
        const channelmentioned = message.mentions.channels.first();
        async function x() {
            delete args[0];
            beforeprearg = args.toString();
            prearg = beforeprearg.replace(/,/g, ' ');
            return arg = await prearg;
        };
        if (channel) {
            send = x().then(() => {
                channelmentioned.send(arg);
                console.log(arg);
            })
        } else {
            message.reply('You didn\'t provide a channel to send the message.')
        }
    },
};