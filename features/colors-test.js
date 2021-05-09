// This is a test of the colors module for each color and background.
const colors = require('colors');

module.exports = (client, instance) => {
    client.on('message', (message) => {
        if(message.author.id == process.env.BOTOWNERID && message.content === "!test colors") {
        console.log("bgRed".bgRed.black + "bgGreen".bgGreen.black + "bgYellow".bgYellow.black + "bgBlue".bgBlue.black + "bgMagenta".bgMagenta.black + "bgCyan".bgCyan.black + "bgWhite".bgWhite.black + "bgBlack".bgBlack.white);
        console.log("Red".red + "Blue".blue + "Magenta".magenta + "Yellow".yellow + "White".white + "Black".black.bgWhite + "Cyan".cyan + "Green".green);
        };
    });
    console.log('Colors-Test Feature Loaded'.bgGreen.black);
};

module.exports.config = {
    displayName: 'Log-Messages',
};