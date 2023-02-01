//idea by Adrestia Croimoux
module.exports.config = {
	name: "quizizz",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DungUwU",
	description: "một vài câu đố bằng tiếng anh .-.",
	commandCategory: "game",
  	cooldowns: 5,
	dependencies: {
		"shuffle-array": ""
	}
}

const shuffle = require('shuffle-array');
module.exports.handleReply = ({api,event,handleReply}) => {
  const { threadID, messageID, body } = event;
  let correct_answers = handleReply.answers.slice(-1);
  let answers = handleReply.answers.slice(0, handleReply.answers.length - 1);
  if (answers[body - 1] == correct_answers) {
    return api.sendMessage('Correct!', threadID, messageID);
  } else if(isNaN(body)) {
    return api.sendMessage('Not a number!',threadID,messageID);
  } else if (body > answers.length) {
    return api.sendMessage('Exceeded the number of answers', threadID, messageID);
  } else {
    return api.sendMessage('Incorrect!, the correct answer is: ' + correct_answers, threadID, messageID);
  }
}

module.exports.run = ({api,event}) => {
  require('axios').get('https://opentdb.com/api.php?amount=1')
    .then(res => {
      let answers = res.data.results[0].incorrect_answers;
      answers.push(res.data.results[0].correct_answer);
      let msg = "", num = 1;
      shuffle(answers);
      for (const value of answers) {
					msg += (`${num++}. ${value}\n`);
			}
      answers.push(res.data.results[0].correct_answer);
      return api.sendMessage(res.data.results[0].question.replace('&quot','\"') + '\n' + msg, event.threadID,(error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, answers }), event.messageID);
  })
}