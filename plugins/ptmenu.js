

const amazone = require('../events');
const {
    MessageType,
    GroupSettingChange,
    Mimetype,
    MessageOptions
} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');

let tk = Config.WORKTYPE == 'public' ? false: true

amazone.addCommand({ pattern: 'ol paper', fromMe: tk, desc: 'down;load passpepr'
}, (async (message, match) => {
        // send a list message!
        const rows = [{
                 title: '  🗃️2015 O/L Main Subjects Papers🗃️ ', description: "  《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2015```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2015```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2015```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2015```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2015```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2015```  ", rowId: "rowid1"
           },
           {
                 title: '  🗃️2016 O/L Main Subjects Papers🗃️ ', description: "  《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2016```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2016```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2016```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2016```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2016```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2016```  ", rowId: "rowid2"
            },     
            {  
                 title: '  🗃️2017 O/L Main Subjects Papers🗃️ ', description: "  《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2017```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2017```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2017```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2017```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2017```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2017```  ", rowId: "rowid3"
            },
            {
                  title: '  🗃️2018 O/L Main Subjects Papers🗃️ ', description: "  《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2018```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2018```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2018```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2018```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2018```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2018```  ", rowId: "rowid4"
            },
                        {
                  title: '  🗃️2019 O/L Main Subjects Papers🗃️ ', description: "  《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2019```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2019```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2019```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2019```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2019```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2019```  ", rowId: "rowid5"
            }]

        const sections = [{
            title: "O/L PASS PAPER MENU", rows: rows
        }]

        const button = {
            buttonText: 'Click Me',
            description: "2015 සිට  2019 දක්වා වූ පසුගිය වසරවල paast papers",
            sections: sections,
            listType: 1
        }

        await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));
