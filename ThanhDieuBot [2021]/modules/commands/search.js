module.exports.config = {
	name: "search",
	version: "2.0.5",
	hasPermssion: 2,
	credits: "HĐGN",
	description: "Tìm tên nhóm và tên người dùng theo từ khóa UwU",
	commandCategory: "group",
	usages: "search [nhóm/thread/-t] [thread],search [người dùng/user/-u] [user]",
	cooldowns: 0
};

module.exports.run = async ({ event, api, args, Threads, Users }) => {
    let content = args.slice(3, args.length);
	switch (args[0]) {
		case "nhóm":
		case "thread":
		case "-t": {
			let contentJoin = content.join(" ");
			let getThreads =  (await Threads.getAll(['threadID', 'threadInfo'])).filter(item => !!item.threadInfo);
			let matchThreads = [], a = '', b = 0;
			getThreads.forEach(i => {
				if ((i.threadInfo.threadName || "").toLowerCase().includes(contentJoin.toLowerCase())) {
					matchThreads.push({
						name: i.threadInfo.threadName,
						id: i.threadID
					});
				}
			});
			matchThreads.forEach(i => a += `\n${b += 1}. ${i.name}\n${i.id}`);
			(matchThreads.length > 0) ? api.sendMessage(`Đã tìm thấy ${b} nhóm:\n${a}`, event.threadID) : api.sendMessage("Nhóm này không tồn tại trong Database!", event.threadID);
			break;
		}

		case "người dùng":
		case "user":
		case "-u": {
var targetID = String(args[1]);
	var reason = (args.slice(3, args.length)).join(" ") || null;

	if (isNaN(targetID)) {
		const mention = Object.keys(event.mentions);
		args = args.join(" ");
		targetID = String(mention[0]);
		reason = (args.slice(args.indexOf(event.mentions[mention[0]]) + (event.mentions[mention[0]] || "").length + 1, args.length)) || null;
	}
			let contentJoin = reason;
			let getUsers =  (await Users.getAll(['userID', 'name'])).filter(item => !!item.name);
			let matchUsers = [], a = '', b = 0;
			getUsers.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchUsers.push({
						name: i.name,
						id: i.userID
					});
				}
			});
			matchUsers.forEach(i => a += `\n${b += 1}. ${i.name}\n${i.id}`);
			(matchUsers.length > 0) ? api.sendMessage(`Đã tìm thấy ${b} người dùng:\n${a}`, event.threadID) : api.sendMessage("Người dùng này không tồn tại trong Database!", event.threadID);
			break;
		}
		default: {
			return global.utils.throwError(this.config.name, event.threadID, event.messageID)
		}
	}
}