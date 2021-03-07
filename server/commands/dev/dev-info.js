module.exports = {
    name: 'dev-info',
    description: 'This is a command that explain info of the owner of this bot!',
    execute(message, args) {
        if(message.member.roles.cache.has('817847820152995921')) {
            message.channel.send('ZAD4Y Info: \nGitHub: http://github.com/ZAD4YTV \nDiscord: https://discord.gg/t7p3bk86md \nWeb: Coming Soon... \n----- \n Made with love. ZAD4Y');
        } else {
            message.channel.send('Invalid Permission, let me change that :D');
            message.member.roles.add('817847820152995921').catch(console.error);
        };
    },
};