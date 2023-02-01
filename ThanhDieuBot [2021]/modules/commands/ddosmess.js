module.exports.config = {
    name: "ddosmess",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Tag liên tục người bạn tag trong 30 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "Tag @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người cần tag", event.threadID);
 let name = event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Super Spam Lag Mess");
setTimeout(() => {a("Ra đây đi ")}, 5000);
}