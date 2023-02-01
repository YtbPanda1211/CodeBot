module.exports.config = {
	name: "ping",
	version: "1.0.5",
	hasPermssion: 1,
	credits: "Mirai Team (mod by hoàng)",
	description: "tag toàn bộ thành viên",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 1
};

module.exports.run = async function({ api, event, args }) {
	try {
		const botID = api.getCurrentUserID();
		var listAFK, listUserID;
		global.moduleData["afk"] && global.moduleData["afk"].afkList ? listAFK = Object.keys(global.moduleData["afk"].afkList || []) : listAFK = []; 
		listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		listUserID = listUserID.filter(item => !listAFK.includes(item));
		var job = [ 'Thanh Diệu Gọi Các Em Hãy Có Mặt ', 'Dậy Tương Tác Đi Lũ Lười', 'Diệu Cute Gọi Dậy Nè', 'Bạn đã bị xóa khỏi nhóm vì quá chảnh ', 'Dậy Tương Tác Đi Các Em Ơiii'];
		var body = (args.length != 0) ? args.join(" ") : `${job[Math.floor(Math.random() * job.length)]}`, mentions = [], index = 0;
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}