const Discord = require('discord.js');

module.exports = {
    name: 'info',
    aliases: 'i',
    category: 'Development',
    description: 'Reply info about the args',
    ownerOnly: false,
    guildOnly: false,
    testOnly: false,
    cooldown: '5s',
    maxArgs: 1,
    minArgs: 0,
    init: (client, instance) => {
        console.log('Dev-Info Command Loaded'.bgBlue.black);
    },
    callback: ({message, args, text, client, prefix, instance, channel}) => {
        var logo = 'https://media.discordapp.net/attachments/818274211541811220/818274289680646164/logo.png'
        var gitURL = 'https://github.com/ZAD4YTV/'
        var tq = 'https://media.discordapp.net/attachments/818274211541811220/818274342533988402/tq.jpg'
        switch (args[0]) {
            case undefined:
                let embed1 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('ZAD4Y')
                    .setURL(gitURL)
                    .setAuthor('Alero Bot', logo, 'https://github.com/ZAD4YTV/alero-discord-bot/')
                    .setThumbnail(logo)
                    .setDescription('We can help you with these arguments:')
                    .addFields(
                        { name: 'dev', value: 'Get info about the owner of the bot.', inline: false },
                        { name: 'dpkg', value: 'Get info about the DPKG package.', inline: false},
                        { name: 'sudo', value: 'Get info about the sudo command.', inline: false},
                        { name: 'switch-to-linux', value: 'Get info about the Switch to Linux guide.', inline: false},
                    )
                    .setTimestamp()
                    .setFooter('Alero, by ZAD4Y', logo);
                
                message.channel.send(embed1).then(console.log('- - - - Info Executed'));
                break;
            case 'dev':
                let embed2 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('ZAD4Y')
                .setURL('https://github.com/ZAD4YTV/')
                .setAuthor('Alero Bot', logo, 'https://github.com/ZAD4YTV/alero-discord-bot/')
                .setDescription('My developer, it\'s ZAD4Y! Support ZAD4Y in his Social Networks!')
                .setThumbnail(tq)
                .addFields(
                    { name: 'GitHub', value: 'http://github.com/ZAD4YTV', inline: false },
                    { name: 'Twitter', value: 'http://twitter.com/ZAD4Y', inline: false },
                    { name: 'Discord', value: 'http://discord.gg/t7p3bk86md', inline: false },
                    )
                .setImage('https://media.discordapp.net/attachments/818274211541811220/818275986218942504/dev-info-img.png')
                .setFooter('Alero, by ZAD4Y', logo);

                message.channel.send(embed2).then(console.log('- - - - Info-Dev Executed.'));
                break;
            case 'dpkg':
                let embed3 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('ZAD4Y')
                    .setURL(gitURL)
                    .setAuthor('Alero Bot', logo, 'https://github.com/ZAD4YTV/alero-discord-bot/')
                    .setThumbnail(logo)
                    .addFields(
                        { name: 'About DPKG', value: 'dpkg is the software at the base of the package management system in the free operating system Debian and its numerous derivatives. dpkg is used to install, remove, and provide information about .deb packages.', inline: false},
                        { name: 'Usage:', value: 'There are 3 principal usages.', inline: false},
                        { name: '1 - To install a .deb package', value: 'dpkg -i filename.deb', inline: false},
                        { name: '2 - To see a list of installed packages:', value: 'dpkg -l [optional pattern]', inline: false},
                        { name: '3 - To remove a .deb package', value: 'dpkg -r packagename', inline: false},

                    )
                    .setTimestamp()
                    .setFooter('Alero, by ZAD4Y', logo);
                message.channel.send(embed3).then(console.log('- - - - Info-Dpkg Executed.'));
                break;
            case 'sudo':
                let embed4 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('ZAD4Y')
                    .setURL(gitURL)
                    .setAuthor('Alero Bot', logo, 'https://github.com/ZAD4YTV/alero-discord-bot/')
                    .setThumbnail(logo)
                    .addFields(
                        { name: 'About SUDO', value: 'Sudo, is a program for Unix-Like computer operating systems that allows users to run programs with the security privileges of another user, by default the superuser. It originally stood for "superuser do" as the older versions of sudo were designed to run commands only as the superuser. However, the later versions added support for running commands not only as the superuser but also as other (restricted) users, and thus it is also commonly expanded as "substitute user do". Although the latter case reflects its current functionality more accurately, `sudo` is still often called "superuser do" since it is so often.', inline: false},
                        { name: 'Usage:', value: 'It just has 1 use.', inline: false},
                        { name: 'Using SUDO', value: 'sudo {package, for example: dpkg, apt}', inline: false},
                    )
                    .setTimestamp()
                    .setFooter('Alero, by ZAD4Y', logo);
                message.channel.send(embed4).then(console.log('- - - - Info-Sudo Executed.'));
                break;
            case 'switch-to-linux':
                let embed5 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('ZAD4Y')
                    .setURL(gitURL)
                    .setAuthor('Alero Bot', logo, 'https://github.com/ZAD4YTV/alero-discord-bot/')
                    .setThumbnail(logo)
                    .addFields(
                        { name: 'Switch To Linux', value: 'Oh, welcome to this', inline: false},
                        { name: 'GitHub Repository', value: 'https://github.com/ZAD4YTV/switch-to-linux', inline: false},
                        { name: 'About Switch To Linux', value: 'This is a guide to change your OS to Linux.', inline: false},
                    )
                    .setTimestamp()
                    .setFooter('Alero, by ZAD4Y', logo);
                message.channel.send(embed5).then(console.log('- - - - Info-Switch-to-Linux Executed'.bgBlue.black));
                break;
        }
    }
}