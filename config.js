const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_11_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICA2MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5dzFKcWhadkZLMnYzMzZuWVVtd2hEcGJXbnBPcTVjai9FUGovTmR5cGxjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTgwMDE1NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIyOUNENTBBMjA0QkQ3RDlGMjE4QzQ5QTg5QUZBMURGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDU0MTQ1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0UHVKVV93aFQzTzZDZWRKR1VHekZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3OGZjN2JkLTViNDgtNGVmYy04YWM1LTE5YmExODVkZDZkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAyNDgsXG4gICAgICAxOTEsXG4gICAgICA3MixcbiAgICAgIDE1MSxcbiAgICAgIDEzNyxcbiAgICAgIDE1NSxcbiAgICAgIDYyLFxuICAgICAgMTMyLFxuICAgICAgNDMsXG4gICAgICAxNSxcbiAgICAgIDIyMixcbiAgICAgIDE4MyxcbiAgICAgIDEwMixcbiAgICAgIDE5NixcbiAgICAgIDI1NSxcbiAgICAgIDIxMyxcbiAgICAgIDIsXG4gICAgICA2OSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDI1NSxcbiAgICAgIDIzNyxcbiAgICAgIDEwMixcbiAgICAgIDM5LFxuICAgICAgMjI2LFxuICAgICAgMjQ3LFxuICAgICAgNDQsXG4gICAgICAyMDYsXG4gICAgICAxMDEsXG4gICAgICAyMTksXG4gICAgICAxNTUsXG4gICAgICAzNixcbiAgICAgIDE3MSxcbiAgICAgIDIzLFxuICAgICAgNjYsXG4gICAgICAxMDMsXG4gICAgICAyNDMsXG4gICAgICAyNDQsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUI5RkExS0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTgwMDE1Njk6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3MTk3NDM2NjgzNDQ6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEx3bCtJREVPM0J0YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIza29ZVmJpeTErK1MwdmpTOVh4Y3dSWmp1dHAwWVBiTmZsQjk0UVVoTUJNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktEd2MwN01SOGFybStqQndFbndTQ0xYbndxR3E2YWRSWjFXYlBmYnNXb01DcHI4WU1HSk1wTzdiWGRUSFZkSjlWUVpxYStFNkE3c3cwU0wwTUFxbUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxSV2djNktqbktPSUR5dUYyak9wUGVISEZ3dlhmNXRwbjl1S2J4S1Y5QTJxd1hvZGUzaEIzbVJ5dzBzYmhZcTRleUpOaFZzcC80ejlJUnRWLzc0WGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTgwMDE1Njk6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU0MTQyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1XNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVc1Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
