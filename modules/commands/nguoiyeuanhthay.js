const fs = require("fs");
module.exports.config = {
name: "người yêu anh thấy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Bao Long",
	description: "người yêu anh thấy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("nhớ em")==0 || (event.body.indexOf("Nhớ em")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/nguoiyeuanhthay.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}