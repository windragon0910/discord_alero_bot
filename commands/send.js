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
        console.log('Send Command Loaded'.yellow);
    },
    callback: async function({message, args, text, client, prefix, instance, channel}) {
        function argument() {
            arg = args;
            arg = arg.toString();
            arg = arg.replace(/,/g, ' ');
            arg = arg.replace(/  /g, ', ');
            return arg;
        };
        
        message.channel.send(argument());
        console.log('Send command return: '.cyan + argument().cyan);
        console.log('- - - - Send Executed.'.bgBlue.black);
    },
};