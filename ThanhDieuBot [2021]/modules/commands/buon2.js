module.exports.config = {
name: "buon2",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Buon2",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("kkk")==0 || (event.body.indexOf("Kkk")==0)) {
		var msg = {
				body: "HAHAHHAHAHAHAH ☺️",
				attachment: fs.createReadStream(__dirname + `/noprefix/khochuhu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}