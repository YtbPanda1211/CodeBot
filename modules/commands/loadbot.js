module.exports.config={
	name:"loadbot",
	version:"1.0.0",
	hasPermssion:2,
	credits:"VĐT&NTH",
	description:"Bật Tắt Bot",
	commandCategory:"system",
	usages:"[on/off]",
	cooldowns:0
};
	module.exports.run=async({api:e,event:s,args:t})=>{
		switch(t[0]){case"fix":case"on":return e.sendMessage("Khởi động hoặc tắt bot",s.threadID,(()=>e.listenMqtt().stopListening()));case"stop":case"off":return e.sendMessage("Đã Tắt Bot",s.threadID,(()=>()=>process.exit(0)));case"start":case"on":return e.sendMessage("Đã Bật Bot",s.threadID);default:return e.sendMessage("Load lại Bot [on/off/stop/start]",s.threadID)}};
