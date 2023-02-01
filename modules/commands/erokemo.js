module.exports.config = {
	name: "erokemo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh erokemo",
	commandCategory: "Hình Ảnh",
	usages: "erokemo",
	cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://nekos.life/api/v2/img/erokemo').then(res => {
	let anh = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/erokemo.${anh}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/erokemo.${anh}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/erokemo.${anh}`)).on("close", callback);
			})
}