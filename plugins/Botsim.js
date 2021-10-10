/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Heroku = require('heroku-client');
const got = require('got');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

if (Config.AI_BOT == 'true') {
	if (Config.WORKTYPE == 'private') {
		Neotro.addCommand({pattern: 'bot ?(.*)', fromMe: true, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*👩‍🦰 ' + Lang.BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
	
	else if (Config.WORKTYPE == 'public') {
		Neotro.addCommand({pattern: 'bot ?(.*)', fromMe: false, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*👩‍🦰 ' + Lang.BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
}

else if (Config.AI_BOT == 'false') {
	if (Config.WORKTYPE == 'private') {
		Neotro.addCommand({pattern: 'bot ?(.*)', fromMe: true, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v2/?text=${match[1]}&lang=si&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n👩‍🦰 ' + Lang.BOT + Lang.NOT_AVAILABLE , MessageType.text);
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
	
	else if (Config.WORKTYPE == 'public') {
		Neotro.addCommand({pattern: 'bot ?(.*)', fromMe: false, desc: Lang.BOT_DESC}, async (message, match) => {
			if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
			const url = `https://api.simsimi.net/v2/?text=${match[1]}&lc=en&cf=true`;
			try {
				const response = await got(url);
				const json = JSON.parse(response.body);
			if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n👩‍🦰 ' + Lang.BOT + Lang.NOT_AVAILABLE , MessageType.text,{quoted: message.data});
			} catch {
				return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
			}
		});
	}
}

Neotro.addCommand({pattern: 'adon ?(.*)', fromMe: true, desc: Lang.ADON_DESC}, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.ADON_MISSING, MessageType.text);
    if ((varKey = match[1].split(':')[0]) && (varValue = match[1].split(':')[1])) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                [varKey]: varValue
            }
        }).then(async (app) => {
            await message.client.sendMessage(message.jid,Lang.ADON_SUCCESS.format(varKey, varValue), MessageType.text);
        });
    } else {
        await message.client.sendMessage(message.jid,Lang.ADON_INVALID, MessageType.text);
    }
}));
