module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        let channel = '818471684193124392';
        
        let color1  = message.guild.roles.cache.find(role => role.name === "Blue");
        let color2  = message.guild.roles.cache.find(role => role.name === "Red");
        let color3  = message.guild.roles.cache.find(role => role.name === "Green");
        let color4  = message.guild.roles.cache.find(role => role.name === "Yellow");

        let color1Emoji = '🔵';
        let color2Emoji = '🔴';
        let color3Emoji = '🟢';
        let color4Emoji = '🟡';

        let embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Select your color!')
            .setDescription('React the color that you want. \n\n'
            + `${color1} for Blue Team\n`
            + `${color2} for Red Team\n`
            + `${color3} for Green Team\n`
            + `${color4} for Yellow Team\n`)
            .setAuthor('Alero Bot', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png', 'https://github.com/ZAD4YTV/alero-discord-bot/')
            .setThumbnail('https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png')
            .setTimestamp()
            .setFooter('Alero, by ZAD4Y', 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png');
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(color1Emoji);
        messageEmbed.react(color2Emoji);
        messageEmbed.react(color3Emoji);
        messageEmbed.react(color4Emoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.name === color1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(color1)
                }
                if(reaction.emoji.name === color2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(color2)
                }
                if(reaction.emoji.name === color3Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(color3)
                }
                if(reaction.emoji.name === color4Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(color4)
                }
            } else {
                return;
            };
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.name === color1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(color1)
                }
                if(reaction.emoji.name === color2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(color2)
                }
                if(reaction.emoji.name === color3Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(color3)
                }
                if(reaction.emoji.name === color4Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(color4)
                }
            } else {
                return;
            };
        });
    },
};