module.exports.config = {
  name: "menu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoàng",
  description: "menu đó",
  commandCategory: "menu",
  usages: "menu",
  cooldowns: 1,
  dependencies: {}
};

module.exports.run = async({ api, event, client, global, Currencies }) => {
 var job = [ 'có thể bạn đã biết, là bạn ngu hơn tôi', 'tôi là bot siêu cấp và tôi chả sài menu rẻ jack hiểu chưa', 'tôi khôn hơn bạn đó vì tôi biết có thằng ngu vừa nói menu :đ', 'bây giờ bạn đã biết bot này không có menu', 'menu là một thứ vô dụng','menu con cặc','đéo có menu đâu','menu đổi thành help rồi','thời nào rồi còn sài menu','menu menu cái lồn menu con cặc','bạn ngu vãi lồn vì bot này có cái con cặc lệnh menu =))','bucu tao đi rồi có menu','menu CÁI CON CẶC LIỆT DƯƠNG','menu cái đéo gì menu lắm','Admin bot có tên là ThanhDieuTV ok','admin bot đẹp trai nhất box và lệnh menu đéo có ok','NGU NHƯ M QUÊ TAO CHẢ AI DÁM XÍCH SỢ XÍCH M RỒI LẠI LÂY BỆNH NGU CHO CẢ LÀNG','show vú đi rồi cho xem menu','show lồn đi rồi cho xem menu' ];
    api.sendMessage(` ` + job[Math.floor(Math.random() * job.length)] , event.threadID, event.messageID);
  };

  