module.exports.config = {
  name: "offbot",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DuyVuongUwU",
  description: "tắt bot đi ngủ",
  commandCategory: "Admin",
  cooldowns: 5,
  dependencies: {
       "eval": ""
    }
}

module.exports.handleReaction = async ({ event, api, handleReaction, Currencies}) => {
  if (event.userID != handleReaction.author) return;
  if (event.reaction != "👍") return; 
  const eval = require("eval");
  return api.sendMessage("OFFLINE....", event.threadID, () => eval("module.exports = process.exit()", true), event.messageID);
}
module.exports.run = async ({ event, api }) => {
api.sendMessage(`Bạn có muốn off bot trong lúc này không, reaction tin nhắn này để xác nhận:\n👍 : đồng ý`, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
}