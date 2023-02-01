module.exports.config = {
	name: "pwankg",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh pwankg",
	commandCategory: "Hình Ảnh",
	usages: "pwankg",
	cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://nekos.life/api/v2/img/pwankg').then(res => {
	let anh = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/pwankg.${anh}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pwankg.${anh}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/pwankg.${anh}`)).on("close", callback);
			})
}