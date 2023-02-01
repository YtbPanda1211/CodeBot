module.exports.config = {
name: "tham lam",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "tham lam",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("sợ")==0 || (event.body.indexOf("Sợ")==0)) {
		var msg = {
				body: "a a a sợ quá sợ quá ...",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2meta.com - Độ Mixi - Sợ quá sợ quá phải band nó thôi - Khoảnh khắc hài hước Độ Mixi.mp4`)
			}
			return api.sendMessage(msg, threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 10000), messageID);
		}
	}
	module.exports.run = function({ api, event }) {

}