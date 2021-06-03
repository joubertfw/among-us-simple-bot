module.exports = {
    name: 'unmuteall',
    description: 'Comando para ativar som de todos da sala',
    execute(client, message, args, Discord, db){
        let author = message.member;

        // if(!author.voice.channel && message.member != null) return message.channel.send(new Discord.MessageEmbed().setColor('RED').addField('Erro', 'Entre em um canal de voz e clame-o', true));
        if(!author.voice.channel) return;

        (async () => {
            let master = await db.get('master');
            // if(master != author.id && message.member != null) return message.channel.send(new Discord.MessageEmbed().setColor('RED').addField('Erro', 'Você não é administrador', true));
            if(master != author.id) return;

            try {
                author.voice.channel.members.forEach(member => {
                    if(member.id != author.id)
                        member.voice.setMute(false);
                });
                await db.set('serverMuted', false);
            }
            catch (e) {
                console.log(e);
            }
        })();
    }
}