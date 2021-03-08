module.exports = async (client) => {
    let s = 1000;
    let m = s * 60;
    let guild = client.guilds.cache.get('816737977563611197');
    setInterval(() => {
        let memberCount = guild.memberCount;
        let channel = guild.channels.cache.get('818492011157389312');
        channel.setName(`🌀┇Total Members: ${memberCount.toLocaleString()}`);
        console.log(`Updating Member Count!`.bgWhite.red)
    }, 1 * m);
}