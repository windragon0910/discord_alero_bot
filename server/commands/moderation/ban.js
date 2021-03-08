module.exports = {
    name: "ban",
    description: "This command bans a member",
    execute(message, args) {
        const member = message.mentions.users.first();
        if(message.member.permissions.has("BAN_MEMBERS")) {
            if(args[0]) {
                
                if(member) {
                    const memberToBan = message.guild.member(member);
                    memberToBan
                    .ban( { reason: 'Optional reason that will display in the bans' })
                    .then(() => {
                        message.reply(`Successfully kicked ${member.tag}`);
                    })
                    .catch(err => {
                        message.reply('I can\'t ban this member!');
                        console.error(err);
                    });
                    
                } else {
                    message.reply('This user isn\'t in this guild!');
                }   
            } else {
                message.reply('You didn\'t mention the user to ban!');
            };
        } else {
            message.reply('You don\'t have the permission to ban members!');
        };
    },
};