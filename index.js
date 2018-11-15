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

  bot.sendMessage(msg.chat.id, {
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
  var WelcomeMsg = "Welcome";
  if (msg.text.toString().indexOf(WelcomeMsg) === 0) {
    bot.sendMessage(msg.chat.id, `Привет ${msg.from.first_name}`
    );
  }
  else if (msg.text.toString().indexOf(Pask) === 0) {
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
    bot.sendMessage(msg.chat.id, "Невеная команда", {
      parse_mode: "HTML"
    });
    telegramBot.sendAnimation(msg.chat.id, 'https://i.gifer.com/1z4Q.gif')
  }
});