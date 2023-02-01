module.exports.config = {
    name: "chuyenla",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "Dũngkon",
    description: "Những Câu Nói Hại Não",
    commandCategory: "Khác",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
    const data = ["[Có thể bạn chưa biết hoặc biết rồi]: bị mất điện là nhà bạn sẽ không có điện.",

    "[Có thể bạn chưa biết hoặc biết rồi]: bim bim cua không được làm từ thịt cua.",

    "[Có thể bạn chưa biết hoặc biết rồi]: bạn ăn nhiều sẽ bị no",

    "[Có thể bạn chưa biết hoặc biết rồi]: bắp rang bơ có vị bắp và vị bơ",

    "[Có thể bạn chưa biết hoặc biết rồi]: trời nóng bạn sẽ thấy nóng nhưng trời lạnh bạn sẽ thấy lạnh",

    "[Có thể bạn chưa biết hoặc biết rồi]: đi bộ lâu bạn sẽ cảm thấy mệt và mỏi chân",

    "[Có thể bạn chưa biết hoặc biết rồi]:khi trời mưa đường sẽ bị ướt",

    "[Có thể bạn chưa biết hoặc biết rồi]: trời tối bạn sẽ thấy tối",

    "[Có thể bạn chưa biết hoặc biết rồi]: nếu bạn buồn ỉa thì bạn phải đi ỉa",


    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}