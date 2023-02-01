module.exports.config = {
    name: "bans",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "NTKhang & Editor BY DuyVuongUwU",
    description: "Cảnh cáo thành viên  đủ 3 lần sẽ ban khỏi nhóm (nhớ set qtv cho bot nha)\nAuthor: NTKhang",
    commandCategory: "group",
    usages: "[args]",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    let {messageID, threadID, senderID} = event;
    var info = await api.getThreadInfo(threadID);
    const out = msg => api.sendMessage(msg, threadID, messageID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return out(`Bot không có quyền để sử dụng lệnh này.`);
    var fs = require("fs-extra");
    
    if (!fs.existsSync(__dirname + `/cache/databan.json`)) {
            const dataaa = {bans: {}, banned: {}};
            fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(dataaa));
                    }
  var databan = JSON.parse(fs.readFileSync(__dirname + `/cache/databan.json`)); //đọc nội dung file
  if(!databan.bans.hasOwnProperty(threadID)) {
            databan.bans[threadID] = {}; 
            fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
    
  }
    var dtwbox = databan.bans[threadID];
    var allwarn = "";
    for(let idtvw in dtwbox) {
       var name = (await api.getUserInfo(idtvw))[idtvw].name, msg = "", solan = 1;
       for(let reasonwtv1 of dtwbox[idtvw]) {
       if (reasonwtv1 == "Không có lý do nào được đưa ra") var reasonwtv = ".";
       else var reasonwtv = reasonwtv1;
       msg += `${reasonwtv}`
          }
       if (msg == ".") allwarn += `${name}.`;
       else allwarn += `${name}: ${msg}\n`;
     }
    allwarn == "" ? api.sendMessage("Nhóm bạn chưa có ai bị ban.", threadID, messageID) : api.sendMessage("Danh sách những thành viên đã bị cấm vào nhóm:\n"+allwarn, threadID, messageID);
  }