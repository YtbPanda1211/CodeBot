module.exports.config = {
	name: "bo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Random ảnh Bo xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "OTHER",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api.vangbanlanhat.tk/image?type=DuckBo').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/bo.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bo.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/bo.${ext}`)).on("close", callback);
			})
}