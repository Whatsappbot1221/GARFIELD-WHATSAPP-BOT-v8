// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🦦'] // 👈 Enter your Emoji 
global.emoji02 = ['🦦'] //👈 Enter your Emoji
global.notice = ` *هلا معك🦦*
*بـــوت رايــــــلـــي🦦*
*تــابــع لــنقــــابـــة ANIME WORLD*
*الاستقبال 👇🏽*
*https://chat.whatsapp.com/Jz1mBAT9yWrFUAoCnleDRu*
*الامـــبــراطــــور♛ رايــــــلـــي*
*رقـــمــي 👇🏽*
*https://wa.me/qr/NARHOG6BZO4BB1*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+967712898343'] //👈  Enter Your number
global.premium =  ['+967712898343'] //👈  Enter Your number
global.ownernomer = '+967712898343' //👈  Enter Your number
global.ownername = 'رايــــــلـــي🦦' //👈 Enter Your name
global.botname = 'بوت رايــــــلـــي🦦' //👈 Enter Your Bot name
global.footer = 'نقابة ANIME💎WORLD //👈 Enter Your Name
global.ig = 'https://chat.whatsapp.com/Jz1mBAT9yWrFUAoCnleDRu' // 👈 You Can change this your choice
global.region = 'Yemen, Egypt, Morocco' // 👈 You Can change this your choice
global.sc = 'https://chat.whatsapp.com/Jz1mBAT9yWrFUAoCnleDRu'
global.fbt = 'قروب الإستقبال ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://wa.me/qr/NARHOG6BZO4BB1'// 👈 Enter your Social media link to follow now button
global.welcome = '*نورت/ي الجروب🥰 🦋*' // 👈 You Can change this your choice
global.bye = '*تروح يجي غيرك 🐼*' // 👈 You Can change this your choice
global.packname = 'بوت رايــــــلـــي'  // 👈 You Can change this your choice 
global.author = 'الامـــبــراطــــور♛ رايــــــلـــي' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','🌚','🦦','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://ibb.co/g3K8yNz' 
global.spoty = 'https://ibb.co/g3K8yNz'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = 'https://ibb.co/g3K8yNz'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: '*هذه الميزة للمشرف فقط*!', // 👈 You Can change this your choice
    botAdmin: '*يجب أن يكون البوت مسؤولاً أولاً*!', // 👈 You Can change this your choice
    owner: '*هذه الميزة للمالك فقط*!', // 👈 You Can change this your choice
    group: '*الميزة تستخدم فقط للمجموعات*!', // 👈 You Can change this your choice
    private: '*الميزات المستخدمة فقط للدردشة الخاصة!*', // 👈 You Can change this your choice
    bot: '*هذه الميزة مخصصة للبوت فقط*', // 👈 You Can change this your choice
    wait: '```*أرجو الإنتظار*...```', // 👈 You Can change this your choice
    error: 'خطأ!  ربما انتهت صلاحية مفتاح Api🤔!', // 👈 You Can change this your choice
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، وسيتم إعادة تعيين الحد كل 12 ساعة',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
