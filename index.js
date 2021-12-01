const {
	WAConnection,
	Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    MessageType,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime
} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const { exec } = require('child_process')
const { fetchJson, color, bgcolor } = require('./lib/fetcher')
const { y2mate } = require('./lib/y2mate');
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { wikiSearch } = require('./lib/wiki.js')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, success, close } = require('./lib/function')

const fetch = require('node-fetch')
const get = require('got')
const speednye = require('performance-now')
const fs = require('fs')
const os = require('os')
const qrcode = require('qrcode-terminal')
const brainly = require('brainly-scraper')
const moment = require('moment-timezone')
const welkom = JSON.parse(fs.readFileSync('./lib/group/welcome.json'))
const yts = require('yt-search')
const request = require('request')
const pebz = new WAConnection()
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const {
	OwnerNumber,
	prefix,
	lol
} = require('./lib/config.json')

fake = '༺ HanBotz ༻\nStatus : Online'
let gambar = "" || fs.readFileSync('./media/gambar/biasa.png')
self = false
blocked = []

// SYSTEM QRCODE
pebz.ReconnectMode = 2
pebz.logger.level = 'warn'
pebz.version = [2, 2143, 8]
pebz.browserDescription = ['Hanz', 'Safari', '3.0']
console.log(start)
console.log('>', '[',color('Berhasil Tersambung Ke Perangkat','lime'),']','Hanz')
pebz.on('qr', qr => {
qrcode.generate(qr, { small : true })
console.log(color(`[ BOT ] SCAN QR DI ATAS BRO`,'white'))
})

pebz.on('credentials-updated', () => {
	const authinfo = pebz.base64EncodedAuthInfo()
	console.log('session has bim save')
	fs.writeFileSync('./pebz.json', JSON.stringify(authinfo, null, '\t'))
})
   fs.existsSync('./pebz.json') && pebz.loadAuthInfo('./pebz.json')
   pebz.connect();
 
   pebz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	}) 
	
	pebz.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			pebz.sendMessage(call, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!', MessageType.text)
			.then(() => pebz.blockUser(call, "add"))
			}, 100);
		})
		

pebz.on('group-participants-update', async (chat) => {
		try {
			const mdata = await pebz.groupMetadata(chat.jid)
			console.log(chat)
			if (chat.action == 'add') {
				num = chat.participants[0]
				try {
					ppimg = await pebz.getProfilePicture(`${chat.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Hallo* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				pebz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (chat.action == 'remove') {
				num = chat.participants[0]
				try {
					ppimg = await pebz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Sayonara* @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				pebz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
		
		
		
	    pebz.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.blocked
			global.prefix
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wita = moment.tz("Asia/Makassar").format("HH:mm:ss")
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
           
            const botNumber = pebz.user.jid
			const ownerNumber = ['6285731855426@s.whatsapp.net',`${OwnerNumber}@s.whatsapp.net`]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = pebz.contacts[sender] != undefined ? pebz.contacts[sender].vname || pebz.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await pebz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const q = args.join(' ')
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isWelcome = isGroup ? welkom.includes(from):false
			const isOwner = ownerNumber.includes(sender)
			const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isAntiLink = isGroup ? _antilink.includes(from) : false
	    const isNsfw = isGroup ? nsfww.includes(from) : false

const sendFile = async (medya, namefile, capti, tag, vn) => {
  baper = await getBuffer(medya)
  mimi = ''
  if (namefile.includes('m4a')){
  pebz.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
  }
  if (namefile.includes('mp4')){
  pebz.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
  }
  if (namefile.includes('gif')){
  pebz.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
  } 
  if (namefile.includes('png')){
  pebz.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
  }
  
  if (namefile.includes('webp')){
  pebz.sendMessage(from, baper, sticker, {quoted: tag})
  } else {
  kobe = namefile.split(`.`)[1]
  pebz.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
  }
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
pebz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
pebz.sendMessage(from, hasil, type, options).catch(e => {
pebz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media!!_')
console.log(e)
})
})
})
})
}

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				pebz.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				pebz.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? pebz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : pebz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			       const fakethumb = (teks, yes) => {
            pebz.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/gambar/biasa.png'),quoted:mek,caption:yes})
            } 
			const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './trash' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './trash' + names + '.png'
                    let palak = './trash' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        pebz.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
			const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(from, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('kelar');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    pebz.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
            const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, './stik' + names + '.png', async function () {
                console.log('Done Kak Han');
                let filess = './stik' + names + '.png'
                let asw = './stik' + names + '.webp'
                exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                let media = fs.readFileSync(asw)
                pebz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                fs.unlinkSync(filess)
                fs.unlinkSync(asw)
                });
                });
                }			


        
	        mess = {
				wait: 'tunggu sebentar...',
				success: 'sukses ✓“',
				notxt: 'textnya mana ?',
				error: {
					stick: 'gagal saat konvensi gambar ke sticker',
					Iv: 'link nya mokad :v'
				},
				only: {
					group: 'Khusus Grup!',
					ownerB: 'Khusus Owner Bot',
					admin: 'Khusus Admin grup'
				}
			}
		   const lordpeb = {
	       key : {
           participant : '0@s.whatsapp.net'
           },
           message: {
           liveLocationMessage: {
           caption: `${pushname} ${pushname}`,
           jpegThumbnail: gambar
           }
           }
           }
        const fkontak = { 
        key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo Kak ${pushname}\nNih kak nomer ownerku ^_^`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': gambar}}}                   		
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
            }
        pebz.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: fkontak
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        pebz.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await pebz.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        pebz.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: fkontak,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return pebz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "GoodNight🌃";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "GoodEvening🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "GoodEvening🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "GoodAfternoon☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "GoodMoorning🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "GoodNight🌃";
    }
    function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}			
			colors = ['red','white','black','blue','yellow','green']
	     	const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
           const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mPEBSELF\x1b[1;37m]', color(pushname), 'Menggunakan Fitur', color(command), 'args :', color(args.length))
        	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mPEBSELF\x1b[1;37m]', color(pushname), 'Memakai Fitur', color(command), 'DI Group', color(groupName), 'args :', color(args.length))        	        	
            if (self === true && !isOwner && isCmd) return
          
           
             switch(command) {
             case 'menu':
             case 'help':
             uptime = process.uptime()            
		     const hiya = await fetchJson('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta', {method:'get'})
		     var p = '```'
		    const tod =`      
${p}> ${ucapanWaktu} ${pushname}${p}		    
${p}> Prefix :『 ${prefix} 』${p}
${p}> Runtime : ${kyun(uptime)}${p}`
tod2 =`
*𝗠𝗘𝗡𝗨*
${p}• ${prefix}attp <text>${p}
${p}• ${prefix}nulis <text>${p}
${p}• ${prefix}play <query>${p}
${p}• ${prefix}wiki <query>${p}
${p}• ${prefix}toimg <replysticker>${p}
${p}• ${prefix}sticker <replyimg>${p}
${p}• ${prefix}pinterest <query>${p}
${p}️• ${prefix}imgsearch <query>${p}

*𝗚𝗥𝗢𝗨𝗣*
${p}• ${prefix}linkgroup${p}
${p}• ${prefix}add <nomer[62]>${p}
${p}• ${prefix}kick <tag>${p}
${p}• ${prefix}demote <tag>${p}
${p}• ${prefix}promote <tag>${p}
${p}• ${prefix}setname <text>${p}
${p}• ${prefix}setdesc <text>${p}
${p}• ${prefix}open|close${p}

*𝗚𝗔𝗕𝗨𝗧*
${p}• ${prefix}rate <???>${p}
${p}• ${prefix}apakah <text>${p}
${p}• ${prefix}kapankah <text>${p}
${p}• ${prefix}cantikcek <name>${p}
${p}• ${prefix}gantengcek <name>${p}


𝗢𝗧𝗛𝗘𝗥
${p}• ${prefix}owner${p}
${p}• ${prefix}donate${p}
${p}• ${prefix}report <text>${p}



*_ɪɴғᴏ ʙᴏᴛ_*
» ᴛᴇʟғᴏɴ ʙᴏᴛ = ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀᴍᴇɴ
» ɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ʙᴀɪᴋ , ʙɪᴊᴀᴋ

*© HAN*
`           
           but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '༺ HanBotz Beta ༻	' }, type: 1 }
                  ]
        sendButLocation(from, tod, tod2, gambar, but)
           break
           
           
           case 'donate':
txt = `
*「 DONATE 」*

- *Pulsa:* 085731855426
- *Gopay:* 085807149213
- *Dana:* 085731855426

`

           case 'donate':
txt = `
*「 RUNTIME 」*

> Runtime : ${kyun(uptime)}${p}`
const pebz2 = {
            contextInfo: {
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            isForwarded: true,
            forwardingScore: 8,
           quotedMessage: {
           imageMessage: {
           caption: fake,
           jpegThumbnail: gambar,
           mimetype: 'image/jpeg',
           }
           }
           }
           } 
           pebz.sendMessage(from, txt, MessageType.text, pebz2)
           break
           case 'imgsearch':
            if(!q) return reply(`gambar apa?`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await pebz.sendMessage(from,li,image,{quoted: mek})
            break
            case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await pebz.sendMessage(from,di,image,{quoted: mek})
            break
       	   case 'tiktokdl':
       	   case 'tiktok':
       	   case 'tt':
       	   case 'ttdl':
 		   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(error.lv)
 		   reply(mess.wait)
		    hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Lain Kali Jangan Gitu Yak Waterpak Men!!*`
		    pebz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		    })
	    	})
     		.catch(e => console.log(e))
     		break
           case 'quotesimg':
           case 'quotesharian':
           todzi = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lol}`)
           pebz.sendMessage(from, todzi, image, {quoted : mek })
           break
case 'simi': 
				anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${body.slice(3)}`)
				reply(anu.result.success)
				break
             case 'wiki':
            if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
            teks = args.join(' ')
            resa = await wikiSearch(teks).catch(e => {
            return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
            }) 
result = `❒「  *Wiki*  」
├ *Judul :* ${resa[0].judul}
└ *Wiki :* ${resa[0].wiki}`
           sendFileFromUrl(resa[0].thumb, image, {quoted: fkontak, caption: result}).catch(e => {
           reply(result)
           })
        break
        case 'play':
        if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
        reply(mess.wait)
        let yut = await yts(q)
        yta(yut.videos[0].url)             
        .then(async(res) => {
        const { thumb, title, filesizeF, filesize } = res
        const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`      
        ya = await getBuffer(thumb)
        py =await pebz.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti,
        footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
        buttons: gbutsan,
        headerType: 4
}
        await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
        break                
        case 'buttonmusic':
        if(!q) return reply('linknya?')              
        res = await yta(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Audio```')})
        sendMedia(from, `${res.dl_link}`,{quoted:mek})
        break         
        case 'buttonvideo':
        if(!q) return reply('linknya?')            
        res = await ytv(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video```')})
        sendMedia(from, `${res.dl_link}`,'Nih Kack')
        break                               
        case 'trut':
        case 'truth':
        if (!isGroup) return reply('KhususGrup')
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://www.linkpicture.com/q/20211130_010958.jpg`)
        pebz.sendMessage(from, ttrth, 'GAK JALANIN WAJIB DONATE',truteh, {quoted: mek})
	        	break
		case 'dare':
		if (!isGroup) return reply('KhususGrup')
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		todz = await getBuffer(`https://www.linkpicture.com/q/20211130_010958.jpg`)
        pebz.sendMessage(from, der, 'GAK JALANIN WAJIB DONATE',todz, {quoted: mek})
       	   break 
           case 'self':
           if (!isOwner) return reply(mess.only.ownerB)
           if (self === true) return 
            let pebzk = {
            contextInfo: {
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            isForwarded: true,
            forwardingScore: 8,
           quotedMessage: {
           imageMessage: {
           caption: fake,
           jpegThumbnail: gambar,
           mimetype: 'image/jpeg',
           }
           }
           }
           }
           self = true 
           let lat =`_SUCESSS_`
           pebz.sendMessage(from, lat, MessageType.text, pebzk)
           break  
           case 'status': 
           uptime = process.uptime()
           let pingnye = speednye();
           let ping = speednye() - pingnye 
           
           const { 
           os_version } = pebz.user.phone
           let akutext =`_「STATUS」_
*NAMA : ${pebz.user.name}*
*BROWSER : ${pebz.browserDescription[1]}*
*HOST : ${pebz.browserDescription[0]}*
*VERSI : ${pebz.browserDescription[2]}*
*WA : ${pebz.user.phone.wa_version}*
*OS : ${os_version}*
*SPEED : ${ping.toFixed(4)} SECOND*
*Runtime : ${kyun(uptime)}*
` 
            let faker = {
            contextInfo: {
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            isForwarded: true,
            forwardingScore: 8,
           quotedMessage: {
           imageMessage: {
           caption: fake,
           jpegThumbnail: gambar,
           mimetype: 'image/jpeg',
           }
           }
           }
           }
           pebz.sendMessage(from, akutext, text, faker) 
           break
           case 'public':
           if (!isOwner) return reply(mess.only.ownerB)
           if (self === false) return 
           let pebzganskun = {
           contextInfo: {
           participant: '0@s.whatsapp.net',
           remoteJid: 'status@broadcast',
           isForwarded: true,
           forwardingScore: 8,
           quotedMessage: {
           imageMessage: {
           caption: fake,
           jpegThumbnail: gambar,
           mimetype: 'image/jpeg',
          //pageCount: 0
           }
           }
           }
           }
           self = false
           let breh =`_SUCESSS_`
           pebz.sendMessage(from, breh, MessageType.text, pebzganskun)
           break
           case 'nulis':
           case 'write':
           try {
           if (args.length < 1) return reply(mess.notxt)
           reply(mess.wait)
           bo = args.join(' ')
           api = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${bo}&apikey=apivinz`)
           await pebz.sendMessage(from, api, image, { quoted:mek,caption:'Done!' })
           } catch(e) { 
              reply(`${e}`)
           }
           break 
		  case 'sticker2':
		  case 's2':
		  var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await  pebz.downloadAndSaveMediaMessage(ger)
anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
tekks = `${anu.display_url}`
anu1 = `${tekks}`
sendStickerFromUrl(from, `${anu1}`, mess.success)
} else {
reply('Gunakan foto!')
}
break  
          case 'toimg':
			if (!isQuotedSticker) return reply('reply sticker !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await pebz.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'Kek Gini Bukan?')
			fs.unlinkSync(ran)
			})
			break
         case 'take':      
         case 'colong':
         case 'comot':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await pebz.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `HAN`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `085731855426`
            require('./lib/fetcherr.js').createExif(satu, dua)
			require('./lib/fetcherr.js').modStick(media, pebz, mek, from)
			break
             case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await pebz.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              pebz.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await pebz.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              pebz.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
           case 'owner':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:Han\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6285731855426:6285731855426\n`
         + 'END:VCARD'.trim()
         pebz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: fkontak, 
         })
         reply('*ga penting ga usah ngechat, dan gada sewa bot!*')
         break
          case 'bc':
         if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
         if (args.length < 1) return reply('.......')
         anu = await pebz.chats.all()
         if (isMedia && !mek.message.videoMessage || isQuotedImage) {
         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
         bc = await pebz.downloadMediaMessage(encmedia)
         for (let _ of anu) {
         pebz.sendMessage(_.jid, bc, image, { caption: `[ HanBotz izin Broadcast ]\n\n${body.slice(4)}` })
         }
         reply('Suksess broadcast')
         } else {
         for (let _ of anu) {
         sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
         }
         reply('Suksess broadcast')
         }
		break
		case 'hidetag':
		if (!isOwner && !isGroupAdmins) return reply(mess.only.ownerB)
    	var value = args.join(' ')
		var group = await pebz.groupMetadata(from)
		var member = group['participants']
		var mem = []
    	member.map(async adm => {
		mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var optionshidetag = {
	    text: value,
		contextInfo: { mentionedJid: mem },
		quoted: mek
		}
	    pebz.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'༺ HAN ༻',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": gambar} }  } })
					breakbreak
					break
     case 'antilinkbetaaa' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         but = [
         { buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
         { buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
         ]
         sendButton(from, "Silahkan pilih untuk antilink group", but, mek)
         break
     case 'antilinkbetaa' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (!isAntiLink) return reply('anti link sudah on')
         _antilink.push(from)
         fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
         reply(`\`\`\`Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
         break
     case 'antilinkbeta' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (!isAntiLink) return reply('anti link sudah off sebelumnya')
         _antilink.splice(from, 1)
         fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
         reply(`\`\`\`Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
         break
     case 'open':
     case 'grup1':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         reply(`\`\`\`Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
         pebz.groupSettingChange(from, GroupSettingChange.messageSend, false)
         break
     case 'close':
     case 'grup0':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         reply(`\`\`\`Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
         pebz.groupSettingChange(from, GroupSettingChange.messageSend, true)
         break
     case 'linkgroup':
     case 'linkgrup':
         if (!isGroup) return reply(mess.only.group)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         linkgc = await pebz.groupInviteCode(from)
         yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
         pebz.sendMessage(from, yeh, text, { quoted: mek })
         break
     case 'promote' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
         mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
         if (mentioned.length > 1) {
         teks = 'Perintah di terima, anda menjadi admin :\n'
         for (let _ of mentioned) {
         teks += `@${_.split('@')[0]}\n`
         }
         mentions(teks, mentioned, true)
         pebz.groupMakeAdmin(from, mentioned)
         } else {
         mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
         pebz.groupMakeAdmin(from, mentioned)
         }
         break
     case 'demote' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
         mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
         if (mentioned.length > 1) {
         teks = 'Perintah di terima, anda tidak menjadi admin :\n'
         for (let _ of mentioned) {
         teks += `@${_.split('@')[0]}\n`
         }
         mentions(teks, mentioned, true)
         pebz.groupDemoteAdmin(from, mentioned)
         } else {
         mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
         pebz.groupDemoteAdmin(from, mentioned)
         }
         break
     case 'add' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (args.length < 1) return reply('Yang mau di add siapa??')
         if (args[0].startsWith('08')) return reply('Gunakan kode negara !')
         try {
         num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
         pebz.groupAdd(from, [num])
         } catch (e) {
         console.log('Error :', e)
         reply('Gagal menambahkan target, mungkin karena di private')
         }
         break
              case 'kick' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
         mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
         if (mentioned.length > 1) {
         teks = 'Perintah di terima, mengeluarkan :\n'
         for (let _ of mentioned) {
         teks += `@${_.split('@')[0]}\n`
         }
         mentions(teks, mentioned, true)
         pebz.groupRemove(from, mentioned)
         } else {
         mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
         pebz.groupRemove(from, mentioned)
         }
         break
     case 'setname':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         pebz.groupUpdateSubject(from, `${body.slice(9)}`)
         pebz.sendMessage(from, `\`\`\`Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
         break
     case 'setdesc':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         pebz.groupUpdateDescription(from, `${body.slice(9)}`)
         pebz.sendMessage(from, `\`\`\`Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
         break
     case 'report':
         const pesan = body.slice(8)
         if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: mek })
         var nomor = mek.participant
         const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
         var options = {
         text: teks1,
         contextInfo: { mentionedJid: [nomor] },
         }
         pebz.sendMessage(`6285731855426@s.whatsapp.net`, options, text, { quoted: mek })
         reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
         break
      case 'attp':
         if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
         buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
         pebz.sendMessage(from, buffer, sticker, { quoted: mek })
         break
//menu gabut gc
//-- ganteng cek
case 'gantengcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}gantengcek hankun`)
if (!isGroup) return reply(mess.only.group)
  random = `${Math.floor(Math.random() * 100)}`
  gan = q
  cek = `Kegantengan : *${gan}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break

//--- cantik cek
case 'cantikcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}cantikcek hanburger`)
if (!isGroup) return reply(mess.only.group)
  random = `${Math.floor(Math.random() * 100)}`
  can = q
  cek = `Kecantikan : *${can}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break

//--- apakah
case 'apakah':
case 'apa':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}apakah aku jelek`)
apa = q
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
apakah = `Apakah *${apa}*
Jawaban : ${random}`
reply(apakah)
break

//--- rate
case 'rate':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}rate akhlak`)
rate = q
random = `${Math.floor(Math.random() * 100)}`
rating = `Rate ${rate}
Persentase : ${random}%`
reply(rating)
break

//--- bisakah
case 'bisakah':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}bisakah han mendapatkan pacar`)
bisa = q
naon = ["Iya","Tidak","Mungkin","Entahlah"]
random = naon[Math.floor(Math.random() * (naon.length))]
bisakah = `Bisakah ${bisa}
Jawaban : ${random}`
reply(bisakah)
break

//--- kapankah
case 'kapankah':
case 'kapan':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Contoh : ${prefix}kapankah han menikah`)
kapan = q
no = `${Math.floor(Math.random() * 100)}`
naon = ["Jam lagi","Hari lagi","Minggu lagi","Bulan lagi","Tahun lagi"]
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Kapankah ${kapan}
Jawaban : ${no} ${random}`
reply(kapan)
break
          default: 
          if (isCmd) {
                 reply(`Command *${prefix}${command}* ga ada di list *${prefix}help*`)
                    }
					if (isGroup && budy != undefined) {
				} else {
						console.log(color('[SYSTEM]','yellow'), 'PERINTAH TAK DIKENAL DARI', color(sender.split('@')[0]))
					}
                           }
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
