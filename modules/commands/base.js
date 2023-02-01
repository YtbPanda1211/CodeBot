module.exports.config = {
  name: "base",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HungCho",
  description: "Reset data",
  commandCategory: "Other",
  usages: "",
  cooldowns: 0,
  dependencies: ["node-cmd"]
};

module.exports.run = async({api,event,args,Threads,Users}) => {
if(!args[0]) api.sendMessage("Thiếu dữ kiện cần thiết !\r\ndel || add",event.threadID,event.messageID);
 if(args[0] == 'del'){
  if(!args[1]) api.sendMessage("user || thread");
   if(args[1] == 'thread'){
 	if(!args[2]) {
 	 var content = event.threadID;
 	}
 	   else content = args[2];
 	    let data = await Threads.getData(content);
	     if (!data) return api.sendMessage(`${content} không tồn tại trong database!`, event.threadID);
	     else{
	     Threads.delData(event.threadID);
          var name = (await Threads.getData(content)).name
           var cmd = require("node-cmd");
            let {messageID, senderID, threadID, body } = event;
            return api.sendMessage("Đã xoá dữ liệu của nhóm " + content + " || " + name + " trong database ! Bot sẽ khởi động lại để áp dụng..", threadID, () => cmd.run("pm2 restart 0"), messageID);
         }
   }
if(args[1] == 'user'){
 if (args.join().indexOf('@') !== -1){
   mentions = Object.keys(event.mentions)}
    else mentions = args[2];
    let data = await Users.getData(mentions);
	if (!data) return api.sendMessage(`${mentions} không tồn tại trong database!`, event.threadID);
	else{
     Users.delData(mentions)
     var name = (await Users.getData(mentions)).name
      var cmd = require("node-cmd")
       let {messageID, senderID, threadID, body } = event;
        return api.sendMessage("Đã xoá dữ liệu của user " + mentions + " || " + name + " trong database ! Bot sẽ khởi động lại để áp dụng..", threadID, () => cmd.run("pm2 restart 0"), messageID);
        }
     }
  }
}