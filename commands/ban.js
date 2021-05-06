const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    category: 'Moderation',
    description: 'Bans a member and then reply to the user an embed.',
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    minArgs: 1,
    maxArgs: -1,
    permissions: ['BAN_MEMBERS'],
    init: (client, instance) => {
        console.log('Ban Command Loaded'.bgBlue.black);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        const member = message.mentions.users.first();
        var memberBannedAvatarURL = member.displayAvatarURL({format: "png", dynamic: true});

        /* Reason */
        var r = args;
        delete r[0];
        var r2 = r.toString();
        var reason = r2.replace(',', ' ');
        if (reason == "" || reason == " ") {
            var reason = "Reason not especified";
        };

        /* Embed */
        const embed = new Discord.MessageEmbed()
            .setColor('#cc000e')
            .setTitle('Member Banned!')
            .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
            .setDescription(`Banned by ${message.author.tag}`)
            .setThumbnail(`${memberBannedAvatarURL}`)
            .addFields(
                { name: `${member.tag} has been banned`, value: `Reason: ${reason}`, inline: false },
            )
            .setImage('https://cdn.discordapp.com/attachments/818274211541811220/826110597019074640/ban.png')
            .setTimestamp()
            .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');

        
        if(member) {
            const memberToBan = message.guild.member(member);
            memberToBan
            .ban( {reason: `${reason}`})
            .then(() => {
                message.channel.send(embed);
            })
            .catch(err => {
                message.reply('I can\'t ban this member! Try with the member ID!');
                console.error(err);
            });
        } else {
            message.reply('You didn\'t mention the user to ban!');
        };
        
        console.log('- - - - Ban Executed.'.bgBlue.black);
    },
};