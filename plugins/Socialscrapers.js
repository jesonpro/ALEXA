const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
const ALang = Language.getString('scrapers');
const capt = "🎭 *NeotroX* 🕊"

if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({ pattern: 'pinsta ?(.*)', fromMe: false, desc: Lang.PINSTA}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {
								caption: Config.BOT_NAME,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

Asena.addCommand({ pattern: 'vinsta ?(.*)', fromMe: false, desc: Lang.VINSTA }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: Config.BOT_NAME,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

Asena.addCommand({ pattern: 'pinsta ?(.*)', fromMe: true, dontAddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {
								caption: Config.BOT_NAME,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

Asena.addCommand({ pattern: 'vinsta ?(.*)', fromMe: true, dontAddCommandList:true }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: Config.BOT_NAME,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

} /* public close*/

else if (Config.WORKTYPE == 'private') {
	
	Asena.addCommand({ pattern: 'pinsta ?(.*)', fromMe: true, desc: Lang.PINSTA }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {
								caption: Config.BOT_NAME,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

Asena.addCommand({ pattern: 'vinsta ?(.*)', fromMe: true, desc: Lang.VINSTA }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

				await axios
					.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=Ikyy69`)
					.then(async(response) => {
						const {
							linkdownload,
							status,
						} = response.data

						const linkdata = await axios.get(linkdownload, {
							responseType: 'arraybuffer'
						})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
								caption: Config.BOT_NAME,
						})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

} /* private close*/
