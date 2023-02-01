module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100035052735014") {
    var aid = ["100015345010929"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag ADMIN Tao Lần Nữa Bố Ban Mày","Tag chủ tao hoài vậy, không có tay inbox cho admin à?","Đã bảo đừng tag Admin mà, thích ăn đấm hả😠", "Đĩ mẹ mày thích tag Admin không con chó 😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }