const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "infoadmin",
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

module.exports.run = async({api,event,args,client,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁Admin Bot梁\n
\n👀 Tên Admin: Đặng Quốc Khánh
❎ Tuổi: 1x
👤Giới tính: Nam
💫 Chiều cao cân nặng: 1m70 60 kg
🐶 Username: KhanhTay5080
☎️Phone Number: 0376.689.867
🐧UID: 16105176
😎 Quê quán: An Giang
🌸 Tính cách: Cutee, Dễ Thương, Thân Thiện
🌀 Sở thích: Thích Thùy Linh
💘 Mối quan hệ: Đã Kết Hôn Với Thùy Linh
🔗Profile: https://www.facebook.com/profile.php?id=16105176`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${16105176}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
       fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };