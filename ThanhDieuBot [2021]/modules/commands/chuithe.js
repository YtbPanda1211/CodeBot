module.exports.config = {
name: "chuithe",
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
	if (event.body.indexOf("Cc")==0 || (event.body.indexOf("Sủa")==0)) {
		var msg = {
				body: "Chửi thề con cặc thằng vô văn hóa !!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/chuithe.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}