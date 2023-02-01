module.exports.config = {
    name: "supertag",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "JRT",
    description: "Tag liên tục 10 lần",
    commandCategory: "Nhóm",
    usages: "supertag",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID, senderID, mentions } = event;
var mention = Object.keys(mentions)[0];
setTimeout(() =>
api.sendMessage({
   body:"Super Tag Đã Sẵn Sàng !" + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID, messageID), 1000)
setTimeout(() =>
api.sendMessage("Start", threadID), 2000)

var a = Math.floor(Math.random() * 7);
if ( a==0 ) {
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2200)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 3000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 1000)
}
if (a==1) {
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 1000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 3000)
}
if (a==2) {
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 1000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body:" " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: " "+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
setTimeout(() =>
api.sendMessage({
   body: ""+ mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 1000)
setTimeout(() =>
api.sendMessage({
   body:"Em ngồi xem " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
}
if (a==3) {
setTimeout(() =>
api.sendMessage({
   body:"Anh tuổi trâu Thích cỏ non và chơi đồ cổ " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 2000)
 
}
setTimeout(() =>
api.sendMessage({
   body:"Kêu muốn ỉa trong quần!Bye " + mentions[mention].replace("@", "") ,
   mentions: [{
    tag: mentions[mention].replace("@", ""),
    id: mention
   }]
  }, threadID), 40000)
}
}