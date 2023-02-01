module.exports.config = {
	name: "sex2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "kkk",
	description: "kkk",
	commandCategory: "kkk",
	usages: "kkk",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://sex.ttktrungkien.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/sex2.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sex2.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sex2.${ext}`)).on("close", callback);
			})
}