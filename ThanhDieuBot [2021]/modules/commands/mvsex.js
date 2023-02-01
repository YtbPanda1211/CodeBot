module.exports.config = {
  name: "mvsex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "hihi",
  description: "Những clip  Ngắn",
  commandCategory: "media",
  usages: "",
  cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  axios.get('http://trungkien.tk/sex.php').then(res => {
  let anh = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body:`:^)`,
            attachment: fs.createReadStream(__dirname + `/cache/tl.${anh}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tl.${anh}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/tl.${anh}`)).on("close", callback);
      })
}