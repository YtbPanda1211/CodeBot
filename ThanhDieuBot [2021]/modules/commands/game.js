module.exports.config = {
  name: "game",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "JGD & mod by HĐGN",
  description: "Oẳn tù tì",
  commandCategory: "Game",
  usages: "✌ ✊ 🖐 hoặc kéo búa bao",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args, Users, Currencies}) {
  const { threadID, messageID, senderID } = event;
var data = await Currencies.getData(event.senderID);
var money = data.money
if (args.join() == "") { api.sendMessage(`Sử dụng ${global.config.PREFIX}game [1 trong các ký hiệu sau đây]`,threadID, () =>
{
api.sendMessage("✌ hoặc kéo",threadID,messageID)
api.sendMessage("✊ hoặc búa",threadID,messageID)
api.sendMessage("🖐 hoặc bao",threadID,messageID)
}
,messageID)
}
else {
if ( args[0] == "🖐" || args[0] == "bao" )
{ var aa = "🖐"
var a = 2 }
if ( args[0] == "✌" || args[0] == "kéo" )
{ var aa = "✌"
var a = 0 }
if ( args[0] == "✊" || args[0] == "búa")
{var aa = "✊"
 var a = 1 }
var b = Math.floor(Math.random() * 2);
if (b == 0 ) { var ba = "✌" }
if (b == 1 ) { var ba =  "✊" }
if (b == 2 ) { var ba = "🖐" }
if ( b == 2 && a == 0 ) return api.sendMessage( `ＶＩＣＴＯＲＹ
Player: ${aa}
Bot: ${ba} 
`,threadID,messageID);
if ( b == 0 && a == 2 ) return api.sendMessage( `ＬＯＳＥ
Player: ${aa}
Bot: ${ba} 
`,threadID,messageID);
else if ( a > b ) return api.sendMessage( `ＶＩＣＴＯＲＹ
Player: ${aa}
Bot: ${ba} 
`,threadID,messageID);
else if ( a < b ) return api.sendMessage( `ＬＯＳＥ
Player: ${aa}
Bot: ${ba} 
`,threadID,messageID);
if ( a == b ) return api.sendMessage( `Game Over
Player: ${aa}
Bot: ${ba} 
`,threadID,messageID);
else {
api.sendMessage("Sai cú pháp!",threadID,messageID)
}
}
};
