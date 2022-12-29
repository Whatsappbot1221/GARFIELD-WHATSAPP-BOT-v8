//Coded by Tharindu Liyanage
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
global.list = ('القائمة 🧬')
global.allmenu = ('كل القائمة 🎉')
global.script = ('قائمة تصميم لوجو 🌈')
global.owner = ('المالك 🦋')
global.deploy = ('النشر 🐥')
global.project = ('مشروع 🦋')
global.donate = ('تبرع 🚀')
global.stop = ('توقف 🛑')
global.skip = ('تخطي ⏩')
global.thanks = ('*قائمة الشكر💙*')
// 👈 You Can change this your choice
global.nextimg = ('الصوره التاليه ➡️')
global.audio = ('🎶 قائمة الصوتيات')
global.video = ('فيديو 📽')
global.yts = ('قائمة البحث 🌐')
global.play = ('بداية 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
