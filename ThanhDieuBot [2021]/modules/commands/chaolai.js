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
	
	
	if ((event.body == "Love") || (event.body == "love") || 
		(event.body == "Hello") || (event.body == "hello") || 
		(event.body == "Uk") || (event.body == "uk") || 
		(event.body == "Yêu") || (event.body == "yêu") || 
		(event.body == "Kkkk") || (event.body == "kkkk") || 
		(event.body == "Chào") || (event.body == "chào") || 
		(event.body == "Hj") || (event.body == "hj") || 
		(event.body == "Á đù") || (event.body == "á đù") || 
		(event.body == "Hí") || (event.body == "hí") || 
		(event.body == "Kkk") || (event.body == "kkk") || 
		(event.body == "Dmm") || (event.body == "dmm") ||
		(event.body == "Ế") || (event.body == "ế") ||
		(event.body == "Lồn") || (event.body == "lồn") ||
		(event.body == "Đb") || (event.body == "đb") ||
		(event.body == "Dcm") || (event.body == "dcm") ||
		(event.body == "Buồn") || (event.body == "buồn") ||
		(event.body == "Hihi") || (event.body == "hihi") ||
		(event.body == "Lô") || (event.body == "lô") || 
		(event.body == "Adu") || (event.body == "adu") ||
		(event.body == "Haizz") || (event.body == "haizz") ||
		(event.body == "Helo") || (event.body == "helo") || 
		(event.body == "Hé lô") || (event.body == "hé lô") || 
		(event.body == "Lô mn") || (event.body == "lô mn") || 
		(event.body == "Hello mn") || (event.body == "hello mn") || 
		(event.body == "Hi mn") || (event.body == "hi mn") || 
		(event.body == "Hú") || (event.body == "hú") || 
		(event.body == "Alo") || (event.body == "alo") || 
		(event.body == "Vãi") || (event.body == "vãi") ||
		(event.body == "Hay") || (event.body == "hay") ||
		(event.body == "Ok") || (event.body == "ok") ||
		(event.body == "Má") || (event.body == "má") ||
		(event.body == "Lo") || (event.body == "lo") || 
		(event.body == "Hù") || (event.body == "hù")){
		var name = (await Users.getData(event.senderID)).name;
		var job = ['Hi, chúc bạn một ngày vui vẻ [Fb: @ThanhDieu]'];
			return api.sendMessage({ body : job[Math.floor(Math.random() * job.length)] + ' ' + `${name}` , mentions: [{ tag: name , id: event.senderID }]}, event.threadID, event.messageID);
	}
	
	
}
