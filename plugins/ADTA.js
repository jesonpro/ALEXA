const Amazone = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('system_stats');

    Amazone.addCommand({pattern: 'freedata', fromMe: true, }, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
 *🧪EHI  PANEL*
*────────────*
  *────────*

*╭─「  මොනවද මේ EHI 🤔」*
│🛡️.help
╰──────►
*╭─「 කොහොමද  CONNECT කරන්නෙ😐」*
│🛡️.connection 
╰───────►
 *╭─「  INJECTOR APK🤩」*
│🛡️.iapk
╰──────►

*╭─「  WHATSAPP ALL EHI」*
│🔴 .WEHI
╰──────►
*╭─「 YOUTUBE ALL EHI」*
│⚪ .YEHI
╰──────►
*╭─「  FACEBOOK ALL EHI」*
│🔵 .FEHI
╰──────►
*╭─「  ZOOM ALL EHI」*
│⚫ .ZEHI
╰──────►
*╭─「  TWITTER  EHI」*
│🔘 .TEHI
╰──────►

©️ɴᴛʀᴏ-ᴛᴇᴇɴᴜ

`}) 

 }));
