const Discord = require('discord.js');
const colors = require('colors')

module.exports = {
    name: 'eval',
    category: 'Development',
    description: 'Eval JS code.',
    ownerOnly: true,
    guildOnly: false,
    testOnly: false,
    minArgs: 1,
    maxArgs: -1,
    init: (client, instance) => {
        console.log('Eval Command Loaded'.bgBlue.black);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        try {
            const content = message.content.replace(`${process.env.PREFIX}eval`, '');
            var executed = false;
            async function evalThis(params) {
                return result = await eval(params);
            }
            const exec = evalThis(content).then(() => {
                const resultEmbed = new Discord.MessageEmbed()
                    .setColor('#1ca757')
                    .setTitle('✅ Evalued ✅')
                    .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
                    .setThumbnail('https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png')
                    .addFields(
                        { name: 'Input: ', value: '```js\n' + content + '```', inline: false},
                        { name: 'Output:', value: '```js\n' + result + '```', inline: false},
                    )
                    .setTimestamp()
                    .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');
                message.channel.send(resultEmbed);
                console.log("Result: \n" + result);
            }).catch(err => {
                console.log(err);
                const errorEmbed = new Discord.MessageEmbed()
                    .setColor('#fb7474')
                    .setTitle('❌⚠ Error ⚠❌')
                    .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
                    .setThumbnail('https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png')
                    .addFields(
                        { name: 'Input: ', value: '```js\n' + err + '```', inline: false},
                        { name: 'Output:', value: '```js\n' + err + '```', inline: false},
                    )
                    .setTimestamp()
                    .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');
                message.channel.send(errorEmbed);
            });
            } catch (err) {
                console.log(err);
                const errorEmbed = new Discord.MessageEmbed()
                    .setColor('#fb7474')
                    .setTitle('❌⚠ Error ⚠❌')
                    .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
                    .setThumbnail('https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png')
                    .addFields(
                        { name: 'Input: ', value: '```js\n' + err + '```', inline: false},
                        { name: 'Output:', value: '```js\n' + err + '```', inline: false},
                    )
                    .setTimestamp()
                    .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');
                message.channel.send(errorEmbed);
            };
        
        console.log('Eval Executed.'.bgBlue.black);
    },
};