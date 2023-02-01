const fs = require("fs");
module.exports.config = {
	name: "bạn là nhất",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Thanh Diệu ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bạn là nhất")==0 || (event.body.indexOf("Bạn là nhất")==0)) {
		var msg = {
				body: "Thanh Diệu Nhất Bạn Rồi",
				attachment: fs.createReadStream(__dirname + `/noprefix/banlanhat.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}