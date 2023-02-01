module.exports.config = {
    name: "tangai",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "CatalizCS",
    description: "",
    commandCategory: "other",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
    const data = ["Mùa xuân thì có hoa đào.\nNhưng cho anh hỏi mùa nào có em.",

        "Tết nhà anh cũng có nem\nNhưng mà anh muốn có em theo kèm.",

        "Người ta thì thích lì xì\nCòn em chỉ thích tánh kỳ anh thôi.",

        "Tết về xuân cũng đã sang\nGiờ đây chỉ muốn rước nàng về dinh",
       
        "Xuân sang tết đến linh đình\nMong nhanh hết dịch chúng mình cưới nhau",

        "Bên kia cái giậu mùng tơi\nTôi nuôi một mối tình thời ấu thơ",

        "Thịt mỡ dưa hành câu đối đỏ.\nThì thầm nói nhỏ 'em yêu anh'.",

        "Hôm nay trời lạnh quá. Muốn mua một vòng ôm. Nhưng mà tiền không có. Nên đành trả nụ hôn.",

        "Trời nay lạnh đến thế. Lại còn lất phất mưa. Tớ thích cậu nhiều thế. Cậu đã động lòng chưa.",

        "Mùa đông thì lạnh. Áo quần mong manh. Điều em muốn nhất. Là gần bên anh.",

        "Ngoài kia gió rét sương sa. Về đây có nắng, có nhà, có em",

        "Son màu đỏ, cỏ màu xanh, trời trở lạnh. Mình yêu dần đi anh",

        "Đông về cây buồn rụng hết lá. Em buồn vì lạnh giá chẳng có ai",

        "Trời lạnh rồi thôi cậu đừng đi chơi\nNằm xuống đây và chơi với tớ\nĐọc tớ nghe mấy câu chuyện cổ\nChẳng mấy mà qua hết mùa đông\n\nThanh xuân như một chén trà\nEm toàn uống rượu nên trà còn nguyên\n\nEm đây rất thích màu hồng\nThích luôn cả việc anh làm chồng emmmm\n\nHãy gọi em là Dove\nVì em sẽ giúp phục hồi hư tổn từ sâu bên trong\nHiền lành thì anh chê nhạt\nĐậm đà như mù tạt thì anh bảo hơi hăng\nTrăm năm trong cõi thiên hà\nEm tuy hơi ngáo nhưng mà cute\n\nVé số sáng mua chiều sổ\nAnh là ai đòi sáng cưa chiều đổ\n\nDù a là 1 con đề,\nMặc kệ kết quả vẫn liều để ôm",

        "Anh muốn hỏi em một câu này,…thực ra đấy không phải là một câu hỏi. Anh chỉ muốn nói là… Nếu như mà em là CocaCola thì anh sẽ là Pepsi! (Nghĩa là chúng ta là một cặp đồ uống đẹp đôi)",

        "Em ơi! Em là nghề gì đấy….? Sao đêm nào em cũng hiện lên trong giấc mơ của anh vậy? Anh chẳng biết làm thế nào nữa cả. Làm người yêu anh em nhé!",

        "Thế gian này đã dành không biết bao nhiêu giấy mực để viết về tình yêu. Còn anh, anh sẽ dành cả phần đời còn lại để yêu em để mang lại hạnh phúc cho em. Có được không em ???",

        "Nhiều khi muốn có 1 mối quan hệ mập mờ: – Không phải tình yêu – Không phải bồ bịch – Càng không phải người dưng.",

        "“ Nụ cười ươm đầy nắng\nÁnh mắt dư ngọt ngào\nTim anh mà có vắng\nDắt em vô với nàooo “",

        "Hãy cứ rực rỡ, hãy cứ ngọt ngào, hãy cứ an nhiên... rồi ta sẽ được bình yên như cái cách mà ta đang sống ...!",

        "Hoa nở một mùa, người sống một đời, vui vẻ tùy duyên được bao nhiêu sẽ thong dong tự tại bấy nhiêu.",

        "Luật pháp nào cấm Nam yêu Nữ?\nCông lý nào cấm Nữ yêu Nam?\nAnh sẽ mở phiên tòa xét xử\nXét vì tội: Em cướp trái tim anh.",

        "Yêu một người không khó\nVì chẳng cần lí do\nChút tình cảm nho nhỏ\nChỉ dành cho cậu đó.",

        "Hỡi thế gian Ai là người giỏi Toán?\nGiải dùm tôi bài toán của Tình yêu\nGiải vì sao mà tôi yêu người ấy?\nChứng minh rằng người ấy cũng yêu tôi.",

        "Trăm năm hút cỏ hút cần\nKhông bằng một phút được gần bên em.",

        " Vector chỉ có một chiều\nAnh dân chuyên Toán chỉ yêu một người.",
        
        "Trong 36 kế thì anh thích nhất … kế bên em.",

        "Cuộc đời này không giống như một bộ phim để cho mình có nhiều lần gặp gỡ. Để cho duyên mình được lỡ em có đồng ý làm nữ chính trong cuộc đời anh không?",

        " Theo luật dân sự, mọi sự trao đổi phải đồng giá. Em có muốn trao đổi một nửa cuộc đời em lấy một nửa cuộc đời anh không?",

        "- Trà sữa là trà đổ vào sữa hay sữa đổ vào trà.\n- Như nhau mà?\n– Thế tại sao anh đổ em mà em không đổ anh?",

        "Anh được học rằng 1 giờ có 60 phút và 1 phút có 60 giây. Nhưng không ai dạy anh rằng, một giờ thiếu em là mọi phút bận tâm, một phút vắng em là mọi giây vĩnh hằng.",

        "Chỉ có sự dịu dàng của em mới cứu anh thoát khỏi cái nóng nực của mùa hè. Và sự dịu dàng của em mới cứu anh thoát khỏi cái lạnh giá bất tận của mua đông. Cám ơn em đã cho anh thêm nhựa sống. Yêu và nhớ em thật nhiều.",

        "Hôm nay anh mệt rã rời\nMuốn ôm em ngủ kệ đời được không?"
        
    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}