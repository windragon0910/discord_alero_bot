const Discord = require('discord.js');
const colors = require('colors');

module.exports = {
    name: 'reaction-role',
    aliases: ['color-role', 'reactionrole', 'colorrole'],
    category: 'Moderation',
    description: 'Send an embed with some colors (roles) for choose.',
    ownerOnly: false,
    guildOnly: true,
    testOnly: false,
    minArgs: 0,
    maxArgs: -1,
    permissions: ['MANAGE_ROLES'],
    init: (client, instance) => {
        console.log('Reaction-Role Command Loaded'.bgBlue.black);
    },
    callback: async({message, args, text, client, prefix, instance, channel}) => {
    function roleCreate(name, color) {
        message.guild.roles.create({
            data: {
                name: name,
                color: color,
            },
        }).then(console.log(`Role ${name} created`.bgCyan.black))
    }

    if (!message.guild.roles.cache.some(role => role.name === "Red")) {
        roleCreate('Red', 'RED');
    } if (!message.guild.roles.cache.some(role => role.name === "Blue")) {
        roleCreate('Blue', 'BLUE');
    } if (!message.guild.roles.cache.some(role => role.name === "Green")) {
        roleCreate('Green', 'GREEN');
    } if (!message.guild.roles.cache.some(role => role.name === "Yellow")) {
        roleCreate('Yellow', 'YELLOW');
    };
    var colorRed = message.guild.roles.cache.find(role => role.name === "Red");
    var colorBlue = message.guild.roles.cache.find(role => role.name === "Blue");
    var colorGreen = message.guild.roles.cache.find(role => role.name === "Green");
    var colorYellow = message.guild.roles.cache.find(role => role.name === "Yellow");

    if(colorRed === undefined) {
        return colorRed = message.guild.roles.cache.find(role => role.name === "Red")
    };
    if(colorBlue === undefined) {
        return colorBlue = message.guild.roles.cache.find(role => role.name === "Blue");
    };
    if(colorGreen === undefined) {
        return colorGreen = message.guild.roles.cache.find(role => role.name === "Green");
    };
    if(colorYellow === undefined) {
        return colorYellow = message.guild.roles.cache.find(role => role.name === "Yellow");
    };

    var redEmoji = '🔴';
    var blueEmoji = '🔵';
    var greenEmoji = '🟢';
    var yellowEmoji = '🟡';

    const embed = new Discord.MessageEmbed()
        .setColor('#1be109')
        .setTitle('Select your color!')
        .setDescription('React the color that you want. \n\n' + `${colorRed} for Red Team\n` + `${colorBlue} for Blue Team\n` + `${colorGreen} for Green Team\n` + `${colorYellow} for Yellow Team\n` )
        .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
        .setTimestamp()
        .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');
    
    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(redEmoji);
    messageEmbed.react(blueEmoji);
    messageEmbed.react(greenEmoji);
    messageEmbed.react(yellowEmoji);

    client.on('messageReactionAdd', async(reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.id == messageEmbed.id) {
            if (reaction.emoji.name === redEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(colorRed)
            };
            if (reaction.emoji.name === blueEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(colorBlue)
            };
            if (reaction.emoji.name === greenEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(colorGreen)
            };
            if (reaction.emoji.name === yellowEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(colorYellow)
            };
        };
    })
    client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.id == messageEmbed.id) {
            if (reaction.emoji.name === redEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(colorRed)
            };
            if (reaction.emoji.name === blueEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(colorBlue)
            };
            if (reaction.emoji.name === greenEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(colorGreen)
            };
            if (reaction.emoji.name === yellowEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(colorYellow)
            };
        };
    })
    /* At the end */
    console.log('Reaction Role Executed.'.bgBlue.black);
    },
};