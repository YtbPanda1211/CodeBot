const fs = require("fs");
module.exports.config = {
	name: "ccyld",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Hà Nội ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hà Nội")==0 || (event.body.indexOf("hà nội")==0 || (event.body.indexOf("à nội")==0)) {
		var msg = {
				body: "Hà Nội Thiếu Em 🙄 ~",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanoi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}