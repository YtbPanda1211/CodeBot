const aaaa = 3600000
module.exports.config = {
    name: "ghepdoi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HĐGN",
    description: "Ghép đôi",
    commandCategory: "Game",
    cooldowns: 0,
envConfig: {
        cooldownTime: aaaa
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "Hãy có trách nhiệm với đối phương\nThử lại sau: %1 phút %2 giây."  },
    "en": {
    "cooldown": "Be responsible to your opponent \nTry again in: %1 minute(s) %2 second(s)."}
}




module.exports.run = async ({ event, api, Threads, Users,Currencies, getText }) => {
const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.ghepTime) > 0) {
        var time = cooldown - (Date.now() - data.ghepTime),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
else {
api.sendMessage("Đang tìm kiếm, vui lòng đợi...",event.threadID, async () => {
            data.ghepTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        },event.messageID)


  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
 let box = await api.getThreadInfo(event.threadID);
        var boxs = box.participantIDs;
var idbox= boxs[Math.floor(Math.random() * boxs.length)];
const namee = await Users.getNameUser(event.senderID);
const name = await Users.getNameUser(idbox);        var arraytag = [];
              arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: idbox, tag: name});
let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
let Avatar2 = (await axios.get( `https://graph.facebook.com/${idbox}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

api.sendMessage( {body: `Đã ghép đôi thành công!!\nTỉ lệ hợp đôi: ` + Math.floor(Math.random() * 100) +`%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove} , event.threadID, () => { fs.unlinkSync(__dirname + "/cache/avt.png")
fs.unlinkSync(__dirname + "/cache/avt2.png")
},event.messageID)
}
};