module.exports.config = {
	name: "beo2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "beo2",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://trungkien.tk/beo.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/beo2.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/beo2.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/beo2.${ext}`)).on("close", callback);
			})
}