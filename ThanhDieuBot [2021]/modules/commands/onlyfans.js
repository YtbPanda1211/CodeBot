module.exports.config = {
	name: "onlyfans",
	version: "2.0.9",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "img onlyfans.-.",
	commandCategory: "random-img",
	usages: "onlyfans",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
	axios.get('https://api.leanhtruong.com/img/onlyfans/index.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/videosex.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/videosex.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/videosex.${ext}`)).on("close", callback);
			})
}