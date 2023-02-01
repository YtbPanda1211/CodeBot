module.exports.config = {
	name: "warns",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "NTKhang & Editor By DuyVuong",
	description: "Cảnh cáo thành viên  đủ 3 lần sẽ ban khỏi nhóm (nhớ set qtv cho bot nha)\nAuthor: NTKhang",
	commandCategory: "group",
	cooldowns: 5,
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client, permssion }) {
let {messageID, threadID, senderID} = event;
	var info = await api.getThreadInfo(threadID);
	var fs = require("fs-extra");
	
	if (!fs.existsSync(__dirname + `/cache/datawarn.json`)) {
			const dataaa = {warns: {}, banned: {}};
			fs.writeFileSync(__dirname + `/cache/datawarn.json`, JSON.stringify(dataaa));
					}
  var datawarn = JSON.parse(fs.readFileSync(__dirname + `/cache/datawarn.json`)); //đọc nội dung file
  /*
  {warns: {}, banned: {tid: []}};
  */
  if(!datawarn.warns.hasOwnProperty(threadID)) {
			datawarn.warns[threadID] = {}; 
			fs.writeFileSync(__dirname + `/cache/datawarn.json`, JSON.stringify(datawarn, null, 2));
  	
  }
  if (permssion == 0) var dd = 1;
  else var dd = 2;
if (dd == 2) {
	var dtwbox = datawarn.warns[threadID];
  		var allwarn = "";
  		for(let idtvw in dtwbox) {
  			var name = (await api.getUserInfo(idtvw))[idtvw].name, msg = "", solan = 1;
  			for(let reasonwtv of dtwbox[idtvw]) {
  				msg += `Lần ${solan++}: ${reasonwtv}\n`
  			}
  			allwarn += `${name}:\n${msg}\n`;
  		}
  		allwarn == "" ? api.sendMessage("Nhóm bạn chưa có ai bị cảnh cáo.", threadID, messageID) : api.sendMessage("Danh sách những thành viên đã bị cảnh cáo:\n\n"+allwarn, threadID, messageID);
}
else {
var msg = "";
  		var mywarn = datawarn.warns[threadID][senderID];
  		if(!mywarn) return api.sendMessage('Bạn chưa bị cảnh cáo lần nào.', threadID, messageID);
  		var num = 1;
  		for(let reasonwarn of mywarn) {
  			msg += `Lần ${num}: reasonwarn\n`;
  		}
  		api.sendMessage(`❎Bạn đã bị cảnh cáo ${mywarn.length} lần:\n\n${msg}`, threadID, messageID);
}
}