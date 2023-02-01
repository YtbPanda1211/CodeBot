module.exports.config = {
	name: "gioithieu",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Dũngkon",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Thông tin adminbot", 
	usages: "gioithieu [thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("🌸thông tin ThanhDieuPC ❤️\n👱Người chạy bot: Vương Thanh Diệu ❤️\n🔗Link Fb: https://www.facebook.com/ThanhDieuPC\n🔗Zalo: 0589695624\n📱SĐT: 0968091844\n📬Gmail: Vuongthanhdieu2k2@gmail.com\n💵Tk Momo: 0968091844\n💵Tk Vietinbank: 107873856811 \n👦Tên Thật: Đỗ Hoài Khương\n👦Biệt Danh: ThanhDieuTV\n🗓Ngày Tháng Năm Sinh: 13/06/2002\n📏Chiều Cao: 1m70\n💣Cân Nặng: 55kg\n✔️Sở Thích: Ngoài Mollu Khong Thích Gì Cả\n🔔Tính Cách: Cutee , Dễ Thương , Hiền Lành , Thân Thiện \n💻Ước mơ: Giang hồ chợ búa\n👫Đã Kết Hôn Với Lê Nguyễn Trân Châu\n💞Cảm ơn mọi người đã sử dụng bot của mình\n💞P/s: Chúc mọi người một ngày tốt lành",event.threadID, event.messageID);
	}
}