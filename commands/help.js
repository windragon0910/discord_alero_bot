const { message } = require('discord.js')
module.exports = {
    name: 'help',
    category: 'Help',
    description: 'Return an embed with all the commands!',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    maxArgs: 2,
    minArgs: 0,
    init: (client, instance) => {
        console.log('Help Command Loaded'.yellow);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        
        console.log('- - - - Help Command Executed'.bgBlue.black);
    },
};