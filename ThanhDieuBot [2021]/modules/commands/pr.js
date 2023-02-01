module.exports.config = {
	name: "pr",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "quy định bot ",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Điều khoản sử dụng bot trong box:
⚠ Vui lòng chấp hàn nghiêm chỉnh để tránh bị hạn chế dùng lệnh (  ban )
1: Không spam lệnh bot, spam prefix quá nhiều gây die bot,cp,getuser....
2: Không gây war với bot ( modules sim ... ) vì đây không phải người dùng tương tác thật !
3: Không lạm dụng bot vào mục đích xấu.,...
4: Không lạm dụng chức năng antiout để tránh việc bị mirai team gban
5: Không sử dụng acc bot trong box
6: Bot một khi đã out thì không vô lại lần 2
7: Thành viên dưới 18 dùng các lệnh nsfw mà bị QTV report sẽ bị ban vĩnh viễn (report bằng cách /callad 18+)
8: Đừng làm tao cáu
9: Lặp lại những điều trên

© Bot Made By Mirai Team `, event.threadID, event.messageID);
