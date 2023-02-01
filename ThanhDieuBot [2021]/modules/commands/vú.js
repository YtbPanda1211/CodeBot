module.exports.config = {
  name: "vú",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "hihi",
  description: "ảnh...",
  commandCategory: "media",
  usages: "",
  cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  axios.get('http://trungkien.tk/apiv1/nude.php').then(res => {
  let anh = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body:`;))`,
            attachment: fs.createReadStream(__dirname + `/cache/tl.${anh}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tl.${anh}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/tl.${anh}`)).on("close", callback);
      })
}