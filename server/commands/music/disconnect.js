module.exports = {
    name: 'disconnect',
    description: 'Stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        
        if(!voiceChannel) return message.reply('You need to be in a voice channel to stop the music!');

        await voiceChannel.leave();
        await message.channel.send('💥Leaving channel 💤');
    }
}