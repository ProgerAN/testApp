

const TelegramBot = require('node-telegram-bot-api');

const token = '678609158:AAEx7rtw_FXLDFwfSS1L6RDsGe-2Fu-nBoM';

const bot = new TelegramBot(token, {polling: true});

bot.listen(process.env.PORT || 3000 ,function(){
  console.log("up and running on port "+process.env.PORT);
});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Сообщения принял');
});