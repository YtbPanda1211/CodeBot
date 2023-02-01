module.exports.config = { 	

	name: "outall", 	

	version: "1.0.0", 	
        hasPermssion: 2, 	
	credits: "Thanh Dz", 	
	description: "Rời Tất Cả Nhóm cùng lúc", 	
	commandCategory: "Admin", 	
	usages: "sendnoti [Text]", 	
	cooldowns: 5, 	
	info: [ 		{ 			
	key: "Text", 			
	prompt: "Rời Tất Cả Nhóm cùng lúc", 			
	type: 'Văn bản', 			
	example: 'Hello Em' 		} 	] }; module.exports.run = async ({ api, event, args }) => { 	
	return api.getThreadList(100, null, ["INBOX"], (err, list) => { 		if (err) throw err; 		
	list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? 
	api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : ''); 		
	api.sendMessage(' Đã out toàn bộ nhóm thành công', event.threadID); 	
}); 
}
