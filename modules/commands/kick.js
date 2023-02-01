module.exports.config = {
	name: "kick",
	version: "1.2.0", 
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Xoá người bạn cần xoá khỏi nhóm bằng cách tag",
	commandCategory: "other", 
	usages: "tag hoặc reply ib", 
	cooldowns: 0,
};

module.exports.run = function({ api, event }) {
	var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("Đã có lỗi xảy ra!",event.threadID);

if (event.type == "message_reply") {
api.removeUserFromGroup(event.messageReply.senderID,event.threadID)
 }
else if (!mention[0]) return api.sendMessage("Bạn phải tag người cần kick",event.threadID);

		if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!', event.threadID, event.messageID);
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	})
}