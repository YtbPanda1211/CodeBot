module.exports.config = {
 name: "naughty",   
  version: "1.0.0",
 hasPermssion: 0,
 credits: "Zyros",
 description: "Naughty Rabbit uwu",
 commandCategory: "random-img",
 usages: "naughty",
 cooldowns: 5
};
module.exports. run = async ({ api, event }) => {
 const axios = global.nodemodule['axios'];
 const request = global.nodemodule['request'];
 const fs = global.nodemodule["fs"];
 axios.get(`https://zyros.glitch.me/naughty_rabbit`).then((res) => {
 let callback = function () {
 api.sendMessage({
                 body: `Author: ${res.data.author}`,
 attachment: fs.createReadStream(__dirname + `/cache/naughty.jpg`)
 }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naughty.jpg`), event.messageID);
 };
 request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/naughty.jpg`)).on("close", callback);
 })
};