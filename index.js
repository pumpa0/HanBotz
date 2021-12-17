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
const { yta, ytv, ytv144, ytv240, ytv480, ytv720, ytv1080, igdl, upload, formatDate } = require('./lib/ytdl')
const { wikiSearch } = require('./lib/wiki.js')
const { wait, simih,  getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, success, close } = require('./lib/function')

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
const level = require("./lib/level")
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
const atm = require("./lib/atm");
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const _limit = JSON.parse(fs.readFileSync('./lib/limit.json'))
const { uploadimg } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const {
	OwnerNumber,
	prefix,
	lol
} = require('./lib/config.json')

fake = '༺ HanBotz ༻\nStatus : Online'
let gambar = "" || fs.readFileSync('./media/gambar/biasa.png')
let wlcm = "" || fs.readFileSync('./media/gambar/welcome.png')
let gdby = "" || fs.readFileSync('./media/gambar/goodbye.png')
self = false
blocked = []
limitawal = 10


//[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//

        const fakegroup = (teks) => {
            pebz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6285731855426-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/gambar/biasa.png'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `HanBotz`, 
                            orderTitle: `༺ HanBotz ༻`,
                            thumbnail: fs.readFileSync('./media/gambar/biasa.png'),
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
// SYSTEM QRCODE
pebz.ReconnectMode = 2
pebz.logger.level = 'warn'
pebz.version = [2, 2143, 8]
pebz.browserDescription = ['Nasa', 'Safari', '4.1']
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
			pebz.sendMessage(call, 'Maaf, bot tidak bisa menerima panggilan.\n Nelfon = block!\n\n Jika ingin membuka block, hubungi\n wa.me/6285731855426 #owner', MessageType.text)
			.then(() => pebz.blockUser(call, "add"))
			}, 1);
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
					ppimg = 'https://i.ibb.co/Rj1k2zV/welcome.png'
				}
				teks = `𝙃𝘼𝙇𝙇𝙊 *@${num.split('@')[0]}*
𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙂𝙍𝙐𝙋 *${mdata.subject}*

𝙅𝘼𝙉𝙂𝘼𝙉 𝙇𝙐𝙋𝘼 𝙄𝙉𝙏𝙍𝙊 :

• *ɴᴀᴍᴀ :*
• *ᴜᴍᴜʀ :*
• *ɢᴇɴᴅᴇʀ :*
• *ᴀꜱᴀʟ ᴋᴏᴛᴀ :*

𝙎𝙀𝙈𝙊𝙂𝘼 𝘽𝙀𝙏𝘼𝙃 𝙔𝘼 𝘿𝙄 𝙂𝙍𝙐𝙋 𝙄𝙉𝙄`
				let buff = await getBuffer(ppimg)
				pebz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (chat.action == 'remove') {
				num = chat.participants[0]
				try {
					ppimg = await pebz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/ZYLJz2T/goodbye.png'
				}
				teks = `𝙎𝘼𝙔𝙊𝙉𝘼𝙍𝘼 *@${num.split('@')[0]}*`
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
			const c = args.join(' ')
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isWelcome = isGroup ? welkom.includes(from):false
			const isOwner = ownerNumber.includes(sender)
			const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isAntiLink = isGroup ? _antilink.includes(from) : false
	    const isNsfw = isGroup ? nsfww.includes(from) : false
        const isAnti = isGroup ? _antilink.includes(from) : false
        const totalchat = await pebz.chats.all()
        const isSimi = isGroup ? samih.includes(from) : false

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
  if (budy.startsWith('/')) {
			pebz.updatePresence(from, Presence.composing)
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
                const xxx = '```'  
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./lib/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return pebz.sendMessage(from,`BATAS PENGGUNAN ANDA (LIMIT) TELAH HABIS`, text,{ quoted: mek})
            pebz.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./lib/limit.json', JSON.stringify(_limit))
            pebz.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : mek})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            pebz.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS.`, text, {quoted: mek})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./lib/limit.json',JSON.stringify(_limit))
            return false
            }
            }


        
	        mess = {
				wait: 'tunggu sebentar...',
				success: 'sukses ✓“',
				notxt: 'textnya mana ?',
				sabar: 'mengirim file...',
				tunggu: 'loading...',
				yutub: 'khusus personal chat',
				spamm: '*jika spam* command akan di block!',
				error: {
					stick: 'gagal saat konvensi gambar ke sticker',
					Iv: 'link nya mokad :v'
				},
				only: {
					group: 'Khusus Grup!\n\n*Free use Bot*\nhttps://chat.whatsapp.com/FDnHRof3iIV1MfoW5vlMKQ',
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
        key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo  ${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': gambar}}}                   		
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
        //>>>>>>>>>>>>>[ STICKER ]<<<<<<<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./media/sticker/owner.webp')
			pebz.sendMessage(hehe, ano, MessageType.sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./media/sticker/notadmin.webp')
			pebz.sendMessage(hehe, ano, MessageType.sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./media/sticker/admin.webp')
			pebz.sendMessage(hehe, ano, MessageType.sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./media/sticker/wait.webp')
			pebz.sendMessage(hehe, ano, MessageType.sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./media/sticker/ok.webp')
			pebz.sendMessage(hehe, ano, MessageType.sticker, { quoted: mek})
		}
		const sticTok = (hehe) => {
			ano = fs.readFileSync('./media/sticker/toxic.webp')
			pebz.sendMessage(hehe, ano, MessageType.sticker, { quoted: mek})
		}
		const sticKaget = (hehe) => {
			ano = fs.readFileSync('./media/sticker/kaget.webp')
			pebz.sendMessage(hehe, ano, MessageType.sticker, { quoted: mek})
		}
		
//>>>>>>>>>>>>>[ PEMBATAS ]<<<<<<<<<<<<<\\
const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
//>>>>>>>>>>>>>[ PEMBATAS ]<<<<<<<<<<<<<\\
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
      var ucapanWaktu = "GoodNight🌠";
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
              
  var ampun = await pebz.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (budy.startsWith('/')) return
await pebz.chatRead(jid)
})

const linkwa = 'https://chat.whatsapp.com/'
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAnti) return
        if (!isBotGroupAdmins) return reply('Untung Gue bukan admin, kalo iya gua kick lu')
        linkgc = await pebz.groupInviteCode (from)
        if (budy.includes(`${linkwa}${linkgc}`)) return reply('Untung Link group ini')
        if (isOwner) return
		if (isGroupAdmins) return
		pebz.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		pebz.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
		}, 0)
	} 
			colors = ['red','white','black','blue','yellow','green']
	     	const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
           const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mHANBOTZ\x1b[1;37m]', color(pushname), 'Menggunakan Fitur', color(command), 'args :', color(args.length))
        	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mHANBOTZ\x1b[1;37m]', color(pushname), 'Memakai Fitur', color(command), 'DI Group', color(groupName), 'args :', color(args.length))      
        const runt = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " d, " : " D, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " H, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " M, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " s" : " S") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

                var groups = pebz.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = pebz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					uptime = process.uptime();
					const totalChat = await pebz.chats.all()
                    let pingnye = speednye();
                    let ping = speednye() - pingnye 
	        	
            if (self === true && !isOwner && isCmd) return
          
           
             switch(command) {
             case 'menu':
             case 'help':
             uptime = process.uptime()            
             reply(mess.tunggu)
		     var p = '```'
		    const tod =`
${p}${ucapanWaktu} ${pushname}${p}		    

*_ɪɴғᴏ ʙᴏᴛ_*
• *Name : ${pebz.user.name}*
• *Prefix :*『 ${prefix} 』
• *Version : ${pebz.browserDescription[2]}*
• *Hosting : ${pebz.browserDescription[0]}*
• *Browser : ${pebz.browserDescription[1]}*
• *WhatsApp : ${pebz.user.phone.wa_version}*
• *Private Chat : ${privat.length}*
• *Group Chat : ${groups.length}*
• *Runtime : ${runt(process.uptime())}*`
tod2 =`͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*𝗚𝗥𝗢𝗨𝗣*
${p}• ${prefix}delete <reply>${p}
${p}• ${prefix}linkgroup${p}
${p}• ${prefix}antilink <on/off>${p}
${p}• ${prefix}add <nomer[62]>${p}
${p}• ${prefix}kick <tag>${p}
${p}• ${prefix}demote <tag>${p}
${p}• ${prefix}promote <tag>${p}
${p}• ${prefix}setname <text>${p}
${p}• ${prefix}setdesc <text>${p}
${p}• ${prefix}hidetag <text>${p}
${p}• ${prefix}tagall <text>${p}
${p}• ${prefix}open|close${p}

*𝗬𝗢𝗨𝗧𝗨𝗕𝗘*
${p}• ${prefix}ytmp3 <link>${p}
${p}• ${prefix}ytmp4-144 <link>${p}
${p}• ${prefix}ytmp4-240 <link>${p}
${p}• ${prefix}ytmp4-360 <link>${p}
${p}• ${prefix}ytmp4-480 <link>${p}
${p}• ${prefix}ytmp4-720 <link>${p}
${p}• ${prefix}ytmp4-1080 <link>${p}
${p}• ${prefix}ytsearch <query>${p}

*𝗦𝗧𝗜𝗖𝗞𝗘𝗥*
${p}• ${prefix}attp <text>${p}
${p}• ${prefix}sticker <reply>${p}
${p}• ${prefix}stickergif <reply>${p}
${p}• ${prefix}dogestick${p}
${p}• ${prefix}gurastick${p}
${p}• ${prefix}patrickstick${p}
${p}• ${prefix}animestick${p}
${p}• ${prefix}toimg <replysticker>${p}

*𝗦𝗘𝗔𝗥𝗖𝗛*
${p}• ${prefix}lirik <query>${p}
${p}• ${prefix}wiki <query>${p}
${p}• ${prefix}pinterest <query>${p}
${p}️• ${prefix}imgsearch <query>${p}

*𝗚𝗔𝗠𝗘*
${p}• ${prefix}suit${p}
${p}• ${prefix}slot${p}
${p}• ${prefix}herolist ${p}
${p}• ${prefix}herodetail <name>${p}

*𝗖𝗛𝗘𝗖𝗞𝗘𝗥*
${p}• ${prefix}cantikcek <name>${p}
${p}• ${prefix}gantengcek <name>${p}
${p}• ${prefix}jelekcek <name>${p}
${p}• ${prefix}begocek <name>${p}
${p}• ${prefix}nolepcek <name>${p}
${p}• ${prefix}jagocek <name>${p}
${p}• ${prefix}jahatcek <name>${p}
${p}• ${prefix}pintarcek <name>${p}
${p}• ${prefix}bebancek <name>${p}
${p}• ${prefix}haramcek <name>${p}
${p}• ${prefix}pakboycek <name>${p}
${p}• ${prefix}pakgirlcek <name>${p}

*𝗧𝗔𝗚*
${p}• ${prefix}gay ${p}
${p}• ${prefix}lesby ${p}
${p}• ${prefix}cantik ${p}
${p}• ${prefix}ganteng ${p}
${p}• ${prefix}jelek ${p}
${p}• ${prefix}bego ${p}
${p}• ${prefix}nolep ${p}
${p}• ${prefix}jago ${p}
${p}• ${prefix}jahat ${p}
${p}• ${prefix}pintar ${p}
${p}• ${prefix}beban ${p}
${p}• ${prefix}baik ${p}
${p}• ${prefix}haram ${p}
${p}• ${prefix}pakboy ${p}
${p}• ${prefix}pakgirl ${p}
${p}• ${prefix}pacaran ${p}


*𝗥𝗔𝗡𝗗𝗢𝗠*
${p}• ${prefix}say <text>${p}
${p}• ${prefix}sayy <text>${p}
${p}• ${prefix}rate <???>${p}
${p}• ${prefix}apakah <text>${p}
${p}• ${prefix}kapankah <text>${p}
${p}• ${prefix}wangy <name> ${p}

𝗢𝗧𝗛𝗘𝗥
${p}• ${prefix}tourl <reply>${p}
${p}• ${prefix}owner${p}
${p}• ${prefix}donate${p}
${p}• ${prefix}report <text>${p}


*Website*
• bit.ly/HanBotz
*Official Group*
• bit.ly/OfficialGroupHanBotz`

           but = [
          { buttonId: `${prefix}sapa`, buttonText: { displayText: '༺ HanBotz ༻' }, type: 1 }
                  ]
        sendButLocation(from, tod, tod2, gambar, but)
           break

case 'simplemenu':
case 'simpelmenu':
case 'smenu':
const simple2 =`
*𝗚𝗥𝗢𝗨𝗣*
• ${prefix}delete <reply>
• ${prefix}linkgroup
• ${prefix}antilink <on/off>
• ${prefix}add <nomer[62]>
• ${prefix}kick <tag>
• ${prefix}demote <tag>
• ${prefix}promote <tag>
• ${prefix}setname <text>
• ${prefix}setdesc <text>
• ${prefix}hidetag <text>
• ${prefix}tagall <text>
• ${prefix}open|close

*𝗬𝗢𝗨𝗧𝗨𝗕𝗘*
• ${prefix}ytmp3 <link>
• ${prefix}ytmp4 <link>
• ${prefix}ytsearch <query>

*𝗦𝗧𝗜𝗖𝗞𝗘𝗥*
• ${prefix}attp <text>
• ${prefix}sticker <reply>
• ${prefix}stickergif <reply>
• ${prefix}dogestick
• ${prefix}gurastick
• ${prefix}patrickstick
• ${prefix}animestick
• ${prefix}toimg <replysticker>

*𝗦𝗘𝗔𝗥𝗖𝗛*
• ${prefix}lirik  <query>
• ${prefix}wiki <query>
• ${prefix}pinterest <query>
️• ${prefix}imgsearch <query>

*𝗚𝗔𝗠𝗘*
• ${prefix}suit
• ${prefix}slot

*𝗚𝗔𝗕𝗨𝗧*
• ${prefix}say <text>
• ${prefix}rate <???>
• ${prefix}apakah <text>
• ${prefix}kapankah <text>
• ${prefix}cantikcek <name>
• ${prefix}gantengcek <name>

𝗢𝗧𝗛𝗘𝗥
• ${prefix}tourl <reply>
• ${prefix}owner
• ${prefix}donate
• ${prefix}report <text>


*Website*
• bit.ly/HanBotz
*Official Group*
• bit.ly/OfficialGroupHanBotz`

reply(simple2)
break
          
           case 'donate':
txt = `
*「 DONATE 」*

- *Pulsa:* 085731855426
- *Gopay:* 085807149213
- *Dana:* 085731855426

`
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
    case 'runtime':
            reply(`${runt(process.uptime())}`)
            break  
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await pebz.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
                    case 'trut':
        case 'truth':
        if (!isGroup) return reply('KhususGrup')
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://www.linkpicture.com/q/20211130_010958.jpg`)
	    but = [
          { buttonId: `${prefix}donate2`, buttonText: { displayText: 'DONATE' }, type: 1 }
        ]
        sendButLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',truteh, but, {quoted: mek})
	        	break
		case 'dare':
		if (!isGroup) return reply('KhususGrup')
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "${teng} CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		todz = await getBuffer(`https://www.linkpicture.com/q/20211130_010958.jpg`)
	    but = [
          { buttonId: `${prefix}donate2`, buttonText: { displayText: 'DONATE' }, type: 1 }
        ]
        sendButLocation(from, der, 'GK JALANIN WAJIB DONATE',todz, but, {quoted: mek})
       	   break
           case 'quotesimg':
           case 'quotesharian':
           todzi = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
           pebz.sendMessage(from, todzi, image, {quoted : mek })
           break
case 'simi':
           if (args.length == 0) return reply(`Hallo Kak ${pushname}`)
           get = await fetchJson(`https://api-sv2.simsimi.net/v2/?text=hello&lc=en&cf=false`)
           getresult = get.result
             reply(getresult)         
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
   	case 'playyy':
        if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
        let yut = await yts(q)
        yta(yut.videos[0].url)             
        .then(async(res) => {
        const { thumb, title, filesizeF, filesize } = res
        const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬
		     
• *Judul :* ${yut.all[0].title}
• *ID Video :* ${yut.all[0].videoId}
• *Diupload Pada :* ${yut.all[0].ago}
• *Views :* ${yut.all[0].views}
• *Durasi :* ${yut.all[0].timestamp}
• *Channel :* ${yut.all[0].author.name}
• *Link Channel :* ${yut.all[0].author.url}`      
        ya = await getBuffer(thumb)
        py =await pebz.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti,
        footerText: 'Silahkan Pilih Jenis File Dibawah Ini!',
        buttons: gbutsan,
        headerType: 4
}
        await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
        break                
        case 'ytmp3':
        if(!q) return reply('linknya?')             
        reply('mengirim file...')
        res = await yta(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Audio```')})
        sendMedia(from, `${res.dl_link}`,{quoted:mek})
        break         
        case 'ytmp4':
        case 'ytmp4-360':
        if(!q) return reply('linknya?')            
        reply('mengirim file...')
        res = await ytv(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video, Ulangi Atau Gunakan Kualitas Lain```')})
        sendMedia(from, `${res.dl_link}`,'```HanBotz```')
        break                      
        case 'ytmp4-144':
        if(!q) return reply('linknya?')            
        reply('mengirim file...')
        res = await ytv144(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video, Ulangi Atau Gunakan Kualitas Lain```')})
        sendMedia(from, `${res.dl_link}`,'```HanBotz```')
        break                      
        case 'ytmp4-240':
        if(!q) return reply('linknya?')            
        reply('mengirim file...')
        res = await ytv240(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video, Ulangi Atau Gunakan Kualitas Lain```')})
        sendMedia(from, `${res.dl_link}`,'```HanBotz```')
        break                      
        case 'ytmp4-480':
        if(!q) return reply('linknya?')            
        reply('mengirim file...')
        res = await ytv480(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video, Ulangi Atau Gunakan Kualitas Lain```')})
        sendMedia(from, `${res.dl_link}`,'```HanBotz```')
        break                      
        case 'ytmp4-720':
        if(!q) return reply('linknya?')            
        reply('mengirim file...')
        res = await ytv720(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video, Ulangi Atau Gunakan Kualitas Lain```')})
        sendMedia(from, `${res.dl_link}`,'```HanBotz```')
        break                      
        case 'ytmp4-1080':
        if(!q) return reply('linknya?')            
        reply('mengirim file...')
        res = await ytv1080(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video, Ulangi Atau Gunakan Kualitas Lain```')})
        sendMedia(from, `${res.dl_link}`,'```HanBotz```')
        break                      
        	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			sticWait(from)
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await pebz.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '*© HanBotz*'
    		await fakethumb(tbuff,ytresult)
					break
           case 'self':
           if (!isOwner) return sticOwner(from)
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
           if (!isOwner) return sticOwner(from)
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
           if (!isOwner) return sticOwner(from)
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
           case 'nuliserror':
           case 'writeerror':
           try {
           if (args.length < 1) return reply('text nya?')
           sticWait(from)
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
			sticWait(from)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await pebz.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^\n_Note: untuk sticker to video, belum ada :)_')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'```HanBotz```')
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
            satu = anu[0] !== '' ? anu[0] : `Han`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `085731855426`
            require('./lib/fetcherr.js').createExif(satu, dua)
			require('./lib/fetcherr.js').modStick(media, pebz, mek, from)
			break
             case "sticker":
      case "stiker":
      case "stickergif":
      case "stikergif":
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
         break
          case 'bc':
         if (!isOwner) return sticOwner(from)
         if (args.length < 1) return reply('apa woy')
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
         sendMess(_.jid, `[ *HANBOTZ BROADCAST* ]\n\n${body.slice(4)}`)
         }
         reply('Suksess broadcast')
         }
		break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return sticAdmin(from)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
		case 'hidetag':
		if (!isOwner && !isGroupAdmins) return sticAdmin(from)
		if (!isGroup) return reply(mess.only.group)
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
	    pebz.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'༺ HanBotz ༻',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": gambar} }  } })
					breakbreak
         break
     case 'open':
     case 'grup1':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return sticNotAdmin(from)
         sticOk(from)
         pebz.groupSettingChange(from, GroupSettingChange.messageSend, false)
         break
     case 'close':
     case 'grup0':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return sticNotAdmin(from)
         sticOk(from)
         pebz.groupSettingChange(from, GroupSettingChange.messageSend, true)
         break
     case 'linkgroup':
     case 'linkgrup':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return sticNotAdmin(from)
         linkgc = await pebz.groupInviteCode(from)
         yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
         pebz.sendMessage(from, yeh, text, { quoted: mek })
         break
     case 'promote' :
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return sticNotAdmin(from)
         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di promote!')
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
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return sticNotAdmin(from)
         if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di demote!')
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
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return sticNotAdmin(from)
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
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return sticNotAdmin(from)
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
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         pebz.groupUpdateSubject(from, `${body.slice(9)}`)
         pebz.sendMessage(from, `\`\`\`Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
         break
     case 'setdesc':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins && !isOwner) return sticAdmin(from)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         pebz.groupUpdateDescription(from, `${body.slice(9)}`)
         pebz.sendMessage(from, `\`\`\`Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
         break
     case 'report':
         const pesan = body.slice(8)
         if (args.length == 0) return reply(`gunakan hanya untuk melaporkan bug/error\n main main akan di block!!`)
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
         if (args.length == 0) return reply(`Example: ${prefix + command} HanBotz`)
         buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
         pebz.sendMessage(from, buffer, sticker, { quoted: mek })
         break
         case 'attp2':
         if (args.length == 0) return reply(`Example: ${prefix + command} HanBotz`)
         atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					pebz.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
//menu gabut gc
//-- ganteng cek
case 'gantengcek':
case 'kegantengan':
  if (args.length < 1) return reply(`Contoh : ${prefix}gantengcek hankun`)
  random = `${Math.floor(Math.random() * 100)}`
  gan = q
  cek = `Ke *ganteng* an : *${gan}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break

//--- cantik cek
case 'cantikcek':
case 'kecantikan':
  if (args.length < 1) return reply(`Contoh : ${prefix}cantikcek hanburger`)
  random = `${Math.floor(Math.random() * 100)}`
  can = q
  cek = `Ke *cantik* an : *${can}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break

//--- apakah
case 'apakah':
case 'apa':
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
if (args.length < 1) return reply(`Contoh : ${prefix}rate akhlak`)
rate = q
random = `${Math.floor(Math.random() * 100)}`
rating = `Rate ${rate}
Persentase : ${random}%`
reply(rating)
break

//--- bisakah
case 'bisakah':
if (args.length < 1) return reply(`Contoh : ${prefix}bisakah aku mendapatkan pacar`)
bisa = q
naon = ["Iya","Tidak","Mungkin","Entahlah","mustahil"]
random = naon[Math.floor(Math.random() * (naon.length))]
bisakah = `Bisakah ${bisa}
Jawaban : ${random}`
reply(bisakah)
break

//--- kapankah
case 'kapankah':
case 'kapan':
if (args.length < 1) return reply(`Contoh : ${prefix}kapankah han menikah`)
kapan = q
no = `${Math.floor(Math.random() * 100)}`
naon = ["Jam lagi","Hari lagi","Minggu lagi","Bulan lagi","Tahun lagi","Abad lagi"]
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Kapankah ${kapan}
Jawaban : ${no} ${random}`
reply(kapan)
break
case 'nolepcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}nolepcek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  lep = q
  cek = `Ke *nolep* an : *${lep}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'jelekcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}jelekcek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  elek = q
  cek = `Ke *jelek* an : *${elek}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'begocek':
  if (args.length < 1) return reply(`Contoh : ${prefix}begocek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  beg = q
  cek = `Ke *bego* an : *${beg}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'pintercek':
case 'pintarcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}pintarcek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  pntr = q
  cek = `Ke *pintar* an : *${pntr}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'jagocek':
  if (args.length < 1) return reply(`Contoh : ${prefix}jagocek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  goan = q
  cek = `Ke *jago* an : *${goan}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'bebancek':
  if (args.length < 1) return reply(`Contoh : ${prefix}bebancek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  bban = q
  cek = `Ke *beban* an : *${bban}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'baikcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}baikcek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  god = q
  cek = `Ke *baik* an : *${god}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'jahatcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}jahatcek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  evil = q
  cek = `Ke *jahat* an : *${evil}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'haramcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}begocek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  harm = q
  cek = `Ke *haram* an : *${harm}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'pakboycek':
case 'fakboycek':
  if (args.length < 1) return reply(`Contoh : ${prefix}pakboycek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  fakb = q
  cek = `Ke *fakboy* an : *${fakb}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'pakgirlcek':
case 'fakgirlcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}pakgirlcek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  fakg = q
  cek = `Ke *fakgirl* an : *${fakg}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'bapercek':
  if (args.length < 1) return reply(`Contoh : ${prefix}bapercek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  lov = q
  cek = `Ke *baper* an : *${lov}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break
case 'sangecek':
case 'sagnecek':
  if (args.length < 1) return reply(`Contoh : ${prefix}sangecek hanbotz`)
  random = `${Math.floor(Math.random() * 100)}`
  horn = q
  cek = `Ke *sange* an : *${horn}*
Persentase : ${random}%`
pebz.sendMessage(from, cek, text, {quoted: mek})
break

case 'delete':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return sticAdmin(from)
pebz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'leave':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return sticOwner(from)
					setTimeout( () => {
					pebz.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					pebz.updatePresence(from, Presence.composing) 
					pebz.sendMessage(from, 'Bye 🗿', text) // ur cods
					}, 0)
              break
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              sticWait(from)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break              
      case 'dogestick':
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrickstick':
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gurastick':
       case 'gawrgura':
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'slot':
              const sotoy = ['🍊 : 🍌 : 🍐','🍒 : 🍌 : 🍊','🍌 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍌 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍒 : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍐 : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break

       case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner) return sticAdmin(from)
					if (args.length < 1) return reply(`On untuk mengaktifkan & off untuk menonaktifkan`)
					if ((args[0]) === 'on') {
						if (isAnti) return reply('Antilink aktif')
						_antilink.push(from)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(_antilink))
						reply(`Mengaktifkan fitur anti link di group *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAnti) return reply('Antilink off')
						_antilink.splice(from, 1)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(_antilink))
						reply(`Menonaktifkan fitur anti link di group *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan & off untuk menonaktifkan')
					}
					break
case 'say':
                                        teks = body.slice(5)
					
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        reply(saying)
                                        break
case 'sayy':
                                        teks = body.slice(5)
					
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        pebz.sendMessage(from, saying, text)
                                        break

              case 'readall':
              if (!isOwner) return sticOwner(from)
              totalchat.map( async ({ jid }) => {
              await pebz.chatRead(jid)})
              reply(`Berhasil membaca ${unread.length} Chat !`)
              console.log(totalchat.length)
              break	
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolistbeta':
if (args.length < 1) return reply('Heronya?')
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herolist':
hero = `*List hero untuk feature /herodetail*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
-  Valentina
-  Aamon
-  Floryn
-  Aulus
-  Natan
-  Phoveus
-  Gloo
-  Beatrix
-  Paquito
-  Hayabusa
-  Lancelot
-  Odette
-  Kagura
-  Minotaur
-  pebz
-  Karina
-  Bane
-  Argus
-  Phylax
-  Yin
-  Akai
-  Hanabi
-  Hayabusa
-  Kagura
-  Lancelot
-  Odette
-  Aamon
-  Akai
-  Aldous
-  Alice
-  pebz
-  Alucard
-  Angela
-  Argus
-  Atlas
-  Aurora
-  Aulus
-  Badang
-  Balmond
-  Bane
-  Barats
-  Baxia
-  Belerick
-  Benedetta
-  Brody
-  Bruno
-  Carmilla
-  Cecilion
-  Chang'e
-  Chou
-  Claude
-  Clint
-  Cyclops
-  Diggie
-  Dyrroth
-  Phylax
-  Esmeralda
-  Estes
-  Eudora
-  Fanny
-  Faramis
-  Floryn
-  Franco
-  Freya
-  Gatotkaca
-  Gloo
-  Gord
-  Granger
-  Grock
-  Guinevere
-  Gusion
-  Hanabi
-  Hanzo
-  Harith
-  Harley
-  Hayabusa
-  Helcurt
-  Hilda
-  Hylos
-  Irithel
-  Jawhead
-  Johnson
-  Kadita
-  Kagura
-  Kaja
-  Karina
-  Karrie
-  Khaleed
-  Khufra
-  Kimmy
-  Lancelot
-  Lapu-Lapu
-  Layla
-  Leomord
-  Lesley
-  Ling
-  Lolita
-  Lunox
-  Luo_Yi
-  Lylia
-  Mathilda
-  Martis
-  Masha
-  Minotaur
-  Minsitthar
-  Miya
-  Moskov
-  Nana
-  Natan
-  Natalia
-  Odette
-  Pharsa
-  Phoveus
-  Popol_and_Kupa
-  Paquito
-  Rafaela
-  Roger
-  Ruby
-  Saber
-  Selena
-  Silvanna
-  Sun
-  Terizla
-  Thamuz
-  Tigreal
-  Uranus
-  Vale
-  Valentina
-  Valir
-  Vexana
-  Wanwan
-  X.Borg
-  Yin
-  Yi_Sun-Shin
-  Yu_Zhong
-  Yve
-  Zhask
-  Zilong
-  Akai
-  Alice
-  Atlas
-  Barats
-  Baxia
-  Belerick
-  Phylax
-  Esmeralda
-  Franco
-  Gatotkaca
-  Gloo
-  Grock
-  Hilda
-  Hylos
-  Johnson
-  Khufra
-  Lolita
-  Minotaur
-  Ruby
-  Tigreal
-  Uranus
-  Aldous
-  Alpha
-  Alucard
-  Argus
-  Aulus
-  Badang
-  Balmond
-  Bane
-  Barats
-  Chou
-  Dyrroth
-  Freya
-  Gatotkaca
-  Guinevere
-  Hilda
-  Jawhead
-  Kaja
-  Khaleed
-  Lapu-Lapu
-  Leomord
-  Martis
-  Masha
-  Minsitthar
-  Roger
-  Phoveus
-  Paquito
-  Ruby
-  Silvanna
-  Sun
-  Thamuz
-  Terizla
-  X.Borg
-  Yin
-  Yu_Zhong
-  Zilong
-  Aamon
-  Alucard
-  Benedetta
-  Fanny
-  Gusion
-  Hanzo
-  Harley
-  Hayabusa
-  Helcurt
-  Kadita
-  Karina
-  Lancelot
-  Lesley
-  Ling
-  Mathilda
-  Natalia
-  Saber
-  Selena
-  Yi_Sun-Shin
-  Zilong
-  Alice
-  Aurora
-  Bane
-  Cecilion
-  Chang'e
-  Cyclops
-  Esmeralda
-  Eudora
-  Faramis
-  Gord
-  Harith
-  Harley
-  Kadita
-  Kagura
-  Kimmy
-  Lunox
-  Luo_Yi
-  Lylia
-  Nana
-  Odette
-  Pharsa
-  Selena
-  Vale
-  Valentina
-  Valir
-  Vexana
-  Yve
-  Zhask
-  Beatrix
-  Brody
-  Bruno
-  Claude
-  Clint
-  Phylax
-  Granger
-  Hanabi
-  Irithel
-  Karrie
-  Kimmy
-  Layla
-  Lesley
-  Miya
-  Moskov
-  Natan
-  Popol_and_Kupa
-  Roger
-  Wanwan
-  Yi_Sun-Shin
-  Akai
-  Angela
-  Atlas
-  Carmilla
-  Diggie
-  Estes
-  Faramis
-  Floryn
-  Franco
-  Kaja
-  Khufra
-  Lolita
-  Mathilda
-  Minotaur
-  Nana
-  Rafaela
-  Tigreal`

reply(hero)
break

case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'tutuptime':
case 'closetime':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
stickOk(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"00000"
} else if (args[1]=="jam") {var timer = args[0]+"000000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
pebz.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
case 'opentime':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
sticOk(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"00000"
} else if (args[1]=="jam") {var timer = args[0]+"000000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
pebz.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'tes':
reply(`Oke Sudah Online`)
break
//FunMenu
case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantek':
      case 'pakboy':
      case 'pakgirl':
      case 'beban':
      case 'jago':
      case 'ganteng':
      case 'cantik':
      case 'nolep':
      case 'haram':
      case 'jahat':
      case 'baik':
      case 'jelek':
      case 'baper':
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Siapa Yang ${command}?*\nYaitu @${goo.jid.split('@')[0]}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
case 'pacaran':
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const gfh = groupMembers
        const fo = groupMembers
        const foo = gfh[Math.floor(Math.random() * gfh.length)]
        const io = fo[Math.floor(Math.random() * fo.length)]
        teks = `*Yang Lagi Pacaran*\n @${foo.jid.split('@')[0]} ❤️ @${io.jid.split('@')[0]}`
        membr.push(foo.jid)
        membr.push(io.jid)
        mentions(teks, membr, true)
        break

case 'cerpen':  
                   
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                  
                   case 'samehadaku':             
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   pebz.sendMessage(from, anu2, image, {caption: anu1, quoted: mek })
                   break
      case 'neon1':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} HanBotz*`)
                   
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
                   break  
       case 'text3d':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} HanBotz*`)
                   
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
                   break                   
       case 'galaxy':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} HanBotz*`)
                   
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
                   break
      case 'gaming':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} HanBotz*`)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
                   break
      case 'colors':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} HanBotz*`)
                   
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
                   break
case 'darkjoke':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   anu = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE`)
                   anu1 = await getBuffer(anu.result)
                   pebz.sendMessage(from, anu1, image, {caption: `HanBotz`, quoted: mek})
                   break
case 'meme':  
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   anu = await fetchJson(`https://api.zeks.me/api/memeindo?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE`)
                   anu1 = await getBuffer(anu.result)
                   pebz.sendMessage(from, anu1, image, {caption: `HanBotz`, quoted: mek})
                   break
       case 'pantun':  
                   
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
                   case 'tebakgambar':
					if (isLimit(sender)) return
                    await limitAdd(sender) 
					anu = await fetchJson(`https://api.zeks.me/api/tebakgambar?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal)
					setTimeout( () => {
					reply('*Jawaban :* '+anu.result.jawaban) // ur cods
					}, 60000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 Detik lagi_') // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 Detik lagi_') // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply( '_50 Detik lagi_') // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					pebz.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					
					break  
                       /*TEXT MAKER*/
                case 'qrencode':
                case 'barcode':
                case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'gneon':
                case 'dropwater':
                case 'tfire':
                case 'sandw':
                case 'gplaybutton':
                case 'splaybutton':
                case 'text3dbox':
                case 'logobp':
                case 'leavest':
                case 'thundertext':
                case 'tlight':
                case 'naruto':
                case 'crosslogo':
                case 'cslogo':
                case 'crismes':
                case 'flametext':
                case 'glowtext':
                case 'smoketext':
                case 'flowertext':
                case 'lithgtext':
                   
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} HanBotz*`)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://api.zeks.me/api/${command}?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE&text=${F}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
                   break
                   case 'epep':
                   if (isOwner) return
                   if (isLimit(sender)) return
			        await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} HanBotz*`)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://api.zeks.me/api/${command}?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE&text=..${F}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
                   break
break
                case 'wolflogo':
                case 'logoaveng':
                case 'marvellogo':
                case 'gtext':
                case 'pubglogo':
                case 'snowwrite':
                case 'watercolour':
                    if (isOwner) return
                    if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Han&Botz*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   anu = await getBuffer(`https://api.zeks.me/api/${command}?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE&text1=${F1}&text2=${F2}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
					break
                    case 'phlogo':
                    if (isOwner) return
                    if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Han&Botz*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   anu = await getBuffer(`https://api.zeks.me/api/${command}?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE&text1=.${F1}&text2=${F2}`)
                   pebz.sendMessage(from, anu, image, {caption: `HanBotz`, quoted: mek})
					break
case 'artinama':  
                    if (isOwner) return
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://api.zeks.me/api/artinama?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE&nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result}\n`
                    
                    reply(anu1)
                    break
       case 'artimimpi':  
                    if (isOwner) return
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://api.zeks.me/api/artimimpi?apikey=ubtieIG43bZfHt3RSYMtLlU4MIE&q=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.string}\n`
                    reply(anu1)
                    break

                   
          default: 

          if (budy.includes(`@6285731855426`)) {
const baby = fs.readFileSync('./media/sticker/Taggg.webp');
pebz.sendMessage(from, baby, MessageType.sticker, {quoted: mek})
                  }
       if (budy.includes(`@Hanafi`)) {
const rell = fs.readFileSync('./media/sticker/Taggg.webp');
pebz.sendMessage(from, rell, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`@HanBotz`)) {
const rell = fs.readFileSync('./media/sticker/TagBot.webp');
pebz.sendMessage(from, rell, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`@6285807149213`)) {
const rell = fs.readFileSync('./media/sticker/TagBot.webp');
pebz.sendMessage(from, rell, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`HanBot`)) {
const rell = fs.readFileSync('./media/sticker/TagBot.webp');
pebz.sendMessage(from, rell, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`hanbot`)) {
const rell = fs.readFileSync('./media/sticker/TagBot.webp');
pebz.sendMessage(from, rell, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`HANBOT`)) {
const rell = fs.readFileSync('./media/sticker/TagBot.webp');
pebz.sendMessage(from, rell, MessageType.sticker, {quoted: mek})
                  }
                  
                    
                    if (budy.includes(`anjing`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Anjing`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`ajg`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Ajg`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Asu`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`anjg`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Anjg`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`tolol`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Tolol`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`antek`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`elaso`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Babi`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`babi`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`ontol`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`kntl`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`kintil`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`emek`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`entod`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Goblok`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`goblok`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`gblk`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Gblk`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`gentod`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`gentot`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`cok`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Cok`)){  
                    const F3 = fs.readFileSync('./media/sticker/toxic.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`akasih`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`akasi`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`hanks`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Tq`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`tq`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`hank you`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`thx`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`Thx`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    if (budy.includes(`erima kasih`)){  
                    const F3 = fs.readFileSync('./media/sticker/ok.webp')
                    pebz.sendMessage(from, F3, sticker, {quoted: mek})
                    }
                    
                    
                    
		             if (body.startsWith(`${prefix}${command}`)) {                    
                    anu1 = `Sorry *${prefix}${command}* Cannot be found in *${prefix}menu*`
                    pebz.sendMessage(from, anu1, text, {quoted: mek})
                    }
                  
                  
					if (isGroup && budy != undefined) {
				} else {
						console.log(color('[SYSTEM]','yellow'), 'PERINTAH TAK DIKENAL DARI', color(sender.split('@')[0]))
					}
                           }
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
			reply(error)
		}
	})
