const colors = require('colors');

module.exports = (client, instance) => {
    client.on('message', (message) => {
        if(message.channel.type != "dm" && !message.author.bot) {
            console.log("New Message. Server: ".cyan + message.guild.name.cyan + ". Channel: ".cyan + message.channel.name.cyan + " From: ".cyan + message.author.username.cyan + ": ".cyan + message.content.cyan);
        } else {
            if (!message.author.bot) {
                console.log("DM Message from: ".cyan + message.author.username.cyan + ": ".cyan + message.content.cyan);
            }
        };
    });
    console.log('Log-Messages Feature Loaded'.red.bgWhite);
    console.log('\nLogs:'.bgYellow.black)
};

module.exports.config = {
    displayName: 'Log-Messages',
};