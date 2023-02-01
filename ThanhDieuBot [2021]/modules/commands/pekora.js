module.exports.config = {
    name: "pekora",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VĐT&NTH",
    description: "Random ảnh pekora :))",
    commandCategory: "random-img",
    usages: "OTHER",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    axios.get('https://img-hololive-api.up.railway.app/pekora').then(res => {
    let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pekora.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pekora.${ext}`), event.messageID);
                };
                request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/pekora.${ext}`)).on("close", callback);
            })
}