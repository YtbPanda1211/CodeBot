module.exports.config = {
    name: "listthread",
    version: "1.0.5",
    credits: "Phạm Minh Duy",
    hasPermssion: 2,
    description: "Quản lý nhóm",
    commandCategory: "system",
    cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "invaildNumber": "%1 không phải là một con số hợp lệ",
"no": "THÔNG BÁO\n Nhóm bạn đã được gỡ ban",
"noo":"Đã gỡ ban thành công %1 nhóm.",
        "cancelSuccess": "Đã rời thành công %1 nhóm!",
        "notiBox": "Box của bạn đã bị ban, mọi thắc mắc vui lòng liên hệ Admin Đặng Quốc Khánh & Thùy Linh qua Facebook:\nhttps://www.facebook.com/16105176/\nhttps://www.facebook.com/100056847347510/",
        "approveSuccess": "Đã ban thành công %1 nhóm!",
"noti":"Đã nhận lời khỏi nhóm từ Admin, mọi thắc mắc vui lòng liên hệ Admin Đặng Quốc Khánh & Thùy Linh qua Facebook:\nhttps://www.facebook.com/16105176/\nhttps://www.facebook.com/100056847347510/",
        "cantGetPendingList": "Không thể lấy danh sách các nhóm đang chờ!",
        "returnListPending": "❮ Tổng số nhóm: %1 nhóm ❯\n\n%2",
        "returnListClean": "Hiện tại không có nhóm nào"
    },
    "en": {
 "invaildNumber": "%1 is not a valid number", "no": "NOTICE\n Your group has been removed", "noo":"Successfully unbanned %1 group.", "cancelSuccess": "Successfully left %1 group!", "notiBox": "Your box has been banned, any questions please contact Admin: https://www.facebook.com/HoangDoGiaNguyen.Official/", "approveSuccess": "Successfully banned %1 group!", "noti":"Received from the group from Admin, any questions please contact Admin: https://www.facebook.com/HoangDoGiaNguyen.Official/", "cantGetPendingList": "Unable to get list of pending groups!", "returnListPending": "❮ Total number of groups: %1 group ❯\n\n%2", "returnListClean": "Currently no groups"  }
}

module.exports.handleReply = async function({ api, event, handleReply, getText, Threads, args }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;
if (isNaN(body) && body.indexOf("Out") == 0) {
        const index = (body.slice(4, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
api.sendMessage(getText("noti"), handleReply.pending[singleIndex - 1].threadID);

api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("cancelSuccess", count), threadID, messageID);
    }



else if (isNaN(body) && body.indexOf("Ban") == 0) {
        const index = (body.slice(4, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            
const data = (await Threads.getData( handleReply.pending[singleIndex - 1].threadID)).data || {};
            data.banned = 1;
            await Threads.setData( handleReply.pending[singleIndex - 1].threadID, { data });
            global.data.threadBanned.set( handleReply.pending[singleIndex - 1].threadID, 1);
api.sendMessage(getText("notiBox"), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("approveSuccess", count), threadID, messageID);
    }

else if (isNaN(body) && body.indexOf("Unban") == 0) {
        const index = (body.slice(6, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);

const data = (await Threads.getData(handleReply.pending[singleIndex - 1].threadID)).data || {};
            data.banned = 0;
            await Threads.setData(handleReply.pending[singleIndex - 1].threadID, { data });
            global.data.threadBanned.delete(handleReply.pending[singleIndex - 1].threadID, 1);


 api.sendMessage(getText("no"),handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("noo", count), threadID, messageID);
    }


}

module.exports.run = async function({ api, event, args, getText, Threads, Users }) {
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;

    try {
        var spam = await api.getThreadList(50, null, ["INBOX"]) || [];
        
    } catch (e) { return api.sendMessage(getText("cantGetPendingList"), threadID, messageID) }

    const list = [...spam].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\nSố thành viên: ${single.participantIDs.length}\n\n`;

    if (list.length != 0) return api.sendMessage(getText("returnListPending", list.length, msg), threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage(getText("returnListClean"), threadID, messageID);



}