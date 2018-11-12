require('https').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
  res.end('')
});


const TelegramBot = require('node-telegram-bot-api');

const token = '678609158:AAEx7rtw_FXLDFwfSS1L6RDsGe-2Fu-nBoM';

const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.start((ctx) => {
  ctx.reply("Клавиатура", Markup.inlineKeyboard([
    Markup.callbackButton("Тестовая кнопка", "groups"),
  ]).extra());
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Сообщения принял`);
});