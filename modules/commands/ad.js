const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({ api, event, args ,client, Users, global, Currencies }) => {
   if (args.join() == "") {api.sendMessage("Bot hiện đang có  1 admin\n👉Sử dụng ,adbot 1 để xem tt admin 1\n👉Sử dụng ,adbot 2 để xem tt admin 2\n👉Sử dụng ,adbot 3 để xem tt admin 3",event.threadID, event.messageID);
    }
    const moment = require("moment");
  var time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss || DD/MM/YYYY");
    var data = await api.getUserInfo(event.senderID);
     var name = await data[event.senderID].name
if (args[0] == "1") {
  api.sendMessage({
    body:`👋Hi ${name}\n\n🕐Bây giờ là: ${time}\n\n💭Và Bạn đang xem thông tin admin Khánh Cutee \n\n梁𝙘𝙝𝙪̉ 𝙗𝙤𝙩梁\n
    \n👀 Tên: Đặng Quốc Khánhh
    \n👤 😶 Giới tính: Nam
    \n🐶 Username : Cập Nhập Sao
    \n🐧UID: 
    \n✅Liên hệ: https://www.facebook.com/`,
    attachment: fs.createReadStream(__dirname + "/cache/admin/1.png")}, event.threadID)
       }
       else if (args[0] == "2") {
         api.sendMessage({
    body:`👋Hi ${name}\n\n🕐Bây giờ là: ${time}\n\n💭Và Bạn đang xem thông tin admin Cập Nhập Sao \n\n梁𝙘𝙝𝙪̉ 𝙗𝙤𝙩 2梁\n
    \n👀 Tên: Cập Nhập Sao
    \n👤 😶Giới tính: Cập Nhập Sao
    \n🐶 Username: Cập Nhập Sao
    \n🐧UID: Cập Nhập Sao
    \n✅Liên hệ: https://www.facebook.com/profile.php?id=`,
    attachment: fs.createReadStream(__dirname + "/cache/admin/2.png")}, event.threadID)
       }
       else if (args[0] == "3") {
        api.sendMessage({
    body:`👋Hi ${name}\n\n🕐Bây giờ là: ${time}\n\n💭Và Bạn đang xem thông tin admin \n\n梁ɴɢườɪ ʏêᴜ ᴄʜủ ʙᴏᴛ梁\n
    👀 Tên: Nguyễn Thùy Linh
    \n👤 😶 Giới tính: Nữ
    \n🐶 Username: ntlinh01025
    \n🐧UID: 100056847347510
    \n✅Liên hệ: https://www.facebook.com/profile.php?id=100056847347510 `,
      attachment: fs.createReadStream(__dirname + "/cache/admin/3.png")}, event.threadID)
       };
     }