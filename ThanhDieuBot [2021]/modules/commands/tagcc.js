module.exports.config = {
name: "tagcc",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "JRT",
 description: "Tag adm thì ăn đấm nha",
 commandCategory: "Không dùng dấu lệnh",
 usages: "",
 cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
 var { threadID, messageID } = event;
        var tl = ["Tag cái địt mẹ mày tag tag cl", "Thằng nhóc tag ít thôi, không bố xuống nhà mày lặc lông lồn mẹ mày đấy.", "Tag cái con cụ mày, đéo có tay ib riêng à tag cái lồn con đỉ gái mẹ mày mất trinh, thằng cha mày ung thư dái.", "Tag gì thế nhóc? Tag gì thế hả em, Tin bố chém chết con đỉ mẹ mày không thằng chó", "Tag làm gì? Suốt ngày tag như khuyết tật vậy ?","Sao? Tag có việc gì? Tag thằng cha mày.","Tag cái lồn má mày chứ tag dòng thứ mỏ lồn ?","Thích tag ko :) tát vỡ mồm chứ tag","Tag gì lắm vậy? Bộ ko cho chủ tao xin phút gây bình yên à?","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Hiện tại Vương Thanh Diệu đang bận và cút mẹ mày đi đừng tag làm phiền","Tag tag cái địt cụ mày nay tao ăn chay không là Facebook mày vĩnh biệt cụ đấy !!","Show lồn đi rồi tag tiếp","Mày tuổi lol đồi tag sư phụ t, không được đâu nha xưa rồi diễm ơi.","Hư quá nha, hư quá trời hư, tag cái đầu bùi nha.","Mẹ mày khuyết tật à, tag cái cc, tag cái đầu khấc, phải t gần nhà mày là m chết con mẹ m với t rồi"];
        var rand = tl[Math.floor(Math.random() * tl.length)];
 if (event.body.indexOf("@Vương Thanh Diệu")==0 || (event.body.indexOf("@Thanh Diệu")==0)) {         //thay tên vào
  var msg = {
    body: rand
   }
   return api.sendMessage(msg, threadID, messageID);
  }
 }
 module.exports.run = function({ api, event, client, __GLOBAL }) {

}