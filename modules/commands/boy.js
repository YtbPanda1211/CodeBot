module.exports.config = {
	name: "boy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH với sự Sp của DũngUwU",
	description: "Random ảnh trai có phí",
	commandCategory: "random-img",
	usages: "boy",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 1000) {
		axios.get('https://api.vangbanlanhat.tk/image?type=boy').then(res => {
		var callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + '/cache/boy.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/boy.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/boy.jpg')).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 6000})
			})
	} else return api.sendMessage("Trước khi xem trai, bạn cần 6000 đô đi đã, nghèo như chó trai với chả gái tao khinh 😏",event.threadID,event.messageID);
}
