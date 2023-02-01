module.exports.config = {
	name: "china",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "china",
	commandCategory: "IMAGE",
	usages: "china",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.com/china').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/china.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/china.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/china.${ext}`)).on("close", callback);
			})
}
