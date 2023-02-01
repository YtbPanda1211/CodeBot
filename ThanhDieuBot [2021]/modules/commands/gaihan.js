const request = global.nodemodule['request'];
const fs = global.nodemodule['fs']

module.exports.config = {
  name: "gaihan",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "Dũngkon ",
  description: "xem ảnh nude gái hàn",
  commandCategory: "ảnh",                                                                                                                                                                                                       usages: "",
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
  return request('https://api.leanhtruong.com/img/Korea/nude_korea.php', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let callback = function() {
      api.sendMessage({
        body:  "ảnh nude gái",
        attachment: fs.createReadStream(__dirname + `/cache/gaihan.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaihan.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/gaihan.${ext}`)).on("close", callback);
  });
}