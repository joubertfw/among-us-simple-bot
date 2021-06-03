module.exports = {
    name: 'muteall',
    description: 'Comando para desativar som de todos da sala',
    execute(client, message, args, Discord, db){
        let author = message.member;
        
        if(!author.voice.channel) return;
        // if(!author.voice.channel) return message.channel.send(new Discord.MessageEmbed().setColor('RED').addField('Erro', 'Entre em um canal de voz e clame-o', true));
        // if(!author.voice.channel) return message.channel.send(new Discord.MessageEmbed().setColor('RED').addField('Erro', 'Entre em um canal de voz e clame-o', true));

        (async () => {
            let master = await db.get('master');
            // if(master != author.id) return message.channel.send(new Discord.MessageEmbed().setColor('RED').addField('Erro', 'Você não é administrador', true));
            if(master != author.id) return;

            try {
                author.voice.channel.members.forEach(member => {
                    if(member.id != author.id)
                        member.voice.setMute(true);
                });
                await db.set('serverMuted', true);
            }
            catch (e) {
                console.log(e);
            }
        })();
    }
}