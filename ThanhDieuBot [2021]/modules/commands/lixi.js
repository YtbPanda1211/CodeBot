module.exports.config = {
name: "/lixi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Li xì à",
	commandCategory: "NoCầnPrefix",
	usages: "ko cần prefix chỉ cần chat lì xì",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("lì xì")==0 || (event.body.indexOf("Lì xì")==0)) {
		var msg = {
				body: "Lì xì cc",
				attachment: fs.createReadStream(__dirname + `/noprefix/lixicailol.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

