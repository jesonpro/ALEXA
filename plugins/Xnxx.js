/* Copyright (C) 2021 RAMIYA - Alexa Team.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RAMIYA - Alexa Team
*/
// 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖

const Ramiya = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Xdesc = "*XNXX වීඩියෝ බාගත කරයි.*"
const YT_NEED = "😏 *Enter XNXX URL*\n 🎥 *Example* : _.xnx https://www.xnxx.com/video-zgvf7ee/home_fuck_"
const DWLOAD_VID = "🤫 *Downloading Your Video...*"
const YTV_UP = "🔞 *Uploading Your Video...*"
const NO_RESULT = "*🤯 Oops Video Not Found...*"
const credit = "*👩‍🦰 Powered BY Amazone*" 
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false

Ramiya.addCommand({ pattern: 'xnx ?(.*)', fromMe: tp1, desc: Xdesc, deleteCommand: false}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text); 
		
		var url = `${Config.VID1}xnxx?url=${link}&apikey=alexabot`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {title,duration,} = response.data.result
			const {high,thumbSlide,} = response.data.result.files
    
			var time = duration/60
            const videoBuffer = await axios.get(high, {responseType: 'arraybuffer'})
			
            const vcap = Config.BOT_NAME+"\n\n*✽ Title* : "+title+"\n *✽Time :* "+time+" Minutes\n\n"+credit
			
			var thumbdata = thumbSlide
			var respoimage = await axios.get(`${thumbdata}`, { responseType: 'arraybuffer' })
			const thumbimg  = Buffer.from(respoimage.data)
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption: vcap, thumbnail: thumbimg, quoted: message.data});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
	
Ramiya.addCommand({ pattern: 'xnx ?(.*)', fromMe: tp2, dontAddCommandList:true, deleteCommand: false}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text); 
		
		var url = `${Config.VID1}xnxx?url=${link}&apikey=alexabot`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {title,duration,} = response.data.result
			const {high,thumbSlide,} = response.data.result.files
    
			var time = duration/60
            const videoBuffer = await axios.get(high, {responseType: 'arraybuffer'})
			
            const vcap = Config.BOT_NAME+"\n\n*✽ Title* : "+title+"\n *✽Time :* "+time+" Minutes\n\n"+credit
			
			var thumbdata = thumbSlide
			var respoimage = await axios.get(`${thumbdata}`, { responseType: 'arraybuffer' })
			const thumbimg  = Buffer.from(respoimage.data)
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption: vcap, thumbnail: thumbimg, quoted: message.data});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
