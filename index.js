require('https').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
  res.end('')
});


const TelegramBot = require('node-telegram-bot-api');

const token = '678609158:AAEx7rtw_FXLDFwfSS1L6RDsGe-2Fu-nBoM';

const bot = new TelegramBot(token, {polling: true});

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Кнопка 1', callback_data: '1' }],
      [{ text: 'Кнопка 2', callback_data: 'data 2' }],
      [{ text: 'Кнопка 3', callback_data: 'text 3' }]
    ]
  })
};

bot.onText(/\/com/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
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
