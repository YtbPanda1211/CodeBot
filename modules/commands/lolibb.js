module.exports.config = {
    name: "lolibb",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VĐT&NTH",
    description: "xem hệ mặt trời UwU.",
    commandCategory: "news",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
};

module.exports.run = function ({ event, api, getText}) {
    var path = require("path");
    var fs = require("fs");
    var randomImg = path.join(__dirname, "cache", "randomimg");
    if(folderimg.length != 0){
    const pathRandom = join(__dirname, "cache", "randomimg", `${randomImg[Math.floor(Math.random() * randomImg.length)]}`);
    formPush = { body: "hú", attachment: createReadStream(pathRandom) }
    }
            return api.sendMessage(formPush,messageID, threadID);
}