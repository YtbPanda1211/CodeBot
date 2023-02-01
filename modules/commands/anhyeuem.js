module.exports.config = {
    name: "anhyeuem",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "anhyeuem @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn nói yêu", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Start");
setTimeout(() => {a({body: "Babi Ơi Anh Yêu Em" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "Vợ Ơi Anh Nhớ Em" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Cục Cưng Ơi" + " " + name, mentions: arraytag})} , 11000);
setTimeout(() => {a({body: "Anh Rất Yêu Em ❤" + " " + name, mentions: arraytag})} , 15000);
setTimeout(() => {a({body: "Bé Ơi Anh Yêu Bé" + " " + name, mentions: arraytag})} , 20000);
setTimeout(() => {a({body: "Em Yêu Ơi" + " " + name, mentions: arraytag})} , 24000);
setTimeout(() => {a({body: "I Love You❤" + " " + name, mentions: arraytag})} , 28000);
setTimeout(() => {a({body: "Honey Ơi Anh Yêu Em" + " " + name, mentions: arraytag})} , 32000);
setTimeout(() => {a({body: "Bae Ơi" + " " + name, mentions: arraytag})} , 36000);
setTimeout(() => {a({body: "Chồng Nhớ Em" + " " + name, mentions: arraytag})} , 40000);
setTimeout(() => {a({body: "Anh Rất Là Yêu Em❤" + " " + name, mentions: arraytag})} , 44000);
setTimeout(() => {a({body: "Anh Yêu Em Siêu Too" + " " + name, mentions: arraytag})} , 48000);
setTimeout(() => {a({body: "Này Vợ Ơi" + " " + name, mentions: arraytag})} , 52000);
setTimeout(() => {a({body: "I Miss You 🥺" + " " + name, mentions: arraytag})} , 56000);
setTimeout(() => {a({body: "Công Chúa À Anh Rất Yêu Em❤" + " " + name, mentions: arraytag})} , 60000);
setTimeout(() => {a({body: "Chồng Yêu Em Rất Nhiều❤" + " " + name, mentions: arraytag})} , 64000);
 }