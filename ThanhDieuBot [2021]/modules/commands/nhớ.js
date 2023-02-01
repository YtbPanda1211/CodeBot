const fs = require("fs");
module.exports.config = {
name: "Yêu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dungkon",
	description: "Yêu",
	commandCategory: "Yêu",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nhớ em")==0 || (event.body.indexOf("Anh nhớ em")==0)) {
		var msg = {
			body:'Anh Rất Nhớ Em Bé Ơi 🥺 ❤',
				attachment: fs.createReadStream(__dirname + `/noprefix/nho.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
