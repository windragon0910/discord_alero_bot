const colors = require('colors');

module.exports = (client, instance) => {
    client.on('message', (message) => {
        if(message.channel.type != "dm" && !message.author.bot) {
            console.log("New Message. Server: ".yellow + message.guild.name.yellow + ". Channel: ".yellow + message.channel.name.yellow + " From: ".yellow + message.author.username.yellow + ": ".yellow + message.content.yellow);
        } else {
            if (!message.author.bot) {
                console.log("DM Message from: ".yellow + message.author.username.yellow + ": ".yellow + message.content.yellow);
            }
        };
    });
    console.log('Log-Messages Feature Loaded'.bgGreen.black);
    console.log('\nLogs:'.bgYellow.black)
};

module.exports.config = {
    displayName: 'Log-Messages',
};