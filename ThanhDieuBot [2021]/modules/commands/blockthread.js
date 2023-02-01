  module.exports.config = {
	name: "blockthread",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Cấm hoặc gỡ cấm nhóm",
	commandCategory: "system",
	usages: "Out khi gặp nhóm bị ban",
	cooldowns: 5,
info: [
		{
			key: 'args => block',
			prompt: 'Nhập input là ID thread cần block',
			type: 'Number',
			example: '100000'
		},
		{
			key: 'args => unblock',
			prompt: 'Nhập input là ID thread cần unblock',
			type: 'Number',
			example: '100000'
		},
		{
			key: 'args => search id thread',
			prompt: 'Nhập input là từ khoá cần tìm thread',
			type: 'String',
			example: 'khu'
		}
	]
};
module.exports.run = async function({ 
	event, 
	api, 
	args, 
	client, 
	Currencies, 
	Users, utils, 
	__GLOBAL, 
	reminder, 
	Threads}) {
	let threadsBan = client.threadBanned || [];
  if event.thread = threadBan {
var threadBan = ["tID1","tID2"]
const moment = require("moment-timezone");
var today = new Date()
var content = args.join(" ")
if (event.messageReply) {name = event.messageReply.body}
else name = args[0]
let hii = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
var date = today.getDate()+ '/' +(today.getMonth()+1)+ '/' +today.getFullYear();
var msg = "Nhóm của bạn đã bị ADMIN ban từ trước nên bot sẽ tự động out\nTạm biệt !";
var hihi = global.config.ADMINBOT;
var admin = hihi.split(" ");
let threadInfo = await api.getThreadInfo(name || event.threadID)
var out = (!name) ? api.sendMessage(msg, event.threadID, () => 
api.removeUserFromGroup(api.getCurrentUserID(), event.threadID)) :  
api.removeUserFromGroup(api.getCurrentUserID(), event.threadID) :  
api.sendMessage(msg, name, () => 
api.removeUserFromGroup(api.getCurrentUserID(), name))
           for(let i in admin){
  api.sendMessage(msgg, admin[i]);
}

}