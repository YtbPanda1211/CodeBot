const fs = require("fs");
module.exports.config = {
name: "Ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũngkon",
	description: "nguuuuu",
	commandCategory: "noprefix",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
		var msg = {
			body:`Mày nói đúng rồi đấy nó ngu vcl`,
				attachment: fs.createReadStream(__dirname + `/noprefix/ngu.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
