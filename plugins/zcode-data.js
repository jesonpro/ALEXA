const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const tenu = require('../hatzu');
const Language = require('../language');
let tn = Config.WORKTYPE == 'public' ? false : true
const XN_UP = "*Please Wait Little Bit Im Uploding Your Ehi⏱*"
const DESC = "Free data( EHI ලැයිස්තුව)"
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*Downloading Your EHI📑*"
const TXN_D = "*💎Downloading Your APK*"
const TXN_UP = "*Uploading Your APK🔅*"
const DW_D = "*🔴Downloading DIALOG Whatsapp  EHI*"
const HW_D = "*⚪Downloading HUTCH Whatsapp  EHI*"
const MF_D = "*🔵Downloading MOBITEL  Facebook  EHI*"

Neotro.addCommand({pattern: 'apk ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.AMAZONE_SITE}`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));










Neotro.addCommand({pattern: 'MTEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1EJgeuH76Shy1zH2x_VD9eRUxCSVneMzE/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1UKe9cmEOXar0-H7oEU2vpmxtEIPr6i4H/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1L5_Vs3tgHHCJzpM1W_a5buHjrkC2Do7F/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔵🔵FACEBOOK ===================================================================================
Neotro.addCommand({pattern: 'MFEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1nmCu6d3zNqtQiPRCH1I9IaGLW3vdkYjR/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1w6RvAnxMOeG7FAF8hUJSzcdxKJyD1uF2/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1OpE-Nq7cHpI6eZKdHC4O__FQkk_hhdeh/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴⚪🔵ALL SIM===================================================================================
//===========🔴⚪🔵ALL Whatsapp ===================================================================================
Neotro.addCommand({pattern: 'allwehi ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1xZCSOyij1dhj5GD4yOHJuE1WJ2lvzGye/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}11OpOzQivKK6Ju5IplTxAbquHGqSbanOa/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1SmR---p_FANc-w-es_G8ozgecCeQqk-D/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴⚪🔵ALL Facebook  ===================================================================================
Neotro.addCommand({pattern: 'allfehi ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1Wqf4tty51eUFSdlb7HEICBGEAIMhNjrd/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1530gdvhbeC9yVT7w3YIySmILOpJZYC7E/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1Wqf4tty51eUFSdlb7HEICBGEAIMhNjrd/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴⚪🔵ALL Youtube  ===================================================================================
Neotro.addCommand({pattern: 'allyehi ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1xOCq4iMSqQmPyusBtaESP4GMDdx8eD9C/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}13MAkoxxT07MNoJOzfyH_r1pwZX7zWuTR/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1IxesWFDJa0mpHts7BsvFgHy7nfCxjE2M/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴⚪🔵ALL Zoom ===================================================================================
Neotro.addCommand({pattern: 'allzehi ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1P2lyvo9bT9TnHHdo3cPBnGooVVuDewMs/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1OPl-rOQyprgvQJnHLB2nIok2RZUAsZpx/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}15qGgr6DKczEaurR3z4AO0bVikQ2KVyjU/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));
