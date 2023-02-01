module.exports.config = {
	name: "autoban",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "tự động cấm người dùng nếu spam bot 10 lần/phút",
	commandCategory: "system",
	usages: "x",
	cooldowns: 0
};

module.exports. run = ({api, event}) => {
  return api.sendMessage("tự động cấm người dùng nếu spam bot 10 lần/phút", event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Users, api, event}) => {
  let { senderID, messageID, threadID } = event;
  
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = threadSetting.PREFIX || global.config.PREFIX;
	if (!event.body || event.body.indexOf(prefix) != 0) return;
	
	if ((global.client.autoban[senderID].timeStart + 120000) <= Date.now()) {
	  global.client.autoban[senderID] = {
	    timeStart: Date.now(),
	    number: 0
	  }
	}
	else {
	  global.client.autoban[senderID].number++;
	  if (global.client.autoban[senderID].number >= 10) {
	    const moment = require("moment-timezone");
	    const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
			let dataUser = await Users.getData(senderID) || {};
			let data = dataUser.data || {};
			if (data && data.banned == true) return;
			data.banned = true;
			data.reason = null;
			data.dateAdded = timeDate;
			await Users.setData(senderID, { data });
			global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
			global.client.autoban[senderID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
  		api.sendMessage(senderID + " | " + dataUser.name + "\n > Bạn đã bị cấm sử dụng với lý do: spam bot 10 lần và sẽ tự động gỡ ban sau 120s\n\nLiên hệ Admin:https://www.facebook.com/ThanhDieuPC/", threadID);
  		for (let idAdmin of global.config.ADMINBOT) {
  		api.sendMessage("Đã tự động ban người dùng \n " + senderID + " | " + dataUser.name + "\nLý do: Spam bot 10 lần/120s\nThời gian: " + timeDate, idAdmin);
		  };
	  }
	}
};
