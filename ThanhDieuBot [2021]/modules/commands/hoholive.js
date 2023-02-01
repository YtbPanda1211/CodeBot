const module.exports.config = {
    name: "hoholive",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VĐT&NTH",
    description: "Random Api Loli của Hà Phế",
    commandCategory: "OTHER",
    usages: "[rushia/pekora/coco/gura/marine]",
    cooldowns: 0,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "path": ""
    }
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { threadID, messageID } = event;
  var type;
  switch(args[0]) {
    case "rushia":
    type = "rushia";
    break;
    case "pekora":
    type = "pekora";
    break;
    case "coco": 
    type = "coco";
    break;
    case "gura": 
    type = "gura";
    break;
    case "marine":
    type = "marine";
    break;
    default:
    return api.sendMessage(`Các Tag HoHoLive\nrushia, gura, coco, marine, pekora`, threadID, messageID);
    break;
  }
axios.get(`https://img-hololive-api.up.railway.app/${type}`).then(res => {
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        body: "",
                        attachment: fs.createReadStream(__dirname + `/cache/${type}.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${type}.${ext}`), event.messageID);
                };
                request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/${type}.${ext}`)).on("close", callback);
            })
}
