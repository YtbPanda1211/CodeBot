module.exports.config = {
	name: "noprefix",
    version: "",
    hasPermssion: 0,
    credits: "Minhtien379 (Khánh Milo Fix)",
	commandCategory: "noprefix",
    description: "",
    commandCategory: ".",
    usages: ""
};

module.exports.run = function() {
}

module.exports.handleEvent = async function({ api, event, Users }) {
	
	
	if ((event.body == "lồn") || (event.body == "Lồn")){
		var name = (await Users.getData(event.senderID)).name;
		var job = ['Chửi thề thằng cha m.','Bố mẹ m ko dạy mày hả.','Có lồn ko mà kêu lồn cái cc','Lồn múp thật, lồn mẹ m cũng múp phết =))','Lồn? là lồn mẹ mày á hả','Có lồn ko show ra xem ké, chắc lại đen thui thâm như dái chó','Lồn cc, lồn đb','Lồn cái dmm, súc sinh.'];
			return api.sendMessage({ body : job[Math.floor(Math.random() * job.length)] + ' ' + `${name}` , mentions: [{ tag: name , id: event.senderID }]}, event.threadID, event.messageID);
	}
	
	
}
