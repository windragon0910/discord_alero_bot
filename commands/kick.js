const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    category: 'Moderation',
    description: 'Kick a member and then reply to the user an embed.',
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    minArgs: 1,
    maxArgs: -1,
    permissions: ['KICK_MEMBERS'],
    init: (client, instance) => {
        console.log('Kick Command Loaded'.bgBlue.black);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        const member = message.mentions.users.first();
        /* Reason */
        var r = args;
        delete r[0];
        var r2 = r.toString();
        var reason = r2.replace(',', ' ');
        if (reason == "" || reason == " ") {
            var reason = "Reason not especified";
        };
        
        if(member) {
            const memberToBan = message.guild.member(member);
            memberToBan
            .ban({reason: reason})
            .then(() => {
                message.reply(`${member.tag} has been kicked! Reason: ${reason}`);
            })
            .catch(err => {
                message.reply('I can\'t kick this member!');
                console.error(err);
            });
        } else {
            message.reply('You didn\'t mention the user to kick!');
        };
        
        console.log('- - - - Kick Executed.'.bgBlue.black);
    },
};