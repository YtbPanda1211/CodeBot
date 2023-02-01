const fs = require("fs");
module.exports.config = {
name: "yamete kudasai",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "yamete kudasai",
	commandCategory: "NoCầnPrefix",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yamete kudasai")==0 || (event.body.indexOf("Yamete kudasai")==0)) {
		var msg = {
				attachment: fs.createReadStream(__dirname + `/noprefix/yamatekudasai.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
