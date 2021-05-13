const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    category: 'Moderation',
    description: 'Kick a member and then reply to the user an embed.',
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    cooldown: '1s',
    minArgs: 1,
    maxArgs: -1,
    permissions: ['KICK_MEMBERS'],
    init: (client, instance) => {
        console.log('Kick Command Loaded'.yellow);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        const member = message.mentions.users.first();
        /* Reason */
        function arg() {
            arg = args.slice(1);
            arg = arg.toString();
            arg = arg.replace(/,/g, ' ');
            arg = arg.replace(/  /g, ', ');
            if(arg == '' || arg == ' ' || arg == undefined) return arg = "Reason not especified";
            return arg;
        };
        
        if(member) {
            const memberToBan = message.guild.member(member);
            memberToBan
            .ban({reason: arg()})
            .then(() => {
                message.reply(`${member.tag} has been kicked! Reason: ${arg()}`);
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