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

  bot.sendMessage(msg.chat.id, "Wrlcome", {
    "reply_markup": {
      "keyboard": [
        ["Пасхалка","Инфо"],
        ["AAA"],
        ["BBB", "BBB"],
      ]
    }
  });

});
bot.on('message', (msg) => {

  var Pask = "Пасхалка";
  var info = "Инфо";
  if (msg.text.toString().indexOf(Pask) === 0) {
    bot.sendMessage(msg.chat.id, "Ты нашел Посхалку :)", {
      parse_mode: "HTML"
    });
  }
  else if (msg.text.toString().indexOf(info) === 0) {
    bot.sendMessage(msg.chat.id, " Ну это бот \n И еще его сделал @ProgerAN \n Ну и на этом наверное все", {
      parse_mode: "HTML"
    });
  }
  else {
    bot.sendMessage(msg.chat.id, "", {
      parse_mode: "HTML"
    });
  }
});