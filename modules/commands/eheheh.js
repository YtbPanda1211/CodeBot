const fs = require("fs");
module.exports.config = {
name: "Ê",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "eheheh",
	commandCategory: "NoCầnPrefix",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ê")==0 || (event.body.indexOf("ê")==0)) {
		var msg = {
				attachment: fs.createReadStream(__dirname + `/noprefix/eheheh.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
