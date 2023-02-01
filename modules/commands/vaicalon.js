module.exports.config = {
name: "vaicalon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "vaicalon",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("vãi")==0 || (event.body.indexOf("Vãi")==0)) {
		var msg = {
				body: "ditme vãi cả lồn !!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2meta.com - PewPew Sound Effect Vãi Cả Lồn   YouTube 720p.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}