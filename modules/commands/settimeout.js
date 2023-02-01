module.exports.config = {
  name: "settimeout",
  version: "1.0.5",
  hasPermssion: 1,
  credits: "HĐGN",
  description: "out theo time đc set",
  commandCategory: "cc",
  usages: "cc",
  cooldowns: 0
};
 module.exports.run = async ({ api, event, args }) => {
  var { senderID,threadID,messageID} = event;
  var msg = args.splice(0).join("");
   api.sendMessage("Đã kích hoạt!\nThời gian out:"+msg,threadID,messageID)
  setTimeout(()=>
    api.removeUserFromGroup(
    api.getCurrentUserID(),threadID),msg*1000)
 };