module.exports = {
    name: "clear",
    description: "Clear messages! Required permission: Manage Messages",
    async execute(message, args) {
        if(message.member.permissions.has("MANAGE_MESSAGES")){  
            if(!args[0]) return message.reply("Please, enter the amount of messages that you want to clear!");
            if(isNaN(args[0])) return message.reply("Please enter a real number!");
            if(args[0] < 1) return message.reply("You must delete at least one message!");

            if(args[0] <= 100) {
                await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                    message.channel.bulkDelete(messages);
                });
            } else {
                message.reply("The library discord.js does not allow deleting more than 100 messages, try again with 100 messages.");
            };
        } else {
            message.reply('You don\'t have permission to delete messsages.');
        };
    },
};