const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video / song from youtube',
    async execute(message, args) {
        let voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.reply('You need to be in a channel to execute this command');
        if(!message.member.permissions.has('CONNECT')) return message.reply('You don\'t have the correct permissions');
        if(!message.member.permissions.has('SPEAK')) return message.reply('You don\'t have the correct permissions');
        if(!args.length) return message.reply('You need to send a video to play!');

        const validURL = (str) => {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\=\/]))?/;
            if(!regex.test(str)) {
                return false;
            } else {
                return true;
            };
        };
        
        if(validURL(args[0])) {
            message.channel.send('You entered a correct url!');
            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});

            connection.play(stream, {seek: 0, volume: 1}).on('finish', () => {
                voiceChannel.leave();
                message.channel.send('Leaving channel ⏮');
            });

            await message.reply(`▶ Now playing your link!🎵`);

            return;
        };

        const connection = await voiceChannel.join();

        let videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        };
        
        let video = await videoFinder(args.join(' '));

        if(video){
            let stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1}).on('finish', () => {
                voiceChannel.leave();
            });

            await message.reply(`▶ Now Playing 🎵 ***${video.title}***`);
        } else {
            message.reply('❌ No video results found.');
        };
    },
};