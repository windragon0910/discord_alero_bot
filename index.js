/* Modules */
const colors = require('colors');
const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
require('dotenv').config();

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL', 'GUILD_MEMBER', 'USER']
});

client.on('ready', () => {
    console.log('Bot Started'.bgRed.white);

    const WOK = new WOKCommands(client, {
        commandsDir: 'commands',
        featuresDir: 'features',
        showWarns: false,
        del: 5,
        testServers: [process.env.TESTGUILDID]
    })
    .setDefaultPrefix(process.env.PREFIX)
    .setColor(0x0099ff)
    .setBotOwner(process.env.BOTOWNERID)
    .setCategorySettings([
        {
            name: 'Fun',
            emoji: '🎮',
        },
        {
            name: 'Moderation',
            emoji: '🛠',
        },
        {
            name: 'Economy',
            emoji: '💵',
        },
        {
            name: 'Development',
            emoji: '💻',
        },
        {
            name: 'Configuration',
            emoji: '⚙',
            hidden: true,
        },
    ]);
    WOK.on('commandException', (command, message, error) => {   
        console.log(`Exception ocucured when using command "${command.names[0]}"! Error:`.bgRed);
        console.log(error.red);
    });
});

client.login(process.env.TOKEN);
