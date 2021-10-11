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
const DF_D = "*🔴Downloading DIALOG Facebook  EHI*"
const DY_D = "*🔴Downloading DIALOG Youtube  EHI*"
const DZ_D = "*🔴Downloading DIALOG Zoom EHI*"
const HW_D = "*⚪Downloading HUTCH Whatsapp  EHI*"
const HF_D = "*⚪Downloading HUTCH Facebook  EHI*"
const HY_D = "*⚪Downloading HUTCH Youtube  EHI*"
const MF_D = "*🔵Downloading MOBITEL  Facebook  EHI*"
const MT_D = "*🔵Downloading MOBITEL  TWITTER   EHI*"

Neotro.addCommand({pattern: 'apkhttp ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}11tZut6v6qNYUpAGup-YTbdO7ozlxJWIs/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
//===========🔴🔴DIALOG===================================================================================
//===========🔴🔴Whatsapp ===================================================================================
Neotro.addCommand({pattern: 'DFEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DF_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1Q8JbTeO4hK7YA2EAab90mkhbVK-sR6Ku/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1Ygl1OAv8S2-uTGnV7ltCrSMHTn_EkWgc/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1rgTr2_g3DTn9GpY1gLRkeR7jLycViSwq/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

 //===========🔴🔴FACEBOOK ===================================================================================
Neotro.addCommand({pattern: 'DWEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DW_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1IMN0f--iSeYFAMhoap9ppt8CH0vkbleB/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1lGjvRSEi--dj6Ga1AaH9j1_TMtOY4g8t/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1sB1LILop-1hWxTCl-IvjCPYdUm3Xf1SE/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴🔴YOUTUBE ===================================================================================
Neotro.addCommand({pattern: 'DYEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DY_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1VRoNMxDMkcefdZVrBqvsBD3OQDFh6Rlk/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1UD9BignmA8Wb28dQe5wyH40RL8AraBc-/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1fehOc4BHnLiLk8p3wObJqpN3dZzSJLQ0/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴🔴ZOOM===================================================================================
Neotro.addCommand({pattern: 'DZEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DZ_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1ZFxG_r8s3IOM7Rop8u7h4m1ENKHxM4Gq/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1E6yxmUX1934gfKjp8RGZ8dhbd3gzvYoh/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1MfoPvSA0KCL7F0yPfopNXmz19kezy190/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========⚪⚪HUTCH===================================================================================
//===========⚪⚪Whatsapp ===================================================================================

Neotro.addCommand({pattern: 'HWEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HW_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1lYzOBKF95CiRSFQkgSFfx4a3E-2mmjl-/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}13YkOyiG5TTHD3K05jtB5or9C1DKUZkKN/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1VRoNMxDMkcefdZVrBqvsBD3OQDFh6Rlk/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========⚪⚪Facebook ===================================================================================
Neotro.addCommand({pattern: 'HFEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HF_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1AiNs81Bey4u5y_XLskpQi1LGS3JgcJzv/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1VkZwiJU6qrpAa5-fMUEiL9FnmLd6vJ6Q/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1Opq-8-7UfqeWsg_q5B-dx58LGK64vOCo/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));
//===========⚪⚪Youtube ===================================================================================
Neotro.addCommand({pattern: 'HYEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`https${tenu.DRIVECOM}1ZoSLLlqTAclWxGtgF8tQ9_9h7sm0CPLt/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1DyMPc80oR3SNLrqLBIrCaj2N555CRvAF/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`https${tenu.DRIVECOM}1wQdfMYlj_M6RY1OEbkAFsQdUJEFUhZV3/view`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔵🔵MOBITEL ===================================================================================
//===========🔵🔵Twitter ===================================================================================
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
