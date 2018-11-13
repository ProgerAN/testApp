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
        ["Пасхалка"],
        ["Инфо"],
      ]
    }
  });

});
bot.on('message', (msg) => {

  var Hi = "Пасхалка";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Ты нашел посхалку :)");
  } else {
    bot.sendMessage(msg.chat.id,"Холоп, команду не понел");
  }
 });