require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){ res.end('') });
var reqTimer = setTimeout(function wakeUp() {
  request("https://hero-bot-sp.herokuapp.com", function() {
     console.log("WAKE UP DYNO");
  });
  return reqTimer = setTimeout(wakeUp, 1200000);
}, 1200000);

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN; // Heroku configVar
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/pask/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Ты нашел подсказку :)');
});

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Команда не распознана`);
});
