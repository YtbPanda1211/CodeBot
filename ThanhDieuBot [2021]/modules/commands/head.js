const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "head",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "VĐT&NTH",
  description: "vỗ người bạn tag",
  commandCategory: "hình ảnh",
  usages: "vỗ [tag người bạn vỗ]",
  cooldowns: 5,
  dependencies: {"request": "","fs": ""}
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  global
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa tag người bạn muốn vỗ");
  else
  return request('https://nekos.life/api/v2/img/pat', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ", Xoa đầu nhó🥰 ",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
  });
}