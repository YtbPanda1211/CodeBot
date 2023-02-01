module.exports.config = {
	name: "restartbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Đã nhận được lệnh restart từ cậu chủ sẽ quay trở lại sau vài phút....",event.threadID, () =>process.exit(1))