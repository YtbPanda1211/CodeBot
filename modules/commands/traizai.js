module.exports.config = {
	name: "traidep",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "Nhật UwU",
	description: "Random ảnh có phí",
	commandCategory: "Ảnh Trai Đẹp Nhất Việt Nam ;))",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 200) {
		axios.get('https://api.vinhbeat.ga/trai.php').then(res => {
		var callback = function () {
					api.sendMessage({
						body : `Ngắm trai ít thôi nghiện hay gì =))`,
						attachment: fs.createReadStream(__dirname + '/cache/traizai.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/traizai.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/traizai.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 200}));
			})
	} else return api.sendMessage("Nghèo như chó xem cái con cặc.?",event.threadID,event.messageID);
}