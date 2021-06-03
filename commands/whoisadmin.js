module.exports = {
    name: 'whoisadmin',
    description: 'Comando ver administrador',
    execute(client, message, args, Discord, db){
        (async () => {
            let masterName = await db.get('mastername');
            if (masterName == undefined) masterName = 'Sem admin';
            return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').addField('Comando', `Admin: ${masterName}`, true));
        })();

    }
}