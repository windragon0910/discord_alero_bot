module.exports = {
    name: 'unmute',
    description: 'This command unmutes a member',
    execute (message, args) {
        if(message.member.permissions.has("MANAGE_ROLES")){
            const user = message.mentions.users.first();
            if(user) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let member = message.guild.member(user);
                if(member) {
                    member.roles.remove(muteRole.id);
                    member.roles.add(mainRole.id);

                    message.channel.send(`<@${member.user.id}> has been unmuted!`);
                };
            } else {
                message.reply('I can\'t find that member!');
            };

        } else {
            message.reply('You don\'t have the required permission.');
        };
    },
};