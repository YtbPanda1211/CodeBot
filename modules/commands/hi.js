
module.exports.config = {
name: "hi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũng UwU",
	description: "hi",
	commandCategory: "NoPrefix",
	usages: "noprefix",
	cooldowns: 5,
	dependencies: {
        "fs-extra": ""
    }
};
module.exports.handleEvent = async({ api, event, Users }) => {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID, senderID } = event;
	var tag = (await Users.getData(senderID)).name;
	let output = "Xin chào ";
	let varinput = [ "hi", "Hi", "hello", "Hello", "Lô", "lo", "alo", "Alo" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		return api.sendMessage({body: output + tag + '\n Hôm nay bạn có khỏe không ? ❤',
		mentions:[{
			tag: tag,
			id: senderID
		}]}, threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
}