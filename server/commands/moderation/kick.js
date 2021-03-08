module.exports = {
    name: "kick",
    description: "This command kicks a member",
    execute(message, args) {
        const member = message.mentions.users.first();
        if(message.member.permissions.has("KICK_MEMBERS")) {
            if(args[0]) {
                
                if(member) {
                    const memberToKick = message.guild.member(member);
                    memberToKick
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                        message.reply(`Successfully kicked \`${member.tag}\``);
                    })
                    .catch(err => {
                        message.reply('I can\'t kick this member!');
                        console.error(err);
                    });
                    
                } else {
                    message.reply('This user isn\'t in this guild!');
                }   
            } else {
                message.reply('You didn\'t mention the user to kick!');
            };
        } else {
            message.reply('You don\'t have the permission to kick members!');
        };
    },
};