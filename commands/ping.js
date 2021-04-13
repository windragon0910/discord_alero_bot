const { Message } = require('discord.js')
module.exports = {
    name: 'ping',
    category: 'Fun',
    description: 'Pong!',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    // slash: true, WORKING, BUT ONLY CAN WORK IF YOU SEND IT TO A TEST SERVER.
    maxArgs: 0,
    init: (client, instance) => {
        console.log('Ping Command Loaded'.bgBlue.black)
    },
    callback: ({ message }) => {
        message.channel.send('🏓 Pong!').then(console.log('Ping Executed.'.bgBlue.black));
    },
};