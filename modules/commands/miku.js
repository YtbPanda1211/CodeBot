module.exports.config = {
	name: "miku",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Random ảnh Miku:))",
	commandCategory: "random-img",
	usages: "wibu",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://miku-for.us/api/v2/random').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/miku.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/miku.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/miku.${ext}`)).on("close", callback);
			})
}