module.exports.config = {
	name: "gaidep",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "Nhật UwU",
	description: "Random ảnh có phí",
	commandCategory: "Ảnh Gái Thôi",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 2000) {
		axios.get('https://apihvvk.herokuapp.com/api/gai.php').then(res => {
		var callback = function () {
					api.sendMessage({
						body : `Gì ngắm gái hả ảnh nè ngắm đi =))\nSố dư: -2000`,
						attachment: fs.createReadStream(__dirname + '/cache/gaidep.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/gaidep.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/gaidep.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 2000}));
			})
	} else return api.sendMessage("Nghèo bày đặc gái gú ?",event.threadID,event.messageID);
}