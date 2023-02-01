const fs = require("fs");
module.exports.config = {
    name: "12 cung hoàng đạo",
    version: "2.0.5",
    hasPermssion: 0,
    credits: "Long LTD & mod BY HĐGNUwU", 
    description: "no prefix",
    commandCategory: "Không cần dấu lệnh",
    usages: "12 cung hoàng đạo",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
    console.log("tét");
    switch(event.body){
        case "1":
            api.sendMessage({
                body: "1. Ma Kết\n\n(22/12 – 19/1 ngày): \nTình cảm: Ma Kết cùng người ấy có sự bất đồng quan điểm tuy nhiên bạn lại không nhận ra sự khác biệt nằm ở đâu cả.\nCông việc: Bạn đang phải chịu những sự khó khăn trong công việc, vì vậy hãy cẩn thận hơn nhé.\nTiền bạc: Cung hoàng đạo này chi tiêu rất tiết kiệm nên bạn không cần lo lắng về tiền bạc nữa.\nCon số may mắn trong ngày: 26, 45.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/maket.jpg`)
            }, event.threadID, event.messageID);
            break;
        case "2":
            api.sendMessage({
                body: "\n2. Bảo Bình\n\n(20/1 – 18/2 ngày): \nTình cảm: Bảo Bình rất mệt mỏi khi những người tưởng như thân thiết lại khiến bạn cảm thấy rất khó chịu vì toàn nói những điều không may mắn.\nCông việc: Cung hoàng đạo này dễ bị cấp trên nắm thóp nên bạn càng phải cố gắng để đánh tan quan điểm đó thì hơn.\nTiền bạc: Đừng chi tiêu vượt mức cho phép vì mùa dịch thu nhập của Bảo Bình đã không dễ kiếm rồi.\nCon số may mắn trong ngày: 10, 55.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/baobinh.jpg`)
            }, event.threadID, event.messageID);
            break;
        case "3":
            api.sendMessage({
                body: "3. Song Ngư\n\n(19/2 – 20/3 ngày): \nTình cảm: Song Ngư luôn tỏ ra mình là một người không hiểu chuyện nhưng bạn lại vô cùng đau khổ khi làm sai ý mọi người.\nCông việc: Trong công việc, dường như việc làm mọi người hài lòng đang trở thành nhiệm vụ của Song Ngư vậy.\nTiền bạc: Cung hoàng đạo khá thông minh khi lập ra những quỹ nhỏ trong chi tiêu.\nCon số may mắn trong ngày: 22, 56.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/songngu.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "4":
            api.sendMessage({
                body: "4. Bạch Dương\n\n(21/3 – 19/4 ngày): \nTình cảm: Bạch Dương hôm nay có Tinh Không nên chuyện tình cảm không được thuận lợi cho lắm.\nCông việc: Cung hoàng đạo này luôn cảm thấy rất bực mình vì đồng nghiệp liên tục làm phiền bạn trong thời gian dài.\nTiền bạc: Bạch Dương nên kiểm soát chi tiêu thì hơn.\nCon số may mắn trong ngày: 23, 56.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/bachduong.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "5":
            api.sendMessage({
                body: "5. Kim Ngưu\n\n(20/4 – 20/5 ngày): \nTình cảm: Kim Ngưu cảm thấy rất khó tin khi người ấy không hiểu được thiện ý của bạn khi muốn giúp đỡ họ.\nCông việc: Có vẻ như Mặt Trăng đang giúp cho những mối quan hệ công việc xung quanh Kim Ngưu được thuận lợi hơn.\nTiền bạc: Hãy cẩn thận về vấn đề tài chính nếu bạn không muốn bị người khác lừa gạt.\nCon số may mắn trong ngày: 11, 67.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/kimnguu.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "6":
            api.sendMessage({
                body: "6. Song Tử\n\n(21/5 – 21/6 ngày): \nTình cảm: Song Tử trong ngày quá sức chịu đựng nên quyết định nói hết tất cả những sự uất ức với người đó.\nCông việc: Hôm nay vì gặp được quý nhân xem như Song Tử có thể vượt qua được khó khăn trước mắt rồi.\nTiền bạc: Song Tử đừng vay tiền của ai nếu bạn không có khả năng chi trả nhé.\nCon số may mắn trong ngày: 70, 99.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/songtu.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "7":
            api.sendMessage({
                body: "7. Cự Giải\n\n(22/6 – 22/7 ngày): \nTình cảm: Cự Giải vẫn nên yên phận thì hơn nếu bạn làm to mọi chuyện cũng đâu giải quyết được điều gì đâu.\nCông việc: Cung hoàng đạo này không muốn người khác nghĩ rằng mình đang gặp khó khăn nên lúc nào bạn cũng tỏ ra công việc rất thuận lợi.\nTiền bạc: Bạn đang phải cân đo đong đếm từng đồng một.\nCon số may mắn trong ngày: 31, 67.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/cugiai.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "8":
            api.sendMessage({
                body: "8. Sư Tử\n\n(24/7 – 22/8 ngày): \nTình cảm: Sư Tử khó có thể vượt qua sự khó khăn khi tình cảm đang vào những ngày nhạy cảm.\nCông việc: Trong công việc, cung hoàng đạo này rất biết cách để lấy lòng cấp trên nên bạn làm gì cũng được thuận lợi.\nTiền bạc: Sư Tử không nên chi tiêu linh tinh trong thời điểm này nhé.\nCon số may mắn trong ngày: 14, 88.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/sutu.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "9":
            api.sendMessage({
                body: "9. Xử Nữ\n\n(24/8 – 22/9 ngày): \nTình cảm: Xử Nữ được người ấy nâng đỡ trong mọi lĩnh vực của cuộc sống nên bạn rất dự dẫm.\nCông việc: Chuyện công việc không có gì khó khăn cho đến lúc bạn gặp phải một sự cố nhỏ liên quan đến giấy tờ.\nTiền bạc: Xử Nữ không nên đánh giá cao khả năng quản lý tài chính của mình.\nCon số may mắn trong ngày: 15, 78.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/xunu.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "10":
            api.sendMessage({
                body: "10. Thiên Bình\n\n(23/9 – 22/10 ngày): \nTình cảm: Thiên Bình trong ngày khá mệt mỏi vì người ấy không tin tưởng ở bạn khi cả hai ở bên nhau.\nCông việc: Cung hoàng đạo này liên tục có những sự nhạy bén trong công việc, vì vậy bạn giải quyết mọi thứ đều nhanh nhẹn.\nTiền bạc: Cung hoàng đạo này đã tiết kiệm được 1 khoản nhỏ.Con số may mắn trong ngày: 18, 90.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/thienbinh.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "11":
            api.sendMessage({
                body: "11. Bọ Cạp\n\n(24/11 – 21/11 ngày): \nTình cảm: Bọ Cạp từng lo nghĩ về bản thân mình không đủ tốt để yêu người ấy, vì vậy bạn đã chọn cách chia xa.\nCông việc: Bọ Cạp rất bực mình khi liên tục gặp phải những chuyện không hay và bắt nguồn từ đồng nghiệp.\nTiền bạc: Chi tiêu đối với cung hoàng đạo này lúc nào cũng eo hẹp.\nCon số may mắn trong ngày: 34, 89.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/bocap.jpg`)
            }, event.threadID, event.messageID); 
            break;
        case "12":
            api.sendMessage({
                body: "12. Nhân Mã\n\n(22/11 – 21/12 ngày): \nTình cảm: Nhân Mã không thể đánh mất người ấy được vì họ là người nắm giữ tất cả những bí mật của bạn.\nCông việc: Chòm sao này vô cùng thông minh nên mọi chuyện đối với Nhân Mã đều không có lý do gì mà phải trì hoãn cả.\nTiền bạc: Nhân Mã biết cách chi tiêu hiệu quả.\nCon số may mắn trong ngày: 15, 67.", 
                attachment: fs.createReadStream(__dirname + `/noprefix/12cunghoangdao/nhanma.jpg`)
            }, event.threadID, event.messageID); 
            break;
        default:
    }
}

module.exports.handleEvent = function({ api, event}) {
    if (event.body.indexOf("12 cung hoàng đạo")==0 || (event.body.indexOf("12 cung hoàng đạo")==0)) {
        api.sendMessage({
            body: "==== 12 cung hoàng đạo ====\n 1. Ma Kết\n 2. Bảo Bình\n 3. Song Ngư\n 4. Bạch Dương\n 5. Kim Ngưu\n 6. Song Tử\n 7. Cự Giải\n 8. Sư Tử\n 9. Xử Nữ\n10. Thiên Bình\n11. Bọ Cạp\n12. Nhân Mã\n\nReply tin nhắn này theo số thứ tự để xem thêm về cung hoàng đạo <3",
            attachment: fs.createReadStream(__dirname + `/cache/12cunghoangdao.jpg`)
        }, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
    }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}
