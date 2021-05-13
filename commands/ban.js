const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    category: 'Moderation',
    description: 'Bans a member and then reply to the user an embed.',
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    cooldown: '1s',
    minArgs: 1,
    maxArgs: -1,
    permissions: ['BAN_MEMBERS'],
    init: (client, instance) => {
        console.log('Ban Command Loaded'.yellow);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        const member = message.mentions.users.first();
        var memberBannedAvatarURL = member.displayAvatarURL({format: "png", dynamic: true});

        /* Reason */
        function arg() {
            arg = args.slice(1);
            arg = arg.toString();
            arg = arg.replace(/,/g, ' ');
            arg = arg.replace(/  /g, ', ');
            if(arg == '' || arg == ' ' || arg == undefined) return arg = "Reason not especified";
            return arg;
        };

        /* Embed */
        const embed = new Discord.MessageEmbed()
            .setColor('#cc000e')
            .setTitle('Member Banned!')
            .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
            .setDescription(`Banned by ${message.author.tag}`)
            .setThumbnail(`${memberBannedAvatarURL}`)
            .addFields(
                { name: `${member.tag} has been banned`, value: `Reason: ${arg()}`, inline: false },
            )
            .setImage('https://cdn.discordapp.com/attachments/818274211541811220/826110597019074640/ban.png')
            .setTimestamp()
            .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');

        
        if(member) {
            const memberToBan = message.guild.member(member);
            memberToBan
            .ban( {reason: `${arg()}`})
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