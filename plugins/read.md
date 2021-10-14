const Amozon = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('amazone');


Amazon.addCommand({pattern: '', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
    var respoimage = await axios.get(`${Config.MENU_LOGO}`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*◁○Neutro Logopack ○▷*

 
`}) 

 }));
