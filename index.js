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

    const dbOptions = {
        keepAlive: true,
        useNewUrlParser: true,
        useUndefinedTopology: true,
        useFindAndModify: false,
    }
    // Client
    const WOK = new WOKCommands(client, {
        commandsDir: 'commands',
        featuresDir: 'features',
        showWarns: false,
        del: 5,
        testServers: [process.env.TESTGUILDID]
    });
    WOK.setDefaultPrefix(process.env.PREFIX);
    WOK.setColor(0x0099ff);
    WOK.setBotOwner(process.env.BOTOWNERID);
    WOK.setMongoPath(process.env.MONGOURI);
    WOK.setCategorySettings([
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
        {
            name: 'Messages',
            emoji: '💬',
        },
        {
            name: 'Help',
            emoji: '✅',
        },
        {
            name: 'Owner Only',
            emoji: '🔒',
        },
    ]);

    // Listeners
    WOK.on('commandException', (command, message, error) => {   
        console.log(`Exception happened when using command "${command.names[0]}"! Error:`.bgRed);
        console.log(error.red);
    });
    WOK.on('databaseConnected', async (connection, state) => {
        const model = connection.models['wokcommands-languages', 'wokcommands-cooldowns', 'wokcommands-languages', 'wokcommands-prefixes', 'wokcommands-required-roles'];
        const results = await model.countDocuments();
        console.log("Database connection results: " + results);
    })
});

client.login(process.env.TOKEN);
