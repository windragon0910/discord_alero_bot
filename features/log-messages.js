const colors = require('colors');

module.exports = (client, instance) => {
    client.on('message', (message) => {
        if(message.channel.type != "dm" && !message.author.bot) {
            console.log("New Message. Server: ".bgWhite.black + message.guild.name.bgWhite.black + ". Channel: ".bgWhite.black + message.channel.name.bgWhite.black + " From: ".bgWhite.black + message.author.username.bgWhite.black + ": ".bgWhite.black + message.content.bgWhite.black);
        } else {
            if (!message.author.bot) {
                console.log("DM Message from: ".bgWhite.black + message.author.username.bgWhite.black + ": ".bgWhite.black + message.content.bgWhite.black);
            }
        };
    });
    console.log('Log-Messages Feature Loaded'.bgGreen.black);
};

module.exports.config = {
    displayName: 'Log-Messages',
};