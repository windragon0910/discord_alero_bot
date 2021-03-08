const ms = require('ms');
module.exports = {
    name: 'mute',
    description: 'This command mutes a member',
    execute (message, args) {
        if(message.member.permissions.has("MANAGE_ROLES")){
            const user = message.mentions.users.first();
            if(user) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let member = message.guild.member(user);
                if(!args[1]) {
                    member.roles.remove(mainRole.id);
                    member.roles.add(muteRole.id);
                    message.channel.send(`<@${member.user.id}> has been muted!`);
                    return;
                };
                member.roles.remove(mainRole.id);
                member.roles.add(muteRole.id);
                message.channel.send(`<@${member.user.id}> has been muted for ${ms(ms(args[1]))}!`);

                setTimeout(function() {
                    member.roles.add(mainRole.id);
                    member.roles.remove(muteRole.id);
                    message.channel.send(`<@${member.user.id}> has been unmuted!`);
                }, ms(args[1]));
            } else {
                message.reply('I can\'t find that member!');
            };

        } else {
            message.reply('You don\'t have the required permission.');
        };
    },
};