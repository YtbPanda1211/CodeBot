module.exports.config = {
	name: "nsfw_avatar",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh nsfw_avatar",
	commandCategory: "Hình Ảnh",
	usages: "nsfw_avatar",
	cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://nekos.life/api/v2/img/nsfw_avatar').then(res => {
	let anh = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/nr.${anh}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nr.${anh}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nr.${anh}`)).on("close", callback);
			})
}