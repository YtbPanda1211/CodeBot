module.exports.config = {
    name: "delexp",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Hungcho",
    description: "xóa all",
    commandCategory: "admin",
    usages: "[del], [all]",
    cooldowns: 0
};

module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var exp = currenciesData.exp;
            if (typeof exp != "undefined") {
                exp -= exp;
                await Currencies.setData(user.id, { exp });
            }
        }
    }
    return api.sendMessage("done", event.threadID);
}