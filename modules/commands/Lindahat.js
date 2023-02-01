module.exports.config = {
name: "Lindahat",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "LindaHat",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Linda")==0 || (event.body.indexOf("linda")==0)) {
		var msg = {
				body: "Mình yêu nhau nka cậu",
				attachment: fs.createReadStream(__dirname + `/noprefix/video-1640661529.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}