require('http').createServer().listen(process.env.PORT || 5000).on('request', function (req, res) {
  res.end('')
});
var reqTimer = setTimeout(function wakeUp() {
  request("https://hero-bot-sp.herokuapp.com", function () {
    console.log("WAKE UP DYNO");
  });
  return reqTimer = setTimeout(wakeUp, 1200000);
}, 1200000);

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN; // Heroku configVar 
const bot = new TelegramBot(token, {
  polling: true
});

 



bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
      "keyboard": [
        ["pask","info"],
        ["AAA"],
      ]
    }
  });

});
bot.on('message', (msg) => {

  var Pask = "pask";
  if (msg.text.toString().toLowerCase().indexOf(Pask) === 0) {
    bot.sendMessage(msg.chat.id, "Ты нашел Посхалку :)", {
      parse_mode: "HTML"
    });
  }
  var info = "info";
  else if (msg.text.toString().toLowerCase().indexOf(info) === 0) {
    bot.sendMessage(msg.chat.id, "Типо информация", {
      parse_mode: "HTML"
    });
  }
  else {
    bot.sendMessage(msg.chat.id, "Эй, холоп остановись", {
      parse_mode: "HTML"
    });
  }
});