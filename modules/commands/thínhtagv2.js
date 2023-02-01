module.exports.config = {
name: "ThínhV2",
    version: "2.0.1",
    hasPermssion: 0,
    credits: "Vương Thanh Diệu",
    description: "Thính V2",
    commandCategory: "NoPrefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Hôm nay tui sẽ kể cho các bạn câu chuyện về con chim của tui… à mà thôi… nó dài lắm..",

        "Ăn bẩn sống lâu… ăn cứt trâu bất tử.",

        "Có khi nào trên đường đời tấp nập… Ta vô tình đâm phầm phập vào nhau.",

        "Trời đã lạnh rồi mà tao còn xài DIANA COOL FRESH.?.",

        "Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.",

        "Ước j a lấy được nàng, A đè a hiếp cho nàng có thai",
        
        "Theo như anh được biết thì 70% cơ thể em là nước, vậy em có thể cho anh nuôi nhờ vài con nòng nọc được hong."

    ];
  var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Sẽ Gầy ${event.mentions[mention].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`Sẽ Gầy ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
}


