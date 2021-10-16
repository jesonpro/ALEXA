/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Amazone = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const os = require('os');

let wk = Config.WORKTYPE == 'public' ? false : true
  
 Amazone.addCommand({pattern: 'rn ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTIONS})

     }));
  
Amazone.addCommand({pattern: '1rn ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/metalic-gold?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image {caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));

  
Amazone.addCommand({pattern: '2rn ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/teks-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.jpg})

    }));
  
  Amazone.addCommand({pattern: 'romantic ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'burnp ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/burn-paper?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
   Amazone.addCommand({pattern: 'ccup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'cofee ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'grass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-grass?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'hwood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'bwood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wooden-boards?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'uwater ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'yrose ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/golden-roses?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'nsummer ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/summer-nature-bg?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'ufall ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-fall?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'gneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/neon-glow?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'ucube ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-cube?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'gavatar ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/gradient-avatar?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'rainbow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/glow-rainbow?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'nsky ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/write-stars?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'fur ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/fur-effect?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
   Amazone.addCommand({pattern: 'crisp ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/crisp-chrome?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'embro ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/embroidery-text?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'uweb ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-web-matrix?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'gleave ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/green-leaves?teks=${topText}&font=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'bfly ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/butter-fly?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'zwood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wooden-3d-black?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'nlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/neon-lights?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'scary ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/text-on-scary?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'blwood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/woodblock-effect?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS})

    }));
  
  Amazone.addCommand({pattern: 'xtrypo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/smoke-typography?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'andy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/sweet-candy?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CAPTIONS})

    }));
  
  Amazone.addCommand({pattern: 'uflower ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-orchids?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'flower ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/flower-typography?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'partyneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/party-neon?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'dmetal ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/dark-metal?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'gocs ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'zgrafiti ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'fbattle ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/battlefield-4-rising?teks=${topText}&teks2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'turi ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/futuristic-technology?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'ubeach ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/on-the-beach?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'zwater ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));

if (Config.WORKTYPE == 'public') { 

 Amazone.addCommand({pattern: 'naruto ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
 Amazone.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
Amazone.addCommand({pattern: 'metalic ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/metalic-gold?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));

  
Amazone.addCommand({pattern: 'cup ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/teks-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'romantic ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'burnp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/burn-paper?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
   Amazone.addCommand({pattern: 'ccup ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'cofee ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'grass ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-grass?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'hwood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'bwood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wooden-boards?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'uwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
   
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'yrose ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/golden-roses?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'nsummer ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/summer-nature-bg?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'ufall ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-fall?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'gneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/neon-glow?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'ucube ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-cube?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'gavatar ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/gradient-avatar?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'rainbow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/glow-rainbow?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'nsky ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/write-stars?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'fur ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/fur-effect?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
   Amazone.addCommand({pattern: 'crisp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/crisp-chrome?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'embro ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/embroidery-text?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'uweb ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-web-matrix?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'gleave ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/green-leaves?teks=${topText}&font=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'bfly ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/butter-fly?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'zwood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/wooden-3d-black?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'nlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/neon-lights?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'scary ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/text-on-scary?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'blwood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/woodblock-effect?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'xtrypo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/smoke-typography?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'andy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/sweet-candy?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'uflower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/under-orchids?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'flower ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/flower-typography?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'partyneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/party-neon?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'dmetal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/dark-metal?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'gocs ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/csgo?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'zgrafiti ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/grafiti-text-cover?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'fbattle ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/photoxy/battlefield-4-rising?teks=${topText}&teks2=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'devil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'turi ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/futuristic-technology?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
  
  Amazone.addCommand({pattern: 'ubeach ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
  var topText, bottomText;
    if (match[1].includes('/')) {
       var split = match[1].split('/');
       bottomText = split[1];
       topText = split[0];
}

  var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/on-the-beach?teks=${topText}&background=${bottomText}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

     }));
  
  Amazone.addCommand({pattern: 'zwater ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CAPTIONS, thumbnail: Buffer.from(webimage.data)})

    }));
}

 
