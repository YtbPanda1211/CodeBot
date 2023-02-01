module.exports.config = {
    name: "rps",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra
    description: "búa bao kéo",
    commandCategory: "rps",
    usages: "[tag]",
    cooldowns: 0,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args }) {
    const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
        return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50 đô", threadID, messageID);
       }
       var data = await Currencies.getData(event.senderID);
  var money = data.money
  var i = 1000;
  var number = getRandomInt(0, 50)
    if (args[1] < 50 || isNaN(args[1])) {
        outMsg("Vui lòng nhập ✌️ hoặc 👊 hoặc ✋")
    }
    var turnbot = ["✌️","👊","✋"]
    if (money < coins) {
        api.sendMessage(`Bạn không đủ ${coins}$ để chơi`, threadID, messageID)
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          var userturn = args.join( " ")
          if (userturn == "✌️"||userturn == "👊"||userturn == "✋") {
            if (userturn == turnbot) {
              return outMsg(`Hòa\nUser : ${userturn}\nBot : ${botturn} `)
            } else if (userturn == "✌️") {
              if (botturn == "👊") {
                return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn}\nTrừ ${coins} đô `) 
              } else if (botturn == "✋") {
                return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn}\nTrừ ${coins} đô `)
            }
          } else if (userturn == "👊") {
            if (botturn == "✋") {
              return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn}\nTrừ ${coins} đô `)
            } else if (botturn == "✌️") {
              return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn}\nTrừ ${coins} đô `)
          }
        } else if (userturn == "✋") {
          if (botturn == "✌️") {
            return outMsg(`Bot win\nUser : ${userturn}\nBot : ${botturn}\nTrừ ${coins} đô `)
          } else if (botturn == "👊") {
            return outMsg(`User win\nUser : ${userturn}\nBot : ${botturn}\nTrừ ${coins} đô `)
        }
      }
        } else {
          return outMsg("Sai Format")
        }
}