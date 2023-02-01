module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "game",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu on the my !");
setTimeout(() => {a({body: "123 cởi quần em ra" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "456 lột áo em ra" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "rồi bắt đầu anh xuất chiêu ra" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "tay bóp mông rồi tấn công lên vú" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "miệng thì bú còn tay thì mò chim" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "mắt lim dim em thì nằm im" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Em càng cưỡng anh càng bú thì em càng sướng" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "bú thật căng rồi anh cắn nhè nhẹ tay" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "chộp xuống gặp ngay cái hopre" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "tay anh xe miệng anh thì nuốt" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "anh lại tụt quần em ra" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Tụt rồi anh lại banh lồn em ra" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "Anh cầm củ chuối anh nhét vào bướm em." + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Râu tôm nấu với ruột bầu" + " " + name, mentions: arraytag})},37000);
setTimeout(() => {a({body: "Chồng địt, vợ bú" + " " + name, mentions: arraytag})},38000);
setTimeout(() => {a({body: "Một hồi mất trinh." + " " + name, mentions: arraytag})}, 39000);
  }