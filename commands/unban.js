const Discord = require('discord.js');

module.exports = {
    name: 'unban',
    category: 'Moderation',
    description: 'Unbans a member and then reply to the user an embed.',
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    cooldown: '5s',
    minArgs: 1,
    maxArgs: -1,
    permissions: ['BAN_MEMBERS'],
    init: (client, instance) => {
        console.log('Unban Command Loaded'.bgBlue.black);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        const member = args[0];
        /* Reason */
        var r = args;
        delete r[0];
        var r2 = r.toString();
        var reason = r2.replace(/,/g, ' ');
        var reason = reason.replace(/  /g, ', ');
        if (reason == "" || reason == " ") {
            var reason = "Reason not especified";
        };
        /* Embed */
        
        /* Embed */
        const embed = new Discord.MessageEmbed()
            .setColor('#1fcc5f')
            .setTitle('Member Unbanned!')
            .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
            .setDescription(`Unbanned by ${message.author.tag}`)
            .addFields(
                { name: `${member.tag} has been unbanned`, value: `Reason: ${reason}`, inline: false },
            )
            .setImage('https://cdn.discordapp.com/attachments/818274211541811220/826112701364568094/unban.png')
            .setTimestamp()
            .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');

        
        if(member) {
            const memberToUnban = member;
            message.guild.members.unban(member, {reason: `${reason}`}).then(() => {
                message.reply(`Member unbaned! Reason: ${reason}`);
            }).catch(err => {
                message.reply('I can\'t unban this member!');
                console.error(err);
            });
        } else {
            message.reply('You didn\'t mention the user to unban!');
        };
    
        console.log('- - - - Unban Executed.'.bgBlue.black);
    },
};