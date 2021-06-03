module.exports = (Discord, client, db, oldMember, newMember) => {
    (async () => {
        let master = await db.get('master');
        let masterChannel = await db.get('masterChannel');
        let serverMuted = await db.get('serverMuted');
        if(master == oldMember.id)
        {
            if(newMember.channelID == null){
                const command = client.commands.get("unmuteall");
                if(command) command.execute(client, oldMember, '', Discord, db);
                return;
            }
            if(newMember.selfMute){
                const command = client.commands.get("muteall");
                if(command) command.execute(client, newMember, '', Discord, db);
            }
            else{
                const command = client.commands.get("unmuteall");
                if(command) command.execute(client, newMember, '', Discord, db);
            }
        }
        else{
            let channelId = await db.get('masterChannel');

            if(serverMuted && newMember.member.voice.channelID == channelId){
                // newMember.member.voice.setMute(true);
            }
        }
    })();
}