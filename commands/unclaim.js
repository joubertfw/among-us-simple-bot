module.exports = {
    name: 'unclaim',
    description: 'Comando deixar de ser administrador',
    execute(client, message, args, Discord, db){
        let author = message.author;
        (async () => {
            let master = await db.get('master');

            if(master != author.id) return message.channel.send(new Discord.MessageEmbed().setColor('RED').addField('Erro', 'Você não é administrador', true));
            await db.clear();
            return message.channel.send(new Discord.MessageEmbed().setColor('GREEN').addField('Sucesso', 'Posição de administrador vazia', true));
        })();
    }
}