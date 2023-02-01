module.exports.config = {
	name: "taoanhbia",
	version: "1.0.0",
	hasPermssion: 0,
	credits: " ",
	description: "Tạo avatar alime siêu vip pro bắt chước taoanhdep.com",
	commandCategory: "Hình Ảnh",
	usages: "Chua Nghi Ra",
	cooldowns: 5
	dependencies: {
        "axios": ""
    },
};

module.exports.run = async ({ api, event, args, Users, sequelize, Sequelize }) => {
	const axios = global.nodemodule["axios"];
	const request = global.nodemodule["request"];
	const fs = global.nodemodule["fs-extra"];
	var ten =
	var bd = 
	var fb = 
	var phone =
	var noi = 
	var ist = 
	var link = 
	/** khai bao lay du lieu */
    var { data } = await axios.get(encodeURI( "https://goatbot.tk/taoanhdep/banner2?apikey=vodinhthanh" + "&name=" + ten + "&description=" + bd + "&facebook=" + fb + "&phone=" + phone + "&location=" + noi + "&instagram=" + ist + "&avatarurl=" + link)).then(res => {
	if (data.error == invalid your key) return api.sendMessage(data.message + "Key Ban Da Nhap:  " + data.message, event.threadID);
	let anh = res.data.substring(res.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: 'Hoàn Thành Việc Tạo Ảnh Bìa',
						attachment: fs.createReadStream(__dirname + `/cache/tab.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tab.${ext}`), event.messageID);
				};
				request(res.data).pipe(fs.createWriteStream(__dirname + `/cache/tab.${ext}`)).on("close", callback);
			})
		}