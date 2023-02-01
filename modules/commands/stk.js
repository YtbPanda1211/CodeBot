const fs = require("fs");
module.exports.config = {
name: "stk",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung",
    description: "stk",
    commandCategory: "stk",
    usages: "stk",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("stk")==0 || (event.body.indexOf("Stk")==0) || (event.body.indexOf("STK")==0) || (event.body.indexOf("Donate")==0) || (event.body.indexOf("donate")==0) || (event.body.indexOf("DONATE")==0)) {
        var msg = {
                body: "- Vietinbank : 107873856811\n- MOMO : 0968091844",
                attachment: fs.createReadStream(__dirname + `/noprefix/stk.gif`)
            }
            return api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}