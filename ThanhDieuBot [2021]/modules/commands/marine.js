module.exports.config = {
    name: "marine",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VĐT&NTH",
    description: "Random ảnh marine :))",
    commandCategory: "random-img",
    usages: "OTHER",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    axios.get('https://img-hololive-api.up.railway.app/marine').then(res => {
    let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/marine.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/marine.${ext}`), event.messageID);
                };
                request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/marine.${ext}`)).on("close", callback);
            })
}