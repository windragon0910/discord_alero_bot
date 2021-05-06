const Discord = require('discord.js');

module.exports = {
    name: 'dev-info',
    aliases: ['dev'],
    category: 'Development',
    description: 'Reply an embed with some info of the bot',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    maxArgs: 0,
    init: (client, instance) => {
        console.log('Dev-Info Command Loaded'.bgBlue.black);
    },
    callback: ({ message, client }) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('ZAD4Y')
            .setURL('https://github.com/ZAD4YTV/')
            .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
            .setDescription('My developer, it\'s ZAD4Y! Support ZAD4Y in his Social Networks!')
            .setThumbnail('https://media.discordapp.net/attachments/818274211541811220/818274342533988402/tq.jpg')
            .addFields(
                { name: 'GitHub', value: 'http://github.com/ZAD4YTV', inline: false },
                { name: 'Twitter', value: 'http://twitter.com/ZAD4Y', inline: false },
                { name: 'Discord', value: 'http://discord.gg/t7p3bk86md', inline: false },
                )
            .setImage('https://media.discordapp.net/attachments/818274211541811220/818275986218942504/dev-info-img.png')
            .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');
        message.channel.send(embed).then(console.log('- - - - Dev-Info Executed.'.bgBlue.black));
    }

}