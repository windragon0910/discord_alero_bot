module.exports = {
    name: 'ping',
    description: 'This is a Ping command!',
    execute(message, args) {
        message.channel.send('🏓 Pong!');
    },
};