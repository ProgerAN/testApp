require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
  res.end('')
});


const TelegramBot = require('node-telegram-bot-api');

// const token = ' ... ';
const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/com/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Ты нашел подсказку :)');
});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Команда не распознана`);
});
