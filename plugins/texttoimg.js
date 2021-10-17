const Neotro = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const hatzu = require('../hatzu');
const config = require('../Config/config');
const NEED = "*🍭YOU MUST TYPE SOME WORDS*"
const desc = "Text to image Pack";
let tn = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({ pattern: '3dwater ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_T}3d-underwater-text?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
Neotro.addCommand({ pattern: 'lcube ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_T}futuristic-technology?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
Neotro.addCommand({ pattern: 'dwings ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_T}black-white-bear-mascot?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
Neotro.addCommand({ pattern: 'blogo ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_T}neon-devil-wings?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
//=====================================================================================
//====================================================================================

Neotro.addCommand({ pattern: 'v ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_P}?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
Neotro.addCommand({ pattern: 'v ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_P}?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
Neotro.addCommand({ pattern: 'v ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_P}?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));
Neotro.addCommand({ pattern: 'v ?(.*)', fromMe: tn,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.HLOCK}${config.SUP_HEROKU}${config.ENCRYPTION}${config.TOXIC_P}?teks=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

