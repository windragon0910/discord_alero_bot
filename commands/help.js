const { message } = require('discord.js')
module.exports = {
    name: 'help',
    category: 'Fun',
    description: 'Pong!',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    maxArgs: 1,
    init: (client, instance) => {
        console.log('Help Command Loaded'.bgBlue.black);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        message.channel.send('Coming soon!');
        console.log('- - - - Help Command Executed'.bgBlue.black);
    },
};