const { Message } = require('discord.js')
module.exports = {
    name: 'ping',
    category: 'Fun',
    description: 'Pong!',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    cooldown: '5s',
    maxArgs: 0,
    minArgs: 0,
    init: (client, instance) => {
        console.log('Ping Command Loaded'.yellow)
    },
    callback: ({ message }) => {
        message.channel.send('🏓 Pong!').then(console.log('- - - - Ping Executed.'.bgBlue.black));
    },
};