const amazone = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
const YTV_DESC = "Youtube Video Downloader V2 ."
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*🎭Downloading Your Video...*"
const YTV_UP = "*🚀Uploading Your Video...*"
const NO_RESULT = "*🌀can't Find Anything...*"

    amazone.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true, deleteCommand: false, desc: Lang.MP4,  deleteCommand: false}, async (message, match) => {
        const link = match[1]
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
        await axios
          .get(`https://bx-${tenu.ON}.herokuapp.com/api/download/tiktok?url=&apikey=${tenu.CCN}`)
          .then(async (response) => {
            const {
              vid_wm,
            } = response.data.video_URL
            const videoBuffer = await axios.get(vid_wm, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.document, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
//=====================================================================================
//=====================================================================================
