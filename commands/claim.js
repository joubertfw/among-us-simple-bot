module.exports = {
    name: 'claim',
    description: 'Comando para se tornar administrador',
    execute(client, message, args, Discord, db){
        let author = message.author;
        (async () => {
            let master = await db.get('master');

            if(master != undefined) return message.channel.send(new Discord.MessageEmbed().setColor('RED').addField('Erro', 'Já existe um administrador', true));

            await db.set('master', author.id);
            await db.set('mastername', author.username);
            await db.set('serverMuted', false);
            await db.set('masterChannel', message.member.voice.channelID);
            return message.channel.send(new Discord.MessageEmbed().setColor('GREEN').addField('Sucesso', `${author.username} é o novo administrador`, true));
        })();
    }
}