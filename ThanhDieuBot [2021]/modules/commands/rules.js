module.exports.config = {
	name: "rule",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "Thì là luật đó",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Điều khoản sử dụng bot trong box:
⚠ Vui lòng chấp hành nghiêm chỉnh để tránh bị hạn chế dùng lệnh ( user ban )
1: Không spam bot, lệnh bot quá nhiều lần.
2: Không gây war với bot ( modules sim ... ) vì đây không phải người dùng tương tác thật !
3: Không lạm dụng bot vào mục đích xấu.,...
4: Không chửi bot, spam bot liên tục, nó sẽ tự động out box và banned.
5: Đang cập nhật thêm...`, event.threadID, event.messageID);
