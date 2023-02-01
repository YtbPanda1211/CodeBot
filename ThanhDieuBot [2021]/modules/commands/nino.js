module.exports.config = {
    name:"nino",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Nói chiện zới bot nino cute",
    commandCategory: "General",
    usages: "nino [câu hỏi]/[on,off]",
    cooldowns: 5
};

const axios = require('axios');

module.exports.languages = {
    "vi": {
        "on": "bật thành công ninoreply!",
        "off": "đã tắt ninoreply!",
        "novalue": "Nino ko hiểu, dạy Nino đi :<",
        "nokey": "ủa hỏi j hỏi đi ;-;",
    },
    "en": {
        "on": "turned on ninoreply",
        "off": "turned off ninoreply",
        "novalue": "Nino does not understand, please teach Nino :<",
        "nokey": "what do you want to ask me about ;-;?",
    }
}


module.exports.event = async ({ api, event, args, Threads, getText }) => {
    let data = (await Threads.getData(event.threadID)).data;
    
    if (typeof data["ninoreply"] == "undefined" || data["ninoreply"] == false) return;

    if (event.senderID !== api.getCurrentUserID()) {
    axios.get(encodeURIComponent(`https://api-ninoreply-adreno.herokuapp.com/get/${event.body}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "ủa nói j hong hiểu :<") {
                api.sendMessage(getText("novalue"),event.threadID,event.MessageID)
            } else {
                return api.sendMessage(res.data.reply, event.threadID, event.messageID);
            }
    })
    }   
}

module.exports.run = async ({ api, event, args, getText, Threads }) => {
    if (!args[0]) { api.sendMessage(getText("nokey"), event.threadID, event.messageID) } else {
        let data = (await Threads.getData(event.threadID)).data;
        switch(args[0]) {
            case "on": {
                data["ninoreply"] = true;
                api.sendMessage(getText("on"), event.threadID);
                break;
            }
            case "off": {
                data["ninoreply"] = false;
                api.sendMessage(getText("off"), event.threadID);
                break;
            }
            default:
            axios.get(encodeURIComponent(`https://api-ninoreply-adreno.herokuapp.com/get/${args.join(" ")}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "ủa nói j hong hiểu :<") {
                api.sendMessage(getText("novalue"),event.threadID,event.MessageID)
            } else {
                return api.sendMessage(res.data.reply, event.threadID, event.messageID);
            }
            });
            break;
        }
    }
}