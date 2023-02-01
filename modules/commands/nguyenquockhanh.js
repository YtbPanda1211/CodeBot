/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "vuongthanhdieu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HĐGN",
  description: "ảnh trùm sub",
  commandCategory: "Random-img",
  usages: "sub",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.ibb.co/Wyd1PvM/Screenshot-2022-01-30-03-46-32-479.png",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 0 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`Facebook Của Vương Thanh Diệu 😼\n»https://www.facebook.com/DVFb.ThanhDieu«`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};