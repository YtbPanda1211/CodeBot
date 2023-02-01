module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "... - Long LTD",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "war đậm chất",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Nghe bố mày chửi đây mấy thằng nhóc !");
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích war lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi war cái" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" })}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺"})} , 115000);
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích war lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi war cái" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" })}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺"})} , 115000);
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích war lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi war cái" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" })}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺"})} , 115000);
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích war lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi war cái" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" })}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺"})} , 115000);
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích war lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi war cái" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" })}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺"})} , 115000);
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích war lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi war cái" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" })}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺"})} , 115000);
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích war lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi war cái" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" })}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺"})} , 115000);
setTimeout(() => {a({body: "Đ!t con mẹ chúng mày" })}, 3000);
setTimeout(() => {a({body: "Mấy thằng ranh con ra nghe bố mày chửi"})}, 5000);
setTimeout(() => {a({body: "Hiện hồn nhanh mấy con chó" })}, 7000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" })}, 9000);
setTimeout(() => {a({body: "Mấy thằng nhóc ranh thích war lắm à?" })}, 12000);
setTimeout(() => {a({body: "Đ!t cụ chúng mày nữa" })}, 15000);
setTimeout(() => {a({body: "Cho bố mày xin cái tuổi war cái" })}, 17000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" })}, 20000);
setTimeout(() => {a({body: "Mấy thằng nhóc ác vắt mũi chưa sạch bày đặt war với bố mày à?" })}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" })}, 25000);
setTimeout(() => {a({body: "Ngon thì ẳng con mẹ lên" })}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ chúng mày giờ" })}, 31000);
setTimeout(() => {a({body: "Xin cái tuổi ăn tao phát ?" })}, 36000);
setTimeout(() => {a({body: "Ngon thì ăn bố mày đi này" })}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" })}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" })}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" })}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" })}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" })}, 80000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" })}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì war tiếp nhé" })}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình war nha" })}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" })}, 105000);
setTimeout(() => {a({body: "Chào tạm biệt 🥺"})} , 115000);




  
  }