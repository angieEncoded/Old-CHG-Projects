const moment = require('moment');

            module.exports = {
                cronstring: '* * * * *',
                execute(client, logger) {
                    try { client.guilds.get("639821456481452032"); } catch(e) {}
                    
                    const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];
                    const halfHourClocks = ['🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧'];
                    var timeChannel = client.guilds.get("639821456481452032").channels.find(ch => ch.id === "640536108429606932");
                    
                    var now = moment.tz('America/New_York');
                    
                    var minute = parseInt(now.format('m'));
                    
                    var hour = parseInt(now.format('h'));
                    
                    var clockEmoji = minute < 30 ? clocks[hour - 1] : halfHourClocks[hour - 1];
                    
                    timeChannel.setName(clockEmoji + " " + now.format('h:mm A zz'));
                }
            }