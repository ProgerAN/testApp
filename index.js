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
    bot.sendMessage(msg.chat.id, "Help Me", { 
      parse_mode: "HTML"
    });
    bot.sendPhoto(msg.chat.id, 'http://for-dle.ru/uploads/posts/2017-07/1499537558_viktor_kern_blk_404_16_9_1600_eng.png');

  }
});