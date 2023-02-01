module.exports.config = {
name: "Thanhdieu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Buồn KKK",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ê")==0 || (event.body.indexOf("ê")==0)) {
		var msg = {
				body: "Bạn thật dễ thương Moah",
				attachment: fs.createReadStream(__dirname + `/noprefix/td.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}