const request = global.nodemodule['request'];
const fs = global.nodemodule['fs']

module.exports.config = {
  name: "nu",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "Dũngkon",
  description: "xem ảnh nữ",
  commandCategory: "ảnh",                                                                                                                                                                                                       usages: "địt [tag người bạn cần địt]",
  cooldowns: 5,
  dependencies: {
    "request": "",
  "fs": ""
}
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  global
}) {
  return request('https://4boxvn.com/api/gai', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let callback = function() {
      api.sendMessage({
        body:  "ảnh nữ",
        attachment: fs.createReadStream(__dirname + `/cache/nu.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nu.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/nu.${ext}`)).on("close", callback);
  });
}